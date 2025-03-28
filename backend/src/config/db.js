const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // Thay đổi nếu bạn có user khác
  password: "", // Nếu có mật khẩu thì nhập vào đây
  database: "deliveryfooddb",
});

connection.connect((err) => {
  if (err) {
    console.error("Lỗi kết nối MySQL: " + err.message);
    return;
  }
  console.log("Kết nối MySQL thành công!");
});

module.exports = connection;
