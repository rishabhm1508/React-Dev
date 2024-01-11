import { LOGO_URL } from "./utils/constants";

const HeaderComponent = () => {
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
          <li className="list-item">Login</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
