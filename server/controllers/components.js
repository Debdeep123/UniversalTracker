const mongoose = require("mongoose");
const component = require("../models/Component");
const validation = require("../validation/componentValidator");

testComponent = (req, res) => res.json({ msg: "Component Works" });

getAllComponent = (req, res) => {
  const errors = {};

  component
    .find()
    .then((comp) => {
      if (comp.length == 0) {
        errors.noComponent = "No component found in the database!";
        return res.status(404).json(errors);
      }
      res.json(comp);
    })
    .catch((err) => console.log(err));
};

getCompBySSID = (req, res) => {
  const errors = {};

  component
    .findOne({ ssid: req.params.ssid })
    .then((comp) => {
      if (!comp) {
        errors.noComponent =
          "No component matching the ssid " +
          req.params.ssid +
          " found in the database!";
        return res.status(404).json(errors);
      }
      res.json(comp);
    })
    .catch((err) => console.log(err));
};

postComponent = (req, res) => {
  req.body.c_data = JSON.stringify(req.body.c_data);
  const { errors, isValid } = validation.validateComponentInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  component
    .findOne({ ssid: req.body.ssid })
    .then((comp) => {
      if (comp) {
        errors.exist_ssid = "Already the ssid " + comp.ssid + " available!";
        return res.status(404).json(errors);
      }

      const newComponent = {
        ssid: req.body.ssid,
        c_data: req.body.c_data,
        Created_By: req.user.id,
      };

      new component(newComponent)
        .save()
        .then((comp) => res.json(comp))
        .catch((err) => console.log(err));
    })
    .catch((err) => res.status(404).json(err));
};

delComponentBySSID = (req, res) => {
  const errors = {};

  component
    .findOneAndDelete({ ssid: req.params.ssid })
    .then((comp) => {
      if (!comp) {
        errors.noComponent =
          "No component matching the ssid " +
          req.params.ssid +
          " found in the database!";
        return res.status(404).json(errors);
      }

      return res.json({
        success: "Component with " + comp.ssid + " has been deleted!",
      });
    })
    .catch((err) => console.log(err));
};

updateComponentBySSID = (req, res) => {
  const errors = {};
  const componentFields = {};
  component
    .findOne({ ssid: req.body.ssid })
    .then((comp) => {
      if (comp) {
        errors.exist_ssid =
          "ssid " + componentFields.ssid + " already exists in the database!";
        return res.status(400).json(errors);
      } else {
        if (req.body.ssid) componentFields.ssid = req.body.ssid;
        if (req.body.c_data)
          componentFields.c_data = JSON.stringify(req.body.c_data);
        componentFields.Updated_By = req.user.id;
        componentFields.Updated_On = new Date();
        component
          .findOneAndUpdate(
            { ssid: req.params.ssid },
            { $set: componentFields }
          )
          .then((comp) => {
            if (!comp) {
              errors.noComponent =
                "No component matching the ssid " +
                req.params.ssid +
                " found in the database!";
              return res.status(404).json(errors);
            }

            return res.json({
              success: "Component with " + comp.ssid + " has been updated!",
            });
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
};

module.exports = {
  testComponent,
  getAllComponent,
  getCompBySSID,
  postComponent,
  delComponentBySSID,
  updateComponentBySSID,
};
