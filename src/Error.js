import { ERROR_IMAGE } from "./utils/constants";

export const Error = () => {
  return (
    <div className="error-page-container">
      <div className="error-page-text">
        <span>OOOPPPPSSS....!!!</span>
      </div>
      <img className="error-page-img" src={ERROR_IMAGE}></img>
    </div>
  );
};

export default Error;
