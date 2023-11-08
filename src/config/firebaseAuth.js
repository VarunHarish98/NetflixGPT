import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const fireBaseAuth = (
  formRes,
  email,
  password,
  isSignInForm,
  setIsFormCheck
) => {
  if (!formRes) {
    if (!isSignInForm) {
      //Sign-up logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
          setIsFormCheck(`${errorMessage} - ${errorCode}`);
        });
    } else {
      //Sign-In Logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
          setIsFormCheck(`${errorMessage} - ${errorCode}`);
        });
    }
  }
};
