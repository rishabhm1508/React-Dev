import { render, screen } from "@testing-library/react";
import Contact from "../Contact.js";
import "@testing-library/jest-dom";

test("test if heading is present in the dom", () => {
  /**
   * Steps -
   * 1. Render contact component in jest dom
   * 2. Get heading.
   * 3. Assert it be present in the dom.
   */
  //Ignore below error - this is typescript error, need to check TODO
  render(<Contact />);

  // screen is available in testing lib, to read things from screen - the page rendered in jest-environment-jsdom
  const heading = screen.getByRole("heading"); // this is used when you expect only element with heading tag, for multiple  getAllByRole
  expect(heading).toBeInTheDocument();
});

test("test if text 'Contact page' is present in the dom", () => {
  /**
   * Steps -
   * 1. Render contact component in jest dom
   * 2. Get heading.
   * 3. Assert it be present in the dom.
   */
  //Ignore below error - this is typescript error, need to check TODO
  render(<Contact />);

  // screen is available in testing lib, to read things from screen - the page rendered in jest-environment-jsdom
  const heading = screen.getByText("Contact page");
  //expect(heading).toBe(true); // This will fail because above line gives complete html rather than boolean
  expect(heading).toBeInTheDocument();
});

test("test for number of input boxes present", () => {
  /**
   * Steps -
   * 1. Render contact component in jest dom
   * 2. Get element with role as textbox( our input ).
   * 3. Assert its length to be 2 ( as we have 2 of them ).
   */
  //Ignore below error - this is typescript error, need to check TODO
  render(<Contact />);

  // screen is available in testing lib, to read things from screen - the page rendered in jest-environment-jsdom
  const inputs = screen.getAllByRole("textbox"); // input as role is not valid, it is textbox.
  /**
   * *************** Very Important **************
   * console.log(inputs);// These input boxes is array of react element( which is an object ) converted from jsx and not html element.
   */

  //expect(heading).toBe(true); // This will fail because above line gives complete html rather than boolean
  expect(inputs.length).toBe(2);
});
