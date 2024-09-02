import { REST_IMG_URL } from "./utils/constants";

const RestuarantComponent = ({ restDetails }) => {
  return (
    <div>
      <img
        className="max-h-72 w-full p-2"
        alt="restuarant-image"
        src={REST_IMG_URL + restDetails?.cloudinaryImageId}
      ></img>
      <div className="flex justify-center font-semibold text-blue-600 text-xl mb-4 pt-2">
        <h3>{restDetails?.name}</h3>
      </div>
      <h4 className="text-green-800 px-2">
        {restDetails?.cuisines.join(" - ")}
      </h4>
      <h4 className="text-rose-800 px-2">Rating: {restDetails?.avgRating}</h4>
      <h4 className="text-sky-800 px-2">
        Average Delivery Time: {restDetails?.sla?.deliveryTime} mins
      </h4>
    </div>
  );
};

export default RestuarantComponent;
