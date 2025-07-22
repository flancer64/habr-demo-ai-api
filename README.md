# habr-demo-ai-api

This is a simple Node.js playground for sending requests to various AI providers.

## Setup

1. Copy `.env.example` to `.env` and fill in your API parameters:

```bash
cp .env.example .env
# edit .env with your API_KEY, API_URL and MODEL
```

2. Install dependencies:

```bash
npm install
```

3. Run the script:

```bash
npm start
```

The request will use the messages defined in `src/index.js` and print the assistant's reply to the console.

## Environment variables

Create a `.env` file with at least three parameters:

```bash
API_KEY=your_api_key
API_URL=https://api.openai.com/v1/chat/completions
MODEL=gpt-4
```

### API URLs

Some common API endpoints compatible with the OpenAI format:

| Provider  | Example URL                                       |
|-----------|---------------------------------------------------|
| OpenAI    | `https://api.openai.com/v1/chat/completions`      |
| DeepSeek  | `https://api.deepseek.com/v1/chat/completions`    |
| OpenRouter| `https://openrouter.ai/api/v1/chat/completions`   |

### Modern models

Specify the desired `MODEL` name. Below are a few current options:

* `gpt-4o`
* `gpt-4-turbo`
* `gpt-4`
* `gpt-3.5-turbo-1106`
* `gpt-3.5-turbo`
* `deepseek-chat`

Use the URL and model that match your API provider.
