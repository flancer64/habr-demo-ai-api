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
