import { useState } from "react";
import RestuarantComponent from "./Restuarant";
import { restaurantsList } from "./utils/constants";

const BodyComponent = () => {
  const [restuarants, setRestuarants] = useState(restaurantsList);
  return (
    <div className="body">
      <div>
        <button
          onClick={() => {
            const newRestList = restuarants.filter(
              (rest) => rest.info?.avgRating > 4.5
            );
            setRestuarants(newRestList);
          }}
          type="button"
          className="top-rest-btn"
        >
          Filter Top Restuarants
        </button>
      </div>

      <div className="cards-container">
        {restuarants.map((restaurant) => {
          if (restaurant.info) {
            return (
              <RestuarantComponent
                key={restaurant.info?.id}
                restDetails={restaurant.info}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
