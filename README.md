# Website Cloner

A powerful web application that allows you to clone any website's HTML, CSS, and structure using AI. Built with FastAPI backend and Next.js frontend.

## Features

- 🌐 Clone any public website instantly
- 🤖 AI-powered code generation using Claude 3.5 Sonnet
- 📱 Responsive design analysis
- 💾 Download cloned HTML files
- 👁️ Live preview of cloned websites
- 📋 One-click copy to clipboard
- ⚡ Fast processing with Selenium web scraping

## Tech Stack

### Backend
- **FastAPI** - Modern Python web framework
- **Selenium** - Web scraping and browser automation
- **Anthropic Claude API** - AI-powered code generation
- **Uvicorn** - ASGI server

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Animation library

## Project Structure

```
.
├── backend/
│   ├── main.py              # FastAPI application
│   ├── requirements.txt     # Python dependencies
│   ├── .env.example         # Environment variables template
│   └── env/                 # Virtual environment (not tracked)
├── frontend/
│   ├── src/
│   │   └── app/
│   │       ├── Components/  # React components
│   │       ├── show/        # Main page
│   │       ├── layout.tsx   # Root layout
│   │       └── page.tsx     # Home redirect
│   ├── public/              # Static assets
│   └── package.json         # Node dependencies
└── README.md
```

## Installation

### Prerequisites
- Python 3.8+
- Node.js 18+
- Chrome browser (for Selenium)
- Anthropic API key

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv env
```

3. Activate the virtual environment:
- Windows:
  ```bash
  .\env\Scripts\Activate.ps1
  ```
- macOS/Linux:
  ```bash
  source env/bin/activate
  ```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Create a `.env` file from the example:
```bash
cp .env.example .env
```

6. Add your Anthropic API key to the `.env` file:
```env
ANTHROPIC_API_KEY=your_actual_api_key_here
```

7. Run the backend server:
```bash
python -m uvicorn main:app --reload
```

The backend will be available at `http://127.0.0.1:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## Usage

1. Start both the backend and frontend servers
2. Open your browser and navigate to `http://localhost:3000`
3. Enter the URL of the website you want to clone
4. Click "Clone Website" and wait for the AI to process
5. View, copy, download, or preview the generated code

## API Endpoints

### `POST /clone`
Clone a website and generate HTML code.

**Request Body:**
```json
{
  "url": "https://example.com"
}
```

**Response:**
```json
{
  "html": "<html>...</html>"
}
```

### `GET /health`
Health check endpoint.

**Response:**
```json
{
  "status": "healthy",
  "message": "Website cloner API is running"
}
```

### `GET /`
Root endpoint.

**Response:**
```json
{
  "message": "Hello World"
}
```

## Environment Variables

Create a `.env` file in the backend directory:

```env
ANTHROPIC_API_KEY=your_api_key_here
```

## Features Breakdown

### Home Page
- Hero section with URL input
- Real-time cloning with loading states
- Error handling and user feedback

### Features Section
- Website cloning capabilities
- Code extraction details
- Instant processing information
- Responsive analysis
- SEO insights
- Learning tool benefits

### About Section
- Project story and mission
- How the tool works
- Technology explanation

### Pricing Section
- Free tier (5 clones/day)
- Pro tier (unlimited)
- Team tier (collaboration features)

## Development

### Backend Development
```bash
cd backend
python -m uvicorn main:app --reload
```

### Frontend Development
```bash
cd frontend
npm run dev
```

### Build for Production

Frontend:
```bash
cd frontend
npm run build
npm start
```

Backend:
```bash
cd backend
uvicorn main:app --host 0.0.0.0 --port 8000
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Anthropic Claude API for AI-powered code generation
- Next.js team for the amazing framework
- FastAPI for the modern Python web framework
- Selenium for web scraping capabilities

## Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js and FastAPI
