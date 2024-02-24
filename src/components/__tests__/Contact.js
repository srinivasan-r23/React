import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
describe("<Contact />", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
  it("Should load button inside the component", () => {
    render(<Contact />);
    const button = screen.getAllByRole("button")[0];
    console.log(screen.getAllByRole("button"));
    expect(button).toBeInTheDocument();
  });
});


// No diff b/w test, it