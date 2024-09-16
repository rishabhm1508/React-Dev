import { fireEvent, render, screen } from "@testing-library/react";
import HeaderComponent from "../Header";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"; // this is for toBeInTheDocument and assertive options.

test("header should show 0 cart items on initial load", () => {
  /**
   * We need to provide
   * 1. Browser Router -> as we are using Link and our test only understands jsx and not Link as it is part of react router dom.
   * 2. Provider -> Again the same thing, as store is not a part of jsx, we need to provide it seperately.
   *  */
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeaderComponent />
      </Provider>
    </BrowserRouter>
  );

  const cartHeadingButton = screen.getByTestId("cartButton");
  expect(cartHeadingButton).toBeInTheDocument();
  expect(cartHeadingButton.innerHTML).toBe("Cart Items ( 0 )");

  // Another way to get button.
  const getBtnByName = screen.getByRole("button", { name: "Cart Items ( 0 )" });
  expect(getBtnByName).toBeDefined();

  //Another way for testing using regex, we dnt know what is there after Cart, then you can use regex
  const getBtnByTextRegex = screen.getByText(/Cart/);
  expect(getBtnByTextRegex).toBeInTheDocument();
});

test("header test login button text after click", () => {
  /**
   * We need to provide
   * 1. Browser Router -> as we are using Link and our test only understands jsx and not Link as it is part of react router dom.
   * 2. Provider -> Again the same thing, as store is not a part of jsx, we need to provide it seperately.
   *  */
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeaderComponent />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByTestId("loginButton");
  expect(loginButton.innerHTML).toBe("Login");
  // loginButton.click(); // This is not way to do it.

  // This is how you call events in react testing.
  fireEvent.click(loginButton);
  expect(loginButton.innerHTML).toBe("Logout");

  // resetting
  fireEvent.click(loginButton);

  // Another way
  const loginByBtnText = screen.getByRole("button", { name: "Login" });
  expect(loginByBtnText).toBeInTheDocument();
  fireEvent.click(loginButton);
  const logoutByBtnText = screen.getByRole("button", { name: "Logout" });
  expect(logoutByBtnText).toBeInTheDocument();
});
