import { useEffect, useState } from "react";
import RestuarantComponent from "./Restuarant";
import Shimmer from "./Shimmer";

// Whenever local state variable changes, component is re-rendered.
const BodyComponent = () => {
  const [restuarants, setRestuarants] = useState([]);

  /**
   * [] here is dependecies list, if you provide these dependencies,
   * then code with run again with these dependencies after render cycle. Read more.
   *
   * Use Effect - is called when your component rendering is complete. It is also called
   * for clean up and after component unmounts ( based on some conditions), please read.
   */
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9257252&lng=77.7002566&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

    setRestuarants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return !restuarants.length ? (
    <Shimmer></Shimmer>
  ) : (
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
