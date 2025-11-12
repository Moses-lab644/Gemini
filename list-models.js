require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI({ apiKey: process.env.API_KEY });

async function listModels() {
  try {
    const response = await genAI.listModels(); // now listModels is directly on genAI
    console.log('Available models:', response);
  } catch (err) {
    console.error('Error listing models:', err);
  }
}

listModels();


