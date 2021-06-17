const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "images" });
const PORT = 3005;
const usersRouter = require("./router/users.router");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Entrou");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
