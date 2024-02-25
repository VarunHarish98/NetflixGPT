import OpenAI from "openai";
// import { OPEN_AI_KEY } from "../constants/constants";
// console.log(process.env)
const openai = new OpenAI({
  apiKey: process.env["REACT_APP_OPEN_AI_KEY"] || "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", // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true
});

export default openai;