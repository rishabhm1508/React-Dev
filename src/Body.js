import { useEffect, useState } from "react";
import RestuarantComponent from "./Restuarant";
import Shimmer from "./Shimmer";
import { RESTUARANT_API } from "./utils/constants";
import { Link } from "react-router-dom";
// Whenever local state variable changes, component is re-rendered.
const BodyComponent = () => {
  const [restuarants, setRestuarants] = useState(null);
  const [searchTxt, setSearchTxt] = useState("");
  const [restListOnLoad, setRestListOnLoad] = useState([]);

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
    setRestListOnLoad(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setRestuarants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    // const options = {
    //   root: null,
    //   threshold: 0.1,
    // };

    // setTimeout(() => {
    //   {
    //     const element = document.querySelectorAll(".card:last-child")[0];

    //     console.log(element);

    //     const intersectionObserver = new IntersectionObserver(() => {
    //       console.log("in observer");
    //     }, options);

    //     intersectionObserver.observe(element);
    //   }
    // }, 2000);
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
          Filter Top Restaurants
        </button>
      </div>

      {!restuarants?.length ? (
        <div>No matching restuarant found...!!!</div>
      ) : (
        <div className="cards-container">
          {restuarants.map((restaurant) => {
            if (restaurant.info) {
              return (
                // Key will always be on the parent iterative element.
                <Link
                  className="restaurant-link"
                  to={"/restuarant/" + restaurant.info?.id}
                  key={restaurant.info?.id}
                >
                  <RestuarantComponent restDetails={restaurant.info} />
                </Link>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default BodyComponent;
