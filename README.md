# 🌍 React Translation App (English → German)

A modern, responsive web application built with **React**, **Redux Toolkit**, and **RapidAPI (Google Translate)** that allows users to translate English text into German in real time.

This project demonstrates professional frontend architecture, API integration, state management, testing, and CI automation.

---

## 🚀 Features

- 🔤 Translate **English → German**
- ⚡ Fast and accurate Google Translation (RapidAPI)
- 🧠 Global state management with Redux Toolkit
- 🧩 Clean component architecture
- 📱 Fully responsive UI
- 🔐 Secure API key handling via environment variables
- 🧪 Unit test coverage
- 🔄 GitHub CI pipeline

---

## 🛠 Tech Stack

| Layer | Technology |
|------|----------|
| Frontend | React (Vite) |
| Styling | Tailwind CSS |
| State Management | Redux Toolkit |
| API | Google Translate (RapidAPI) |
| Testing | Jest + React Testing Library |
| CI | GitHub Actions |

---

## 📂 Project Structure

src/
├── api/ # RapidAPI client
├── components/ # UI components
├── pages/ # Page containers
├── store/ # Redux logic
├── tests/ # Unit tests
├── App.jsx
└── main.jsx


---

## 🔐 Environment Setup

Create a `.env` file in the project root:

```env
VITE_RAPID_API_KEY=YOUR_RAPIDAPI_KEY
VITE_RAPID_API_HOST=google-translate113.p.rapidapi.com


Install & Run

npm install
npm run dev

🔄 How It Works

User types English text

Redux stores input

AsyncThunk calls RapidAPI

Google Translate returns German

Redux updates UI

Run Tests

npm test


🌐 API Used

Google Translate via RapidAPI

Endpoint: /text

Source: English

Target: German

📌 Notes

API keys are securely stored using Vite environment variables.

CI pipeline runs tests and builds on every push.

The UI is mobile and desktop friendly.
