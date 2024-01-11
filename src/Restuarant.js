import { REST_IMG_URL } from "./utils/constants";

const RestuarantComponent = ({ restDetails }) => {
  return (
    <div className="card">
      <img
        className="rest-img"
        alt="restuarant-image"
        src={REST_IMG_URL + restDetails?.cloudinaryImageId}
      ></img>
      <div className="rest-name align-rest-name">
        <h3>{restDetails?.name}</h3>
      </div>
      <h4 className="cuisine">{restDetails?.cuisines.join(" - ")}</h4>
      <h4 className="rating">Rating: {restDetails?.avgRating}</h4>
      <h4 className="minutes">
        Average Delivery Time: {restDetails?.sla?.deliveryTime} mins
      </h4>
    </div>
  );
};

export default RestuarantComponent;
