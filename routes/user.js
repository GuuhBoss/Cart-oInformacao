const express = require("express");
const router = express.Router();

const { update, userById } = require("../controllers/user");

router.put("/user/:userId", update);

router.param("userId", userById);

module.exports = router;
