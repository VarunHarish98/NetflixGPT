export const signIn = "Sign In";
export const signUp = "Sign Up";
export const needHelpLabel = "Need Help?";
export const validEmail = "Not a valid Email";
export const validPassword = "Not a valid Password";
export const validName = "Not a valid Full Name";
export const rememberMeLabel = "Remember Me";
export const signInLabel = "New to Netflix? Sign-up now.";
export const signUpLabel = "Already Registered? Sign In Now";
export const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; //One char one number, one special char and atleast 8 chars
export const nameRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
export const tmdbURL = "https://image.tmdb.org/t/p/original/";
export const apiOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjgxMWZjNDQ3ZDJlYWM2MDFiZTVmMzVkY2YwMGUyOCIsInN1YiI6IjY1NTE3Y2NmMDgxNmM3MDBmZDJkZGJhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D5Zj0yIavsi1PSb61HpbFJk11HrFUc3frztZOk2z07U",
  },
};
