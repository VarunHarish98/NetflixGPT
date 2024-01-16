import {
  validEmail,
  validPassword,
  validName,
  emailRegex,
  passwordRegex,
  nameRegex,
  signIn,
} from "../constants/constants";

export const validateForm = (email, password, name , isSignIn) => {
  let isEmail = emailRegex.test(email);
  let isPassword = passwordRegex.test(password);
  let isName = nameRegex.test(name);
  console.log(isName)
  if (!isEmail) return validEmail;
  if (!isPassword) return validPassword;
  // if(!signIn)
  if (!isSignIn && !isName) return validName;
  return null;
};

export const setErrorMessage = (error) => {
  return error?.message || error?.value || error;
};
