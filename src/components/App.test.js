import { render, screen } from "@testing-library/react";
import App from "./App";

it("Renders a header", () => {
  render(<App />);
  const header = screen.getByText(/Init!/i);
  expect(header).toBeInTheDocument();
});
