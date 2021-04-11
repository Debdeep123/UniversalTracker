const isEmpty = require("./is-empty");
const Validator = require("validator");

validateComponentInput = (data) => {
  let errors = {};

  data.ssid = !isEmpty(data.ssid) ? data.ssid : "";
  data.c_data = !isEmpty(data.c_data) ? data.c_data : "";

  if (Validator.isEmpty(data.ssid)) {
    errors.ssid = "SSID is required";
  }

  if (Validator.isEmpty(data.c_data)) {
    errors.component = "Component data  is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = { validateComponentInput };
