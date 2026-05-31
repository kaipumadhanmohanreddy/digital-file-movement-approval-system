const validateFileRequest = (data) => {
  const errors = {};

  /*
    Title Validation
  */

  if (!data.title || data.title.trim() === "") {
    errors.title = "Title is required";
  }

  /*
    Description Validation
  */

  if (!data.description) {
    errors.description = "Description is required";
  } else if (data.description.length < 10) {
    errors.description =
      "Description must be at least 10 characters";
  }

  /*
    Department Validation
  */

  if (!data.department) {
    errors.department = "Department is required";
  }

  /*
    Category Validation
  */

  if (!data.category) {
    errors.category = "Category is required";
  }

  return errors;
};

module.exports = validateFileRequest;