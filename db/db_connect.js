
const mysql = require('mysql2');
require('dotenv').config();

const db_bewise = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  charset: 'utf8',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

db_bewise.getConnection((err, connection) => {
  if (err) {
    console.error('❌❌❌ not connect to database ❌❌❌', err);
    return;
  }

  console.log('✅ Connected to database ✅');
  connection.release();
});

module.exports = db_bewise;