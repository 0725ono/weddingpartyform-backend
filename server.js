const express = require("express");
const app = express();
const sendRouter = require("./routes/send");
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.json());
// おそらくこの下に持ってくる元のフロント側の指定を行う
// app.use(express.static(""))

// クロスオリジン対策
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const PORT = 3001;

// ミドルウェア
app.use("/api/v1/send", sendRouter);

// DBと接続
app.get("/", (req, res) => {
  res.send("hello express");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, console.log("FORMの開発開始"));
  } catch (err) {
    console.log(err);
  }
};

start();