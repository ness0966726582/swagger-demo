# swagger-demo
1. [建置文件準備](https://docs.google.com/document/d/1_kSVEw1GDWATSK60A1N0HSHbuMcFfXT5VePlorIuKQg/edit?tab=t.5jst5rcf4n5z)
2. [環境建置(本機連線資料庫)](https://docs.google.com/document/d/1_kSVEw1GDWATSK60A1N0HSHbuMcFfXT5VePlorIuKQg/edit?tab=t.buy4itt0tk0#heading=h.da7lmvekh7xh)
3. 查看 APIs文檔 [Swagger Editor](https://editor.swagger.io/) 

# 環境+後端 swagger build apis
### 1.後端-環境安裝(backend-Environment installation)
1.安裝 Node.js-[官網](https://nodejs.org/en)

2.使用 PowerShell
> node -v
> 
> npm -v

3.解壓縮-swagger-demo拖至桌面(cd 路徑到\swagger-demo)
- 生成一個名為 package.json的檔案，儲存專案的基本設定。
  > npm init -y

- 生成一個名為 node_modules的檔案，安裝 Express 和 Swagger 所需的套件  
  > npm install express swagger-ui-express swagger-jsdoc

- 將安裝 pg（PostgreSQL 客戶端）
  > 指令4: npm install pg

- 安裝 cors讓前端與後端伺服器可以自定義
  > npm install cors

### 2.後端-資料庫(backend-db) 
- 啟動creattable.py
  > DB創建Table與data 提供後端程式取用

### 3.啟用後端服務器 (enable server)
- 啟動伺服器 cd 路徑到\swagger-demo\backend
  > 指令1: node index.js
- 開啟網頁 http://localhost:3000/api-docs
  > 將開啟Swagger 搭建的 APIs 提供測試與前端使用

# 前端 Frontend
### 1.前端環境安裝 frontend-Environment installation
- 初始化專案(自動生成一個基本的 package.json 檔案)
  > npm init -y
- 安裝 Axios
  > npm install axios
- 安裝 Cors
  > npm install cors

### 2.啟用前端伺服器 (enable frontend-server)
- 啟動伺服器(有index.html的資料夾)
   > cd 路徑到\swagger-demo\frontend
   > 
   > http-server --cors
