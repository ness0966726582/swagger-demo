swagger-demo/frontend/
├── index.html
├── script.js          
├── styles.css

啟動http伺服器(在index.html目錄下)
http-server --cors

使用說明
將文件保存到對應目錄：

在 swagger-demo/frontend/ 目錄下保存 index.html、styles.css 和 script.js。
啟動後端 API：

確保後端支持以下路由：
GET /users：獲取使用者清單。
POST /users：新增使用者。
DELETE /users/:id：刪除使用者。
打開瀏覽器運行：

使用瀏覽器直接打開 index.html。
功能測試
新增使用者：

在「新增使用者」區域輸入 name 和 email，點擊「新增」。
刪除使用者：

在「刪除使用者」區域輸入 id，點擊「刪除」。
刷新清單：

點擊「刷新清單」按鈕，獲取最新使用者清單。
如果需要調整功能或遇到其他問題，隨時提出！