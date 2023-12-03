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
export const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; //One char one number, one special char and atleast 8 chars
export const nameRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/; // Starts with Capital letter
export const tmdbURL = "https://image.tmdb.org/t/p/w780/";
export const netflixBackground =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/384d70af-0a67-470f-a87d-8cd53438e26f/US-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg";
export const apiOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjgxMWZjNDQ3ZDJlYWM2MDFiZTVmMzVkY2YwMGUyOCIsInN1YiI6IjY1NTE3Y2NmMDgxNmM3MDBmZDJkZGJhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D5Zj0yIavsi1PSb61HpbFJk11HrFUc3frztZOk2z07U",
  },
};
export const LANG_SUPPORTED = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "ka",
    name: "Kannada",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
];
