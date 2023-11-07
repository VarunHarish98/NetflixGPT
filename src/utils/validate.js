import {
  validEmail,
  validPassword,
  validName,
  emailRegex,
  passwordRegex,
  nameRegex,
} from "../constants/constants";

export const validateForm = (email, password, name = "", isSignIn) => {
  let isEmail = emailRegex.test(email);
  let isPassword = passwordRegex.test(password);
  let isName = nameRegex.test(name);
  if (!isSignIn && !isName) return validName;
  if (!isEmail) return validEmail;
  if (!isPassword) return validPassword;
  return null;
};
