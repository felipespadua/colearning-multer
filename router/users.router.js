const { Router } = require("express");
const router = Router();
const multer = require("multer");
const upload = multer({ dest: "public/images" });

const usersController = require("../controllers/users.controller");

router.get("/", usersController.getUsers);
router.post("/", upload.single("image"), usersController.createUser);

module.exports = router;
