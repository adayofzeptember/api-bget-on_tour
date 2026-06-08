const express = require('express');
const db = require('../db/db_connect');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { sendMailRegister, sendMailOTP } = require('./mail_service');
const { randomString } = require('../misc/random_id_create');
const requestIp = require('request-ip');
const UAParser = require('ua-parser-js');
const { format, differenceInMinutes } = require('date-fns');
const regis_router = express.Router();
const verifyToken = require('../misc/token');
const app = express();

regis_router.get('/schools', async (req, res) => {
    const sql = `
        SELECT 
            id,
            school_code,
            name,
            province,
            exam_datetime,
            video_url,
            timeline_json,
            payment_amount,
            payment_due_at
        FROM BS_schools WHERE is_active = 1
        ORDER BY id ASC
    `;

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                error: err.message
            });
        }

        const formatted = results.map((item) => {

            let timeline = item.timeline_json;

            try {
                timeline = JSON.parse(item.timeline_json);
            } catch (_) {

            }

            return {
                id: item.id,
                school_code: item.school_code,
                school_name: item.name,
                school_province: item.province,
                exam_datetime: item.exam_datetime,
                video_url: item.video_url,
                timeline_json: timeline,
                payment_amount: item.payment_amount,
                payment_due_at: item.payment_due_at,
            };
        });

        return res.status(200).json({
            success: true,
            count: formatted.length,
            data: formatted
        });
    });
});

regis_router.get('/check-dup', verifyToken, (req, res) => {
    const userIdToken = req.tokenData.userId;
    const query = "select customer_id from BS_students where customer_id = ?";
    db.query(query, [userIdToken], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการเชื่อมต่อ' });
        }
        if (results.length === 0) {
            return res.status(200).json({
                success: true,
                message: "สามารถสมัครได้"
            });
        }
        return res.status(200).json({
            success: false,
            message: "User ID ซ้ำ"
        });
    });
});

regis_router.get('/me', verifyToken, (req, res) => {
    const userIdToken = req.tokenData.userId;

    const get_profile_query = `
        SELECT 
            mod_customer.forename,
            mod_customer.surename,
            mod_customer.id_card,
            mod_customer.telephone,
            mod_customer.birthday,
            mod_customer.id_customer
        FROM mod_customer
        WHERE mod_customer.id_customer = ?
    `;

    db.query(get_profile_query, [userIdToken], (err, results) => {
        if (err) {
            console.error('Database error:', err);

            return res.status(500).json({
                message: 'เกิดข้อผิดพลาดในการเชื่อมต่อ'
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: 'ไม่พบข้อมูล'
            });
        }

        const user = results[0];

        return res.status(200).json({
            success: true,
            data: {
                id_customer: user.id_customer,
                name: `${user.forename} ${user.surename}`,
                id_card: user.id_card,
                phone: user.telephone,
                birth_day: user.birthday || ""
            }
        });
    });
});

regis_router.post('/register-student', verifyToken, async (req, res) => {

    const userIdToken = req.tokenData.userId;

    const {
        city,
        grade_level,
        school_id,
        id_card,
        tel,
        date
    } = req.body;

    const cityCodeMap = {
        Manchester: '01',
        Oxford: '02',
        Boston: '03',
        Los_Angeles: '04',
        Melbourne: '05',
        Sydney: '06',
        Tokyo: '07',
        Toronto: '08'
    };

    const cityCode = cityCodeMap[city];

    if (!cityCode) {
        return res.status(400).json({
            success: false,
            message: 'เมืองไม่ถูกต้อง'
        });
    }

    // ✅ เช็กสมัครซ้ำ
    const checkDuplicateQuery = `
        SELECT id
        FROM BS_students
        WHERE customer_id = ?
        LIMIT 1
    `;

    db.query(checkDuplicateQuery, [userIdToken], (err, duplicateResult) => {

        if (err) {
            console.error('Error check duplicate:', err);

            return res.status(500).json({
                success: false,
                message: 'Error check duplicate'
            });
        }

        if (duplicateResult.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'ไม่สามารถสมัครซ้ำได้'
            });
        }

        // ✅ หา student_seq ล่าสุด
        const getLastSeqQuery = `
            SELECT student_seq
            FROM BS_students
            ORDER BY student_seq DESC
            LIMIT 1
        `;

        db.query(getLastSeqQuery, (err, result) => {

            if (err) {
                console.error('Error get student_seq:', err);

                return res.status(500).json({
                    success: false,
                    message: 'Error get student_seq'
                });
            }

            let nextSeq = 1;

            if (result.length > 0) {
                nextSeq = result[0].student_seq + 1;
            }

            const seqFormatted = String(nextSeq).padStart(4, '0');

            const year2Digit = new Date()
                .getFullYear()
                .toString()
                .slice(-2);

            const exam_id = `${year2Digit}${cityCode}${grade_level}${seqFormatted}`;


            const insertQuery = `
                INSERT INTO BS_students (
                    exam_id,
                    city,
                    customer_id,
                    school_id,
                    grade_level,
                    student_seq
                )
                VALUES (?, ?, ?, ?, ?, ?)
            `;

            db.query(
                insertQuery,
                [
                    exam_id,
                    city,
                    userIdToken,
                    school_id,
                    grade_level,
                    nextSeq
                ],
                (err) => {

                    if (err) {

                        if (err.code === 'ER_DUP_ENTRY') {
                            return res.status(400).json({
                                success: false,
                                message: 'ไม่สามารถสมัครซ้ำได้'
                            });
                        }

                        console.error('Error insert student:', err);

                        return res.status(500).json({
                            success: false,
                            message: 'Database insert error'
                        });
                    }

                    // ✅ update mod_customer
                    const updateCustomerQuery = `
                        UPDATE mod_customer
                        SET
                            id_card = ?,
                            telephone = ?,
                            birthday = ?
                        WHERE id_customer = ?
                    `;

                    db.query(
                        updateCustomerQuery,
                        [
                            id_card,
                            tel,
                            date,
                            userIdToken
                        ],
                        (err) => {

                            if (err) {
                                console.error('Error update mod_customer:', err);

                                return res.status(500).json({
                                    success: false,
                                    message: 'Error update customer'
                                });
                            }

                            // ✅ สำเร็จทั้ง 2 ตาราง
                            return res.status(201).json({
                                success: true,
                                message: 'สมัครสอบสำเร็จ',
                                data: {
                                    exam_id,
                                    student_seq: nextSeq
                                }
                            });

                        }
                    );

                }
            );

        });

    });

});

regis_router.get('/regis-info', verifyToken, (req, res) => {
    const userIdToken = req.tokenData.userId;

    const get_profile_query = `
        SELECT 
            s.grade_level, 
            s.exam_id, 
            s.city, 
            s.school_id,

            sch.name AS school_name, 
            sch.province, 
            sch.exam_datetime, 
            sch.timeline_json,

            mc.forename,
            mc.surename,
            mc.id_card,
            mc.user_email,
            mc.telephone,
            DATE_FORMAT(mc.birthday, '%Y-%m-%d') AS birthday


        FROM BS_students s

        LEFT JOIN BS_schools sch 
            ON s.school_id = sch.id

        LEFT JOIN mod_customer mc
            ON s.customer_id = mc.id_customer

        WHERE s.customer_id = ?
    `;

    db.query(get_profile_query, [userIdToken], (err, results) => {


        if (err) {
            console.error('Database error:', err);

            return res.status(500).json({
                message: 'เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล'
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: 'ไม่พบข้อมูลนักเรียน'
            });
        }

        const studentData = results[0];
  
        // ถ้า school_id ไม่ match กับ BS_schools
        if (!studentData.school_name) {
            return res.status(200).json({
                success: true,
                data: {
                    grade_level: studentData.grade_level,
                    exam_id: studentData.exam_id,
                    city: studentData.city,

                    profile: {
                        forename: studentData.forename,
                        surname: studentData.surname,
                        id_card: studentData.id_card,
                        user_email: studentData.user_email,
                        telephone: studentData.telephone,
                        birthday: studentData.birthday
                    },

                    school: "ID ไม่ตรง"
                }
            });
        }

        let timeline = studentData.timeline_json;

        try {
            timeline = JSON.parse(studentData.timeline_json);
        } catch (_) {
            timeline = studentData.timeline_json;
        }
        birthday: studentData.birthday
 
        return res.status(200).json({
            success: true,
            data: {
                grade_level: studentData.grade_level,
                exam_id: studentData.exam_id,
                city: studentData.city,

                student: {
                    name: studentData.forename + " " + studentData.surename,

                    id_card: studentData.id_card,
                    user_email: studentData.user_email,
                    telephone: studentData.telephone,
                    birthday: studentData.birthday
                },

                school: {

                    school_name: studentData.school_name,
                    province: studentData.province,
                    exam_datetime: studentData.exam_datetime,
                    timeline: timeline
                }
            }
        });
    });
});

regis_router.post('/gate', async (req, res) => {
    try {
        const { code } = req.body;

        if (!code) {
            return res.json({
                success: false,
                message: 'กรุณาระบุ Access Code'
            });
        }

        const rows = await new Promise((resolve, reject) => {
            db.query(`
                SELECT
                    ac.*,
                    s.name AS school_name,
                    s.province
                FROM BS_access_codes ac
                LEFT JOIN BS_schools s
                    ON s.id = ac.school_id
                WHERE ac.code = ?
                LIMIT 1
            `, [code.trim()], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });

        if (rows.length === 0) {
            return res.json({
                success: false,
                message: 'ไม่พบ Access Code นี้'
            });
        }

        const accessCode = rows[0];

        if (Number(accessCode.is_active) !== 1) {
            return res.json({
                success: false,
                message: 'Access Code นี้ถูกปิดการใช้งาน'
            });
        }

        const now = new Date();

        if (accessCode.valid_from) {
            const validFrom = new Date(accessCode.valid_from);

            if (now < validFrom) {
                return res.json({
                    success: false,
                    message: 'Access Code ยังไม่ถึงวันเริ่มใช้งาน'
                });
            }
        }

        if (accessCode.valid_until) {
            const validUntil = new Date(accessCode.valid_until);

            if (now > validUntil) {
                return res.json({
                    success: false,
                    message: 'Access Code หมดอายุแล้ว'
                });
            }
        }

        return res.json({
            success: true,
            message: 'ตรวจสอบ Access Code สำเร็จ',
            data: {
                code: accessCode.code,
                school_id: accessCode.school_id,
                school_name: accessCode.school_name,
                province: accessCode.province
            }
        });

    } catch (error) {
        console.error('POST /gate ERROR:', error);

        return res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดภายในระบบ'
        });
    }
});

module.exports = regis_router;