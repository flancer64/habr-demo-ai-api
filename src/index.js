import fetch from 'node-fetch';
import 'dotenv/config';

const {API_KEY, API_URL, MODEL} = process.env;

if (!API_KEY || !API_URL || !MODEL) {
    console.error('Missing API configuration. Please set API_KEY, API_URL, and MODEL in .env file.');
    process.exit(1);
}

const messages = [
    {role: 'user', content: 'Привет!'},
    {role: 'assistant', content: 'Привет! Чем могу помочь?'},
    {role: 'user', content: 'Расскажи мне о себе.'}
];

const body = {
    model: MODEL,
    messages,
    seed: 64,
    temperature: 0.0,
};

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
};

async function main() {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log(data.choices?.[0]?.message?.content);
    } catch (error) {
        console.error('Error sending request:', error.message);
    }
}

main();
