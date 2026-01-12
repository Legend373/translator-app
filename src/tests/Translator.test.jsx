import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Translator from "../components/Translator";

test("shows input textarea", () => {
  render(
    <Provider store={store}>
      <Translator />
    </Provider>
  );
  expect(screen.getByPlaceholderText(/enter english text/i)).toBeInTheDocument();
});
