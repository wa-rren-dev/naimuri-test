import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("Renders a h1", () => {
    render(<App />);
    const header = screen.getByText(/Choose an organisation/i);
    expect(header).toBeInTheDocument();
  });

  it("Should have three links to repos for demo purposes", function () {
    render(<App />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
  });

  it("Should have a form for submitting your own organisation url", () => {
    render(<App />);
    const form = screen.getByRole("form", { name: /Enter organisation name/i });
    expect(form).toBeInTheDocument();
  });

  it("Should redirect to the appropriate organisation url when the form is submitted", async () => {
    const user = userEvent.setup();
    render(<App />);
    const input = screen.getByRole("textbox", {
      name: /Enter organisation name/i,
    });
    const button = screen.getByRole("button", { name: /View repositories/i });
    await user.click(input);
    await user.type(input, "naimuri");
    await user.click(button);
    expect(window.location.pathname).toBe("/naimuri");
  });
});
