const validateRegister = (data) => {
  const errors = {};

  /*
    Name Validation
  */

  if (!data.name || data.name.trim() === "") {
    errors.name = "Name is required";
  }

  /*
    Email Validation
  */

  const emailRegex = /^\S+@\S+\.\S+$/;

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Invalid email format";
  }

  /*
    Password Validation
  */

  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  /*
    Confirm Password Validation
  */

  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

module.exports = {
  validateRegister,
};