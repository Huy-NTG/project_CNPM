const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Đăng ký tài khoản
router.post("/register", (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin!" });
  }

  const sql = "INSERT INTO users (username, password, role) VALUES (?, ?, ?)";
  db.query(sql, [username, password, role || "user"], (err, result) => {
    if (err) return res.status(500).json({ message: "Lỗi đăng ký!", error: err });
    res.json({ message: "Đăng ký thành công!", userId: result.insertId });
  });
});

// Đăng nhập
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin!" });
  }

  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, results) => {
    if (err) return res.status(500).json({ message: "Lỗi đăng nhập!" });
    if (results.length === 0) return res.status(401).json({ message: "Sai tài khoản hoặc mật khẩu!" });

    const user = results[0];
    res.json({ message: "Đăng nhập thành công!", user: { id: user.id, username: user.username, role: user.role } });
  });
});

module.exports = router;
