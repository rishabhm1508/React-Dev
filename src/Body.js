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
  };

  return !restuarants ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="p-4 bg-indigo-50">
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
          className="w-32 border-zinc-500 border-2 rounded-md"
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
          className="bg-indigo-400 hover:bg-indigo-600 hover:text-white p-1 rounded-md px-2"
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
          className="bg-indigo-400 hover:bg-indigo-600 hover:text-white p-1 rounded-md px-2"
        >
          Filter Top Restaurants
        </button>
      </div>

      {!restuarants?.length ? (
        <div>No matching restuarant found...!!!</div>
      ) : (
        <div className="flex flex-wrap">
          {restuarants.map((restaurant) => {
            if (restaurant.info) {
              return (
                // Key will always be on the parent iterative element.
                <Link
                  className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 text-black w-3/12 m-4 rounded-md border-gray-300 border-4 hover:border-gray-500 bg-orange-100 hover:shadow-xl hover:shadow-slate-600"
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
