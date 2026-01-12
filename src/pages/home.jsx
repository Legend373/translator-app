import Translator from "../components/Translator";
import { FaLanguage } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          🌍 Translator (English → German)
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Type your text in English and get an instant German translation.
        </p>
        <Translator />
        <div className="text-center mt-6 text-gray-400 text-sm">
          Powered by RapidAPI Google Translate
        </div>
      </div>
    </div>
  );
}
