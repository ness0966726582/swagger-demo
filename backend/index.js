/*1. 環境變數設置
作用：加載 .env 文件中的環境變數，方便對伺服器進行配置，例如埠號、資料庫連接等。
優勢：能夠根據不同的運行環境（如開發、測試、正式）靈活設置變數。
*/
require('dotenv').config();

/*2. 引入必要的模組
express：用於構建 HTTP 伺服器，提供 API 路由。
swagger-ui-express 和 swagger-jsdoc：用於生成和展示 API 文檔。
cors：處理跨域請求，允許前端應用訪問後端 API。
*/
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const cors = require('cors'); // 引入 cors 模組

const helloRoutes = require('./routes/hello'); // 引入 /hello 路由
const userRoutes = require('./routes/users'); // 引入 /users 路由

/*3. 初始化 Express 應用
作用：創建 Express 應用實例。
使用 express.json() 解析 JSON 格式的請求體，方便處理 API 請求的數據。
*/
const app = express();
app.use(express.json());

/* 4.啟用 CORS 並限制允許的來源
作用：允許來自特定來源的跨域請求，確保前端能安全地與後端進行交互。
範例：只有來自 http://127.0.0.1:8080 和 http://localhost:8080 的請求會被接受。
*/
app.use(cors({ origin: ['http://127.0.0.1:8080', 'http://localhost:8080'] })); // 允許特定來源

/*5. Swagger 設定與文檔生成
作用：定義 API 文檔的結構，包括 API 名稱、版本、描述及可用的伺服器。
/api-docs 路由：提供可視化的 Swagger 文檔，便於開發者了解 API 結構和使用方式。

*/ 
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

/*6. 掛載路由
作用：
將 ./routes/hello 和 ./routes/users 路由模組掛載到應用中，分別對應 /hello 和 /users 路徑。
優勢：路由模組化，便於維護和擴展。
*/
app.use('/hello', helloRoutes);
app.use('/users', userRoutes);

/*7. 啟動伺服器
作用：啟動伺服器，並監聽 http://localhost:3000，準備接受請求。
Swagger 文檔位置：http://localhost:3000/api-docs。
*/
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
