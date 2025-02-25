import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import OpenAI from 'openai';

// Load environment variables
config();

const app = express();
const port = process.env.PORT || 3000;

// Initialize OpenAI API
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors());
app.use(express.json())

// Prompt for questions generation
// Now accepts "numberOfQuestions" and "styleOfQuestions" to match the front-end 
const buildQuizPrompt = (topic, expertise, numberOfQuestions, styleOfQuestions ) => {
    return `Generate ${numberOfQuestions} quiz questions on ${topic} at a ${expertise} difficulty level. Ensure 
    that the questions are straightforward and reflect the speaking style of ${styleOfQuestions}. Do 
    not include the answers. Format the output as a JSON array of question strings.`;
};

app.get('/api/generate-questions', async (req, res) => {
    const { topic, expertise, numberOfQuestions, styleOfQuestions } = req.query;
    const prompt = buildQuizPrompt(topic, expertise, numberOfQuestions, styleOfQuestions);

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4o', // Current Model Used
            messages: [{ role: 'user', content: prompt }],
        });

        const questions = JSON.parse(response.choices[0].message.content);
        res.json({ questions });
    } catch (error) {
        console.error('Error generating questions:', error);
        res.status(500).json({ error: 'Error generating questions, please try again.' });
    }
});

const buildEvaluationPrompt = (question, answer) => {
    return `You are a teacher evaluating a student's response. The
    question is: "${question}". The student's answer is: "${answer}". Evaluate 
    the answer as "Correct", "Incorrect", or "Partially Correct" using a percentage score. Any 
    response below 30% is incorrect, between 31% and 79% is partially correct, and 80% or above is correct. 
    Provide a brief explanation along with the evaluation. Format your response as a JSON object with keys "evaluation" and "explanation".`;
};

app.get('/api/evaluate-answer', async (req, res) => {
    const { question, answer } = req.query;
    const prompt = buildEvaluationPrompt(question, answer);

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4o', // Current Model Used
            messages: [{ role: 'user', content: prompt }],
        });

        const result = JSON.parse(response.choices[0].message.content);
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
