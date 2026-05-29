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

  const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

if (!data.password) {
  errors.password = "Password is required";
} else if (!passwordRegex.test(data.password)) {
  errors.password =
    "Password must contain minimum 8 characters, one uppercase, one lowercase, one number and one special character";
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