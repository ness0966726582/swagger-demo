# swagger-demo
# 建置文件準備
> https://docs.google.com/document/d/1_kSVEw1GDWATSK60A1N0HSHbuMcFfXT5VePlorIuKQg/edit?tab=t.5jst5rcf4n5z

# 查看 APIs 文檔-> 打開 [Swagger Editor](https://editor.swagger.io/) 並將以下鏈接貼入 URL 欄位：

# 環境建置(本機連線資料庫)
https://docs.google.com/document/d/1_kSVEw1GDWATSK60A1N0HSHbuMcFfXT5VePlorIuKQg/edit?tab=t.buy4itt0tk0#heading=h.da7lmvekh7xh

====================================================================================
環境+後端 swagger build apis
==================================================================================== 
# 後端-環境安裝(backend-Environment installation)
1.安裝 Node.js-[官網](https://nodejs.org/en)

2.使用 PowerShell
- 指令1: node -v
- 指令2: npm -v

3.解壓縮-swagger-demo拖至桌面
- 指令1: cd 路徑到\swagger-demo
- 指令2: npm init -y
  > 將生成一個名為 package.json的檔案，儲存專案的基本設定。
- 指令3: npm install express swagger-ui-express swagger-jsdoc
  > 將生成一個名為 node_modules的檔案，安裝 Express 和 Swagger 所需的套件
- 指令4: npm install pg
  > 將安裝 pg（PostgreSQL 客戶端）
- 指令5: npm install cors
  > 安裝 cors讓前端與後端伺服器可以自定義

# 後端-資料庫(backend-db) 
- 啟動creattable.py
  > DB創建Table與data 提供後端程式取用

# 後端-伺服器啟動
- 啟動伺服器 cd 路徑到\swagger-demo\backend
  > 指令1: node index.js
- 開啟網頁 http://localhost:3000/api-docs
  > 將開啟Swagger 搭建的 APIs 提供測試與前端使用
====================================================================================
# 前端
==================================================================================== 
# 環境(frontend)
>
