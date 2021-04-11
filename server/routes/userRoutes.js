const express = require("express");
const router = express.Router();
const passport = require("passport");

const userfunc = require("../controllers/users");

// @route   GET api/component/test
// @desc    Tests  route
// @access  Public
router.get("/test", userfunc.testUser);

// @route   GET api/users/register
// @desc    Register user
// @access  Public
router.post("/register", userfunc.registerNewUser);

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post("/login", userfunc.loginUser);

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  userfunc.getCurrentUser
);

module.exports = router;
