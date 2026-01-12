import { useDispatch, useSelector } from "react-redux";
import { setInput, translateText } from "../store/translationSlice";
import TextInput from "./TextInput";
import TextOutput from "./TextOutput";
import { FaArrowRight, FaLanguage } from "react-icons/fa";

export default function Translator() {
  const dispatch = useDispatch();
  const { input, output, loading, error } = useSelector(
    (state) => state.translation
  );

  return (
    <div className="max-w-5xl w-full p-6 bg-gray-50 shadow-lg rounded-xl">
      <div className="grid md:grid-cols-2 gap-6">
        {/* English Input */}
        <div>
          <div className="flex items-center mb-2">
            <FaLanguage className="text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold">English</h3>
          </div>
          <TextInput
            value={input}
            onChange={(e) => dispatch(setInput(e.target.value))}
            onKeyDown={(e) => {
              if (e.key === "Enter" && input.trim()) {
                dispatch(translateText(input));
              }
            }}
          />
        </div>

        {/* German Output */}
        <div>
          <div className="flex items-center mb-2">
            <FaLanguage className="text-green-600 mr-2" />
            <h3 className="text-lg font-semibold">German</h3>
          </div>
          <TextOutput value={output} />
        </div>
      </div>

      {/* Translate Button */}
      <button
        onClick={() => dispatch(translateText(input))}
        disabled={!input.trim() || loading}
        className="mt-6 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition-colors duration-200 text-white py-3 w-full rounded-lg font-semibold flex items-center justify-center gap-2"
      >
        {loading ? "Translating..." : "Translate"}
        {!loading && <FaArrowRight />}
      </button>

      {/* Error Message */}
      {error && (
        <div className="mt-4 text-red-600 font-medium text-center">
          ⚠ {error}
        </div>
      )}
    </div>
  );
}
