require('dotenv').config();
console.log("Your API_KEY is:", process.env.API_KEY); // <-- debug

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function testKey() {
  try {
    const models = await genAI.listModels();
    console.log("✅ API key works! Available models:", models);
  } catch (error) {
    console.error("❌ API key invalid or not working:", error);
  }
}

testKey();

