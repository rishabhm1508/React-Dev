import { useEffect, useState } from "react";
import RestuarantComponent from "./Restuarant";
import Shimmer from "./Shimmer";
import { RESTUARANT_API } from "./utils/constants";

// Whenever local state variable changes, component is re-rendered.
const BodyComponent = () => {
  const [restuarants, setRestuarants] = useState(null);
  const [searchTxt, setSearchTxt] = useState("");
  const [restListOnLoad, setSRstListOnLoad] = useState([]);

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
    const data = await fetch(RESTUARANT_API);
    const jsonData = await data.json();
    setSRstListOnLoad(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setRestuarants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return !restuarants ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div>
        <input
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
          className="searchTxt"
          value={searchTxt}
        />
        <button
          onClick={() => {
            let list = [...restListOnLoad];
            const newList = list.filter((rest) => {
              return rest.info.name
                .toLowerCase()
                .includes(searchTxt.toLowerCase());
            });
            setRestuarants(newList);
          }}
          className="searchBtn"
        >
          Search
        </button>
        <button
          onClick={() => {
            const newRestList = restuarants.filter(
              (rest) => rest.info?.avgRating > 4
            );
            setRestuarants(newRestList);
          }}
          type="button"
          className="top-rest-btn"
        >
          Filter Top Restuarants
        </button>
      </div>

      {!restuarants?.length ? (
        <div>No matching restuarant found...!!!</div>
      ) : (
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
      )}
    </div>
  );
};

export default BodyComponent;
