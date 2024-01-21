import { ERROR_IMAGE } from "./utils/constants";
import { useRouteError } from "react-router-dom";

export const Error = () => {
  // useRouteError() -  Gives all the error information regarding the route.
  return (
    <div className="error-page-container">
      <div className="error-page-text">
        <span>OOOPPPPSSS....!!! {useRouteError().data}</span>
      </div>
      <img className="error-page-img" src={ERROR_IMAGE}></img>
    </div>
  );
};

export default Error;
