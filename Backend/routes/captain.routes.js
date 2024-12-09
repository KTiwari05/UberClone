const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name should be more than 3 letters"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be of length more than 6"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be more than 3 letters"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be more than 3 letters"),
    body("vehicle.capacity")
      .isLength({ min: 1 })
      .withMessage("Capacity must be more than 1"),
    body("vehicle.vehicleType")
      .isIn(["car", "bike", "auto"])
      .withMessage("Vehicle type must be car, bike or auto"),
  ],
  captainController.registerCaptain
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be of length more than 6"),
  ],
  captainController.loginCaptain
);

router.get(
  "/profile",
  authMiddleware.authCaptain,
  captainController.getCaptainProfile
);

router.get(
  "/logout",
  authMiddleware.authCaptain,
  captainController.logoutCaptain
);

module.exports = router;
