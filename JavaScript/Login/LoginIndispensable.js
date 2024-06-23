document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form submit mặc định

    // Lấy giá trị từ form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Thông tin tài khoản mẫu để kiểm tra
    const validUsername = "admin";
    const validPassword = "password123";

    // Kiểm tra tính hợp lệ của tên tài khoản và mật khẩu
    if (username === validUsername && password === validPassword) {
        // Hiển thị hộp thoại cảnh báo khi đăng nhập thành công
        alert("Đăng nhập thành công! Chào mừng, " + username + ".");
        window.location.href = '/HTML/index.html';
    } else {
        // Hiển thị hộp thoại cảnh báo khi đăng nhập không thành công
        alert("Tên tài khoản hoặc mật khẩu không chính xác.");
    }
});
