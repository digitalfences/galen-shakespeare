import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders app component", () => {
    render(<App />);
    const linkElement = screen.getByText(/Loading.../i);
    expect(linkElement).toBeInTheDocument();
  });

  test("async call test", () => {
    render(<App />);
    
  })
});
