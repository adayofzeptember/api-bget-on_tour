const express = require('express');
const db = require('../db/db_connect');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { sendMailRegister, sendMailOTP } = require('./mail_service');
const { randomString } = require('../misc/random_id_create');
const requestIp = require('request-ip');
const UAParser = require('ua-parser-js');
const { format, differenceInMinutes } = require('date-fns');
const auth_router = express.Router();
const verifyToken = require('../misc/token');
const app = express();


auth_router.post('/login', (req, res) => {
    const { user_name, user_password } = req.body;

    if (!user_name || !user_password) {
        return res.status(400).json({ message: 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_name)) {
        return res.status(400).json({ message: 'รูปแบบอีเมลไม่ถูกต้อง' });
    }

    const query = `
    SELECT users.*, mod_customer.* 
    FROM users 
    JOIN mod_customer 
      ON users.id_data_role = mod_customer.id_customer 
    WHERE user_name = ?
  `;

    db.query(query, [user_name], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({
                statusCode: 0,
                message: 'เกิดข้อผิดพลาดในการเชื่อมต่อ'
            });
        }

        if (results.length === 0) {
            return res.status(401).json({
                statusCode: 0,
                message: 'ไม่พบบัญชี'
            });
        }

        const user = results[0];

        bcrypt.compare(user_password, user.user_password, (err, isMatch) => {
            if (err || !isMatch) {
                return res.status(401).json({
                    statusCode: 0,
                    message: 'รหัสผ่านไม่ถูกต้อง'
                });
            }

            const token = jwt.sign(
                { userId: user.id_data_role },
                process.env.JWT_SECRET,
                { expiresIn: '365d' }
            );

            if (user.user_email_verify == 9) {
                return res.status(200).json({
                    success: true,
                    message: 'ยังไม่ยืนยันอีเมล',
                    statusCode: 2
                });
            }

            // ✅ log ข้อมูล IP + UA
            const normalizeIp = (ip) => {
                if (!ip) return null;
                return ip.startsWith('::ffff:') ? ip.split(':').pop() : ip;
            };

            const ip = normalizeIp(requestIp.getClientIp(req));
            const userAgentRaw = req.headers['user-agent'] || '';
            const formattedDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

            const insert_user_login = `
        INSERT INTO user_log_login (id_user_online, create_datetime, ip_address, browser) 
        VALUES (?, ?, ?, ?)
      `;

            db.query(insert_user_login, [user.id_data_role, formattedDate, "ipaddress", userAgentRaw], (err2) => {
                if (err2) {
                    console.error('Error inserting into user_log_login:', err2);

                }

                return res.status(200).json({
                    success: true,
                    message: 'เข้าสู่ระบบเสร็จสิ้น',
                    statusCode: 1,
                    ip: ip,
                    user_info: {
                        id: user.id_data_role,
                        name: user.forename,
                        surename: user.surename,
                        email: user.user_email,
                        tel: user.telephone
                    },
                    token: token
                });
            });
        });
    });
});

auth_router.post('/register', async (req, res) => {
    const { email, password, tel, firstname, lastname } = req.body;

    const random_for_id_user = randomString(35);
    const random_for_id_data_role = randomString(35);
    const hashedPassword = await bcrypt.hash(password, 10);

    const formattedDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    const query_check_dup = 'SELECT user_email FROM users WHERE user_email = ?';


    db.query(query_check_dup, [email], (err2, resCheckDup) => {
        if (err2) {
            console.error('Database query error:', err2);
            return res.status(500).json({ success: false, message: 'Database error' });
        }
        if (resCheckDup.length > 0) {
            return res.status(409).json({ success: false, message: 'อีเมลนี้เคยลงทะเบียนไว้แล้ว' });
        }

        //* insert users    
        const insert_user_query = `INSERT INTO users 
                    (id_user, id_data_role ,user_name, user_email, user_password, create_datetime) 
                    VALUES (?, ?, ?, ?, ?, ?)`;
        db.query(insert_user_query, [random_for_id_user, random_for_id_data_role, email, email,
            hashedPassword, formattedDate], (err, results) => {
                if (err) {
                    console.error('Error inserting into users: ', err);
                    return res.status(500).json({ success: false, statusCode: 0, message: 'Database insert error users' });
                }

                //! insert mod_cus ชื่อ-สกุล 
                const insert_mod_customer_query = `INSERT INTO mod_customer
                            (id_customer, forename, surename, user_email, create_id, create_datetime, telephone ) VALUES (?, ?, ?, ?, ?, ?, ?)`;
                db.query(insert_mod_customer_query, [random_for_id_data_role, firstname, lastname, email, random_for_id_data_role, formattedDate, tel], (err, results) => {
                    if (err) {
                        console.error('Error inserting into mod_customer :', err);
                        return res.status(500).json({ success: false, statusCode: 0, message: 'Database insert error mod_customer' });
                    }

                    //* C
                    // \ EGt */
                    const get_sendMail = `select id_customer, user_email_verify from mod_customer where user_email = ?`;


                    db.query(get_sendMail, [email], (err, results) => {
                        //*
                        if (err) {
                            console.error('Error sednamil :', err);
                            return res.status(500).json({ success: false, statusCode: 0, message: 'Database insert error mod_customer' });
                        }
                        sendMailRegister(email, "school.bewise-global.com/verify-email", results[0].id_customer, results[0].user_email_verify, 'success')
                            .then(mailResult => {
                                if (!mailResult.success) console.error('ส่งเมลไม่สำเร็จ:', mailResult.error);
                            });
                        return res.status(201).json({
                            success: true,
                            message: 'สมัครสมาชิกเสร็จสิ้น',
                            statusCode: 1,
                            data: {
                                id_user: random_for_id_user,
                                id_data_role: random_for_id_data_role,
                                //user_name: email,
                                user_email: email,
                                create_datetime: formattedDate,
                            }
                        });
                    });
                });
            });
    });
});

auth_router.get('/me', verifyToken, (req, res) => {
    const userIdToken = req.tokenData.userId;

    const get_profile_query = `
        SELECT 
            mod_customer.forename,
            mod_customer.surename,
            mod_customer.id_card,
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
                id_card: user.id_card
            }
        });
    });
});

module.exports = auth_router;
