// const { GoogleGenAI } = require("@google/genai");
// require("dotenv").config();
///gemini
// const ai = new GoogleGenAI({
//   apiKey: process.env.GOOGLE_API_KEY,
// });

// async function generateContent() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "Hello Gemini!",
//   });

//   console.log(response.text);
// }

// module.exports = generateContent;


////groq

// const Groq = require("groq-sdk");
// require("dotenv").config();

// const groq = new Groq({
//   apiKey: process.env.GROQ_API_KEY,
// });

// async function generateContent() {
//   const response = await groq.chat.completions.create({
//     model: "llama-3.3-70b-versatile",
//     messages: [
//       {
//         role: "user",
//         content: "Hello Groq! frontend interview most asked question and answer ",
//       },
//     ],
//   });

//   console.log(response.choices[0].message.content);
// }

// open ai

// const OpenAI = require("openai");
// require("dotenv").config();

// const client = new OpenAI({
//   apiKey: process.env.GROQ_API_KEY,
//   baseURL: "https://api.groq.com/openai/v1",
// });

// async function generateContent() {
//   const response = await client.chat.completions.create({
//     model: "openai/gpt-oss-20b",
//     messages: [
//       {
//         role: "user",
//         content: "Explain the importance of fast language models",
//       },
//     ],
//   });

//   console.log(response.choices[0].message.content);
// }

// module.exports = generateContent;