const express = require("express");
const router = express.Router();
const passport = require("passport");

const componentfunc = require("../controllers/components");

// @route   GET api/component/test
// @desc    Tests  route
// @access  Private
router.get(
  "/test",
  passport.authenticate("jwt", { session: false }),
  componentfunc.testComponent
);

// @route   GET api/component/
// @desc    get all components
// @access  Private
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  componentfunc.getAllComponent
);

// @route   GET api/component/:ssid
// @desc    get all components
// @access  Private
router.get(
  "/ssid/:ssid",
  passport.authenticate("jwt", { session: false }),
  componentfunc.getCompBySSID
);

// @route   POST api/component/
// @desc    Insert new component.
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  componentfunc.postComponent
);

// @route   DELETE api/component/:ssid
// @desc    delete  components by ssid
// @access  Private
router.delete(
  "/ssid/:ssid",
  passport.authenticate("jwt", { session: false }),
  componentfunc.delComponentBySSID
);

// @route   UPDATE api/component/:ssid
// @desc    update  components by ssid
// @access  Private

router.post(
  "/ssid/:ssid",
  passport.authenticate("jwt", { session: false }),
  componentfunc.updateComponentBySSID
);

module.exports = router;
