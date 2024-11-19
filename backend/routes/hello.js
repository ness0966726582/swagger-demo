const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Returns a "Hello, World!" message
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello, World!
 */
router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

module.exports = router;

