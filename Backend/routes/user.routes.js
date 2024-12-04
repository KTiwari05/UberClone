const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controllers");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name should be more than 3 letters"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Passoword must be of length more than 6"),
  ],
  userController.registerUser
);

module.exports = router;
