import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTUARANT_API } from "./utils/constants";
import { Link } from "react-router-dom";
import ResturantHigherOrder from "./RestuarantHigherOrder";
import UserContext from "./utils/user-context";
// Whenever local state variable changes, component is re-rendered.
const BodyComponent = () => {
  const [restuarants, setRestuarants] = useState(null);
  const [searchTxt, setSearchTxt] = useState("");
  const [restListOnLoad, setRestListOnLoad] = useState([]);
  const [userValueForContext, setUserValueForContext] = useState("Rishabh");
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
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
          className="w-32 border-zinc-500 border-2 rounded-md p-1"
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
          className="bg-indigo-400 hover:bg-indigo-600 hover:text-white p-1 rounded-md px-2 border-gray-400 hover:border-gray-700 border-2"
        >
          Search
        </button>
        <button
          onClick={() => {
            const newRestList = restuarants.filter(
              (rest) => rest.info?.avgRating > 4.3
            );
            setRestuarants(newRestList);
          }}
          type="button"
          className="bg-indigo-400 hover:bg-indigo-600 hover:text-white p-1 rounded-md px-2 border-gray-400 hover:border-gray-700 border-2"
        >
          Filter Top Restaurants
        </button>

        <input
          type="text"
          placeholder="Enter to set user name"
          onChange={(e) => {
            setUserValueForContext(e.target.value);
          }}
          className="w-48 border-zinc-500 border-2 rounded-md py-1 px-2"
          value={userValueForContext}
        />
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
                  className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 text-black w-3/12 m-4 rounded-md border-gray-300 border-4 hover:border-gray-500 bg-red-50 hover:shadow-xl hover:shadow-slate-600"
                  to={"/restuarant/" + restaurant.info?.id}
                  key={restaurant.info?.id}
                >
                  {/* <ResturantHigherOrder restaurantDetails={restaurant.info} /> */}
                  <UserContext.Provider
                    value={{ loggedInUser: userValueForContext }}
                  >
                    <ResturantHigherOrder restaurantDetails={restaurant.info} />
                  </UserContext.Provider>
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
