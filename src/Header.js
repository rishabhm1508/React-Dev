import { useState } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";

/**
 * We have used const for btnName, you might think that we are reassigning it using setBtnName,
 * thus violating rules of JS. But this is not the case, every time setBtnName is called, Header
 * Component is re-rendered again thus new const is executed but with new value. React keeps a
 * track of this.
 */
const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="flex justify-between bg-sky-100">
      <div>
        <img className="w-28" src={LOGO_URL} />
      </div>

      <div className="p-4 ">
        <ul className="flex space-x-4 pt-4">
          <Link className="pt-2" to="/">
            <span className="">Home</span>
          </Link>

          <Link className="pt-2" to="/contact">
            <span className="list-item">Contact Us</span>
          </Link>
          <button
            className="bg-green-700 p-2 rounded-md"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
