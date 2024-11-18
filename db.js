const { Pool } = require('pg');
require('dotenv').config(); // 載入 .env 檔案

// 使用 .env 檔案中的資料庫配置
const pool = new Pool({
  host: process.env.N_POSTGRES_SERVER,
  port: process.env.N_POSTGRES_PORT,
  user: process.env.N_POSTGRES_USER,
  password: process.env.N_POSTGRES_PASSWORD,
  database: process.env.N_POSTGRES_DB,
});

// 測試資料庫連線
pool.on('connect', () => {
  console.log('Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = { pool };
