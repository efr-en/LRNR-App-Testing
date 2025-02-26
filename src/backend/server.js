import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import OpenAI from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';

console.log("OpenAI API Key:", process.env.OPENAI_API_KEY);
// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config({ path: path.resolve(__dirname, '../../.env') });

const app = express();
const port = process.env.PORT || 3000;

// Initialize OpenAI API
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
}));
app.use(express.json())

const cleanResponseContent = (content) => {
    return content
    .replace(/^```(json)?\n?/, '') // Remove starting ``` or ```json
    .replace(/```$/, '')           // Remove ending ```
    .trim();                       // Remove extra whitespace
}

// Prompt for questions generation
// Now accepts "numberOfQuestions" and "styleOfQuestions" to match the front-end 
const buildQuizPrompt = (topic, expertise, numberOfQuestions, styleOfQuestions ) => {
    return `Generate ${numberOfQuestions} quiz questions on ${topic} at a ${expertise} 
    difficulty level. For each question, output an object with two keys: "question" containing the 
    question text, and "answer" containing the correct answer. Ensure that the questions are 
    straightforward and reflect the speaking style of ${styleOfQuestions}. Format the output as a 
    JSON array of these objects.`;
};

app.post('/api/generate-questions', async (req, res) => {
    const { topic, expertise, numberOfQuestions, styleOfQuestions } = req.body;
    const prompt = buildQuizPrompt(topic, expertise, numberOfQuestions, styleOfQuestions);

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4o', // Current Model Used
            messages: [{ role: 'user', content: prompt }],
        });

        let content = response.choices[0].message.content;
        content = cleanResponseContent(content);
        const questions = JSON.parse(content);
        res.json({ questions });
    } catch (error) {
        console.error('Error generating questions:', error);
        res.status(500).json({ error: 'Error generating questions, please try again.' });
    }
});

const buildEvaluationPrompt = (question, answer) => {
    return `You are a teacher evaluating a student's response. 
    The question is: "${question}".
    The student's answer is: "${answer}".
    Evaluate the answer as "Correct", "Incorrect", or "Partially Correct" using a percentage scale (for example, "Correct, 85%"). 
    Any answer below 30% is "Incorrect", between 31% and 79% is "Partially Correct", and 80% or above is "Correct".
    Provide a brief explanation for your evaluation.
    Output ONLY a JSON object with exactly two keys: "evaluation" and "explanation". 
    For example:
    {"evaluation": "Correct, 85%", "explanation": "Your answer was correct because..."}
    Do not include any extra text or markdown formatting.`;
};

app.get('/api/evaluate-answer', async (req, res) => {
    const { question, answer } = req.query;
    const prompt = buildEvaluationPrompt(question, answer);

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4o', // Current Model Used
            messages: [{ role: 'user', content: prompt }],
        });

  // Clean the returned content and parse it as JSON
        let content = response.choices[0].message.content;
        content = cleanResponseContent(content);
        const result = JSON.parse(content);        
        res.json(result);
    } catch (error) {
        console.error('Error evaluating answer:', error);
        res.status(500).json({ error: 'Failed to evaluate answer, please try again.' });
    }
});

app.get('/' , (req, res) => {
    res.send('Welcome to the LRNR App!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
