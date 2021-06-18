const express = require("express");
const app = express();
const PORT = 3005;
const usersRouter = require("./router/users.router");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));
// app.use("/images", express.static("images"));

app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
