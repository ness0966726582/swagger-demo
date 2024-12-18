# swagger-demo
1. [建置文件準備](https://docs.google.com/document/d/1_kSVEw1GDWATSK60A1N0HSHbuMcFfXT5VePlorIuKQg/edit?tab=t.5jst5rcf4n5z)
2. 查看 APIs文檔 [Swagger Editor](https://editor.swagger.io/) 

# 環境+後端 swagger build apis
![image](https://github.com/user-attachments/assets/603e8110-d9b2-42eb-9639-5e5189a82021)

### 1.後端-環境安裝(backend-Environment installation)
1.安裝 Node.js-[官網](https://nodejs.org/en)

2.使用 PowerShell
> node -v
> 
> npm -v

3.解壓縮-swagger-demo拖至桌面(cd 路徑到\swagger-demo)
  > 生成一個名為 swagger.js的檔案，儲存專案的基本設定。
  > 
  > npm init -y

  > 生成一個名為 package.json & node_modules的檔案，安裝 Express 和 Swagger 所需的套件  
  >
  > npm install express swagger-ui-express swagger-jsdoc
  
  > 將安裝 .env
  > 
  > npm install dotenv

  > 安裝 cors讓前端與後端伺服器可以自定義
  >
  > npm install cors
  
  > 將安裝 pg（PostgreSQL 客戶端）
  >
  > npm install pg

  

### 2.後端-資料庫(backend-db) 
  > 啟動creattable.py
  >
  > DB創建Table與data 提供後端程式取用

### 3.啟用後端服務器 (enable server)
  > 啟動伺服器 cd 路徑到\swagger-demo\backend
  >
  > node index.js

  > 開啟網頁 http://localhost:3000/api-docs 將開啟Swagger 搭建的 APIs 提供測試與前端使用

# 前端 Frontend
![image](https://github.com/user-attachments/assets/09461cae-cbb7-4e60-a5e7-f003b38beead)

### 4.前端環境安裝 frontend-Environment installation
  > 初始化專案(自動生成一個基本的 package.json 檔案)
  >
  > npm init -y

  > 安裝 Axios
  >  
  > npm install axios

  > 安裝 Cors
  >
  > npm install cors

### 5.啟用前端伺服器 (enable frontend-server)
  >啟動伺服器(有index.html的資料夾)
  >
  > cd 路徑到\swagger-demo\frontend
  > 
  > http-server --cors
  >
  > 開啟網頁 http://127.0.0.1:8080/index.html
  ![image](https://github.com/user-attachments/assets/7a65b916-e326-4edc-9c58-584719c42d3a)
