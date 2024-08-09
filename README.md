# Translator with ChatGPT

This project is a translation service powered by OpenAI's GPT models. The service translates a given text into multiple languages using ChatGPT. The project is built with Next.js and TypeScript.

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** (v14 or later)
- **pnpm** (Package manager)

## Installation

1. **Clone the repository:**
    
    ```bash
    git clone <https://github.com/yourusername/translator.git>
    cd translator
    ```
    
2. **Install the dependencies:**
    
    ```bash
    pnpm install
    ```
    
3. **Create a `.env` file:**
    
    In the root directory of the project, create a file named `.env` and add your OpenAI API key:
    
    ```bash
    NEXT_PUBLIC_OPENAI_API_KEY=your-openai-api-key
    ```
    
    Replace `your-openai-api-key` with your actual API key from OpenAI.
    

## Running the Project

To start the development server, run:

```bash
pnpm dev
```

This will start the Next.js development server on http://localhost:3000.

## Project Structure

- **`src/app/api/translate/route.ts`**: Handles the API requests for translation.
- **`src/services/openaiService.ts`**: Contains the logic for interacting with OpenAI's API to perform translations.
- **`src/components/LanguageSelector.tsx`**: React component for selecting target languages.
- **`src/app/page.tsx`**: Main page where users can input text and request translations.

## API Routes

- **POST `/api/translate`**: Takes a `text` and `languages` array in the request body and returns translations.

## Example Request

```bash
curl -X POST http://localhost:3000/api/translate \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Hello, world!",
    "languages": ["Spanish", "French", "German"]
  }'
```

## Example Response

```json
{
  "translations": {
    "Spanish": "¡Hola, mundo!",
    "French": "Bonjour, le monde!",
    "German": "Hallo, Welt!"
  }
}
```

## Additional Resources

- [OpenAI API Documentation](https://beta.openai.com/docs/)
- [Next.js Documentation](https://nextjs.org/docs)