import { useContext } from "react";
import RestuarantComponent from "./Restuarant";
import userContext from "./utils/user-context";

export const ResturantHigherOrder = ({ restaurantDetails }) => {
  const { loggedInUser } = useContext(userContext);
  if (restaurantDetails?.id % 2) {
    return (
      <div>
        <span className="px-6 py-1 text-white bg-green-700 -rotate-[30deg] translate-y-2 -translate-x-6 absolute rounded-md">
          Promoted
        </span>
        <RestuarantComponent
          restDetails={restaurantDetails}
        ></RestuarantComponent>
      </div>
    );
  } else {
    return (
      <RestuarantComponent
        key={restaurantDetails.id}
        restDetails={restaurantDetails}
      ></RestuarantComponent>
    );
  }
};

export default ResturantHigherOrder;
