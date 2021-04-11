const isEmpty = require("./is-empty");
const Validator = require("validator");

validateLoginInput = (data) => {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (!Validator.isLength(data.password, { min: 4, max: 25 })) {
    errors.text = "Password must be between 8 and 25 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = { validateLoginInput };
