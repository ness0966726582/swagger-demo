/*1.引入必要模組
express.Router()：建立一個新的路由器實例，用於定義 users 路由。
pool：資料庫連線池，用於執行 SQL 查詢。
*/
const express = require('express');
const router = express.Router();
const { pool } = require('../db'); // 引入資料庫連線模組

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve all users from the database
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 */
 
/*2. 路由處理程式(1) GET /users：查詢所有使用者
功能：
	從資料表 users 中查詢所有記錄。
	返回 JSON 格式的使用者列表。
Swagger 註解：
	描述了 API 的結構與回應格式（包含 id, name, email）。
*/ 
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Error fetching users' });
  }
});

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Add a new user to the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *     responses:
 *       201:
 *         description: User added successfully
 */
 
/*(2) POST /users：新增一個使用者
功能：
	從資料表 users 中查詢所有記錄。
	返回 JSON 格式的使用者列表。
Swagger 註解：
	描述了 API 的結構與回應格式（包含 id, name, email）。
*/ 
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error adding user:', err);
    res.status(500).json({ message: 'Error adding user' });
  }
});

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User deleted successfully
 */
 
/*(3) DELETE /users/:id：刪除一個使用者
功能：
	從路徑參數中獲取 id，刪除資料表 users 中對應的記錄。
	返回刪除操作的成功訊息。
Swagger 註解：
	描述了 API 路徑參數及回應訊息。
*/
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.json({ message: `User with ID ${id} deleted` });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ message: 'Error deleting user' });
  }
});

module.exports = router;
