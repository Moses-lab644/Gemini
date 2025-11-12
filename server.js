require('dotenv').config();
const express = require('express');
const path = require('path');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Initialize Gemini API with your API key
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Use a model supported in v1 API
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// API endpoint
app.post('/api/query', async (req, res) => {
  const { prompt } = req.body;
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    res.json({ reply: response.text() });
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({ error: "Error contacting Gemini API" });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:3000`));





