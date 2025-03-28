const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth.routes"); 

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Dùng cái này thay vì bodyParser.json()
app.use(express.urlencoded({ extended: true })); // Hỗ trợ đọc dữ liệu form

// Routes
app.use("/api/auth", authRoutes);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server chạy tại http://localhost:${port}`));
