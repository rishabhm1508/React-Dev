import { render, screen } from "@testing-library/react";
import { mockRestuarant } from "./mocks.js/resturant-data.mock";
import RestuarantComponent from "../Restuarant";
import ResturantHigherOrder from "../RestuarantHigherOrder";
import "@testing-library/jest-dom";

// Test how we pass props
test("should show restuarant name on render of card", () => {
  render(<RestuarantComponent restDetails={mockRestuarant} />);
  const restName = screen.getByText("The fritter company");
  expect(restName).toBeInTheDocument();
});

test("should show restuarant with promoted label when id%2 is not zero", () => {
  render(<ResturantHigherOrder restaurantDetails={mockRestuarant} />);
  const promotedLabel = screen.getByText("Promoted");
  expect(promotedLabel).toBeInTheDocument();
});
