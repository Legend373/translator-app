import { configureStore } from "@reduxjs/toolkit";
import translationReducer from "./TranslationSlice";

export const store = configureStore({
  reducer: {
    translation: translationReducer
  }
});
