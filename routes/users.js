var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

/* GET users listing. */
router.get("/", userController.signin_get);

router.get("/signup", userController.signup_get);
router.post("/signup", userController.signup_post);

router.get("/signin", userController.signin_get);
router.post("/signin", userController.signin_post);

module.exports = router;
