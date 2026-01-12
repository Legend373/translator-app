import axios from "axios";

export const translateAPI = axios.create({
  baseURL: "https://google-translate-api9.p.rapidapi.com",
  headers: {
    "Content-Type": "application/json",
    "x-rapidapi-host": import.meta.env.VITE_RAPID_API_HOST, // google-translate-api9.p.rapidapi.com
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY
  }
});
