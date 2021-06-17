const { Router } = require("express");
const router = Router();
const usersController = require("../controllers/users.controller");

router.get("/", usersController.getUsers);

module.exports = router;
