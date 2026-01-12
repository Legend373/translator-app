import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { translateAPI } from "../api/translateApi";

export const translateText = createAsyncThunk(
  "translation/translateText",
  async (text, { rejectWithValue }) => {
    try {
      if (!text) return rejectWithValue("Input cannot be empty");

      const res = await translateAPI.post("/translate/mini", {
        input: text,
        inputLanguage: "en",
        outputLanguage: "de" 
      });

      if (!res.data?.output) {
        return rejectWithValue("No translation returned from API");
      }

      return res.data.output;
    } catch (error) {
      console.error("Translation API error:", error);
      return rejectWithValue(
        error.response?.data?.message || error.message || "Translation failed"
      );
    }
  }
);

const translationSlice = createSlice({
  name: "translation",
  initialState: {
    input: "",
    output: "",
    loading: false,
    error: null
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
      state.error = null; // clear previous error
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(translateText.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(translateText.fulfilled, (state, action) => {
        state.loading = false;
        state.output = action.payload;
      })
      .addCase(translateText.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Translation failed";
      });
  }
});

export const { setInput } = translationSlice.actions;
export default translationSlice.reducer;
