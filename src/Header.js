import { useContext, useState } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";
import UserContext from "./utils/user-context";
import { Provider, useSelector } from "react-redux";
import appStore from "./store/appStore";

/**
 * We have used const for btnName, you might think that we are reassigning it using setBtnName,
 * thus violating rules of JS. But this is not the case, every time setBtnName is called, Header
 * Component is re-rendered again thus new const is executed but with new value. React keeps a
 * track of this.
 */
const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(`Current logged in user in header is ${loggedInUser}`);
  return (
    <div className="flex justify-between bg-sky-100 shadow-md shadow-slate-500 rounded-md">
      <div>
        <img className="w-28" src={LOGO_URL} />
      </div>

      <div className="p-4 ">
        <ul className="flex space-x-4 pt-4">
          <Link to="/">
            <button className="hover:bg-green-700 text-green-600 px-3 py-2 mt-2 rounded-md border-2 border-green-700 hover:text-white font-bold">
              Home
            </button>
          </Link>

          <Link to="/contact">
            <button className="hover:bg-green-700 text-green-600 px-3 py-2 mt-2 rounded-md border-2 border-green-700 hover:text-white font-bold">
              Contact Us
            </button>
          </Link>

          <Link to="/cart">
            <button
              type="button"
              data-tooltip-target="tooltip-default"
              className="hover:bg-green-700 text-green-600 px-3 py-2 mt-2 rounded-md border-2 border-green-700 hover:text-white font-bold"
            >
              Cart Items ( {cartItems.length}
              {cartItems.length
                ? cartItems.length === 1
                  ? " Item "
                  : " Items "
                : " "}
              )
            </button>
          </Link>

          <Link>
            <button
              className="hover:bg-green-700 text-green-600 px-3 py-2 mt-2 rounded-md border-2 border-green-700 hover:text-white font-bold"
              onClick={() => {
                setBtnName(btnName === "Login" ? "Logout" : "Login");
              }}
            >
              {btnName}
            </button>
          </Link>
        </ul>

        <div
          id="tooltip-default"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 "
        >
          Tooltip content
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
