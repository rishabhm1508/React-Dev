import { useState } from "react";
import { LOGO_URL } from "./utils/constants";

/**
 * We have used const for btnName, you might think that we are reassigning it using setBtnName,
 * thus violating rules of JS. But this is not the case, every time setBtnName is called, Header
 * Component is re-rendered again thus new const is executed but with new value. React keeps a
 * track of this.
 */
const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header display-flex-justify-content">
      <div>
        <img className="app-logo" src={LOGO_URL} />
      </div>

      <div className="nav-list">
        <ul className="display-flex-justify-content">
          <li className="list-item">Home</li>
          <li className="list-item">About Us</li>
          <li className="list-item">Cart</li>
          <button
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
            className="login"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
