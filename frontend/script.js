// API 基本設定
const API_BASE_URL = "http://localhost:3000/users"; // 替換成您的後端 API URL

// DOM 元素
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const addUserBtn = document.getElementById("addUserBtn");

const deleteIdInput = document.getElementById("deleteId");
const deleteUserBtn = document.getElementById("deleteUserBtn");

const refreshBtn = document.getElementById("refreshBtn");
const userList = document.getElementById("userList");

// 獲取使用者清單
async function fetchUsers() {
  try {
    const response = await fetch(API_BASE_URL); // GET 請求
    const users = await response.json();

    // 清空目前的清單
    userList.innerHTML = "";

    // 插入新的清單
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.id} - ${user.name} (${user.email})`;
      userList.appendChild(li);
    });
  } catch (error) {
    console.error("無法獲取使用者清單:", error);
    alert("獲取清單失敗，請檢查伺服器！");
  }
}

// 新增使用者
async function addUser() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) {
    alert("請輸入完整的名稱和 Email！");
    return;
  }

  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    if (!response.ok) throw new Error("新增失敗！");

    alert("新增成功");
    nameInput.value = "";
    emailInput.value = "";
    fetchUsers(); // 刷新清單
  } catch (error) {
    console.error("新增失敗:", error);
    alert("無法新增使用者，請檢查伺服器！");
  }
}

// 刪除使用者
async function deleteUser() {
  const id = parseInt(deleteIdInput.value, 10);

  if (isNaN(id)) {
    alert("請輸入有效的使用者 ID！");
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("刪除失敗！");

    alert("刪除成功");
    deleteIdInput.value = "";
    fetchUsers(); // 刷新清單
  } catch (error) {
    console.error("刪除失敗:", error);
    alert("無法刪除使用者，請檢查伺服器！");
  }
}

// 綁定按鈕事件
addUserBtn.addEventListener("click", addUser);
deleteUserBtn.addEventListener("click", deleteUser);
refreshBtn.addEventListener("click", fetchUsers);

// 初始化頁面時載入使用者清單
fetchUsers();
