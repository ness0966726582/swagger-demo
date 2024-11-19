const swaggerJsdoc = require('swagger-jsdoc');
const fs = require('fs'); // 引入 fs 模組，用於寫入文件

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
        url: `http://localhost:${process.env.PORT || 3000}`,
      },
    ],
  },
  apis: ['./routes/*.js'], // 指向所有路由檔案
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);

// 將 Swagger JSON 文件保存到本地的 docs 資料夾
const outputPath = './docs/swagger.json'; // 定義保存路徑
fs.mkdirSync('./docs', { recursive: true }); // 確保 docs 資料夾存在
fs.writeFileSync(outputPath, JSON.stringify(swaggerSpecs, null, 2));
console.log(`Swagger JSON file generated at ${outputPath}`);

module.exports = swaggerSpecs;
