require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const helloRoutes = require('./routes/hello'); // 引入 /hello 路由
const userRoutes = require('./routes/users'); // 引入 /users 路由

const app = express();
app.use(express.json());

// Swagger 設定
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'PostgreSQL API Example',
      version: '1.0.0',
      description: 'An API connected to PostgreSQL with Swagger documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./index.js', './routes/*.js'], // 包括主檔案與所有路由
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);

// Swagger 路由
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// 掛載路由
app.use('/hello', helloRoutes);
app.use('/users', userRoutes);

// 啟動伺服器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
