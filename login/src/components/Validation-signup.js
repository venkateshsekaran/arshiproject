const Validation = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }
  // let passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W).{6,18}/g;
  if (!values.password) {
    errors.password = "password is required";
  } else if (values.password.length < 5) {
    errors.password = "password should be more than five characters.";
  }

  return errors;
};
export default Validation;
