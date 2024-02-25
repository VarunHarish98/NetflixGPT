import OpenAI from "openai";
// import { OPEN_AI_KEY } from "../constants/constants";
// console.log(process.env)
const openai = new OpenAI({
  apiKey: process.env["REACT_APP_OPEN_AI_KEY"], // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true
});

export default openai;