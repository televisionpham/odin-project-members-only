var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

/* GET users listing. */
router.get("/", userController.login_get);

router.get("/register", userController.register_get);
router.post("/register", userController.register_post);

router.get("/login", userController.login_get);
router.post("/login", userController.login_post);

router.post("/logout", userController.logout);

router.get("/join", userController.join_get);
router.post("/join", userController.join_post);

module.exports = router;
