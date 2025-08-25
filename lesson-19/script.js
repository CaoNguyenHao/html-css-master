// Lấy ID: chỉ trả về 1 phần tử
const title = document.getElementById("title");
title.innerText = "Tiêu đề đã đổi bằng JS";  // đổi text trong h1

// Lấy Class: trả về danh sách (HTMLCollection)
const messages = document.getElementsByClassName("message");

// Duyệt qua các phần tử có class "message"
for (let i = 0; i < messages.length; i++) {
    messages[i].style.fontWeight = "bold"; // in đậm chữ
}
