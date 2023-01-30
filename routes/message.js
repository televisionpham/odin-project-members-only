const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

router.get("/create", messageController.create_message_get);
router.post("/create", messageController.create_message_post);

router.post("/:id/delete", messageController.delete_message_post);

module.exports = router;
