import { useDispatch } from "react-redux";
import { REST_IMG_URL } from "./utils/constants";
import { addItem } from "./store/cartSlice";

export const RestuarantMenuCategoryCard = ({ itemDetails }) => {
  const dispatcher = useDispatch();

  const handleAddAction = (event) => {
    // This will log the whole event
    console.log(event);
    // What redux does is it wraps the content passed in as object like- { payload: 'pizza'}.
    dispatcher(addItem(itemDetails));
  };
  return (
    <div
      style={{
        backgroundColor:
          itemDetails?.itemAttribute?.vegClassifier === "NONVEG"
            ? "#ffe6e6"
            : "#d9f2e6",
      }}
      className="border-2 rounded-md border-slate-500 mb-2"
    >
      <div className="flex justify-between">
        <div className="w-8/12 my-2">
          <div className="font-bold size-9 w-full ml-1">
            {itemDetails?.name}
          </div>
          <p className="m-1">{itemDetails?.description}</p>
          <div className="m-1">
            <span>
              Price: &#x20b9;
              {itemDetails?.price ? itemDetails?.price / 100 : "NA"}
            </span>
            {itemDetails?.itemAttribute?.portionSize && (
              <span>
                <span className="seperator mx-2">&#124;</span>
                <span>{itemDetails?.itemAttribute?.portionSize}</span>
              </span>
            )}

            <span className="seperator mx-2">&#124;</span>
            <span>
              {itemDetails?.itemAttribute?.vegClassifier === "NONVEG" ? (
                <span className="text-red-600 font-bold">
                  &#8226; Non-Vegetarian
                </span>
              ) : (
                <span className="text-green-700 font-bold">
                  &#8226; Vegetarian
                </span>
              )}
            </span>
          </div>
        </div>

        <div>
          {/* This calls the action on click and click event is logged if you log the argument in handleAddAction function above
          <button
            onClick={handleAddAction}
            className="px-3 py-1 focus:outline-none focus:ring focus:ring-violet-300  bg-violet-500
             hover:bg-violet-500 active:bg-gray-700 text-white font-bold rounded-md ml-12 mt-2"
          >
            Add Item
          </button>

          
          This called handleAddAction on render only.
          <button
            onClick={handleAddAction("3")}
            className="px-3 py-1 focus:outline-none focus:ring focus:ring-violet-300  bg-violet-500 hover:bg-violet-500 active:bg-gray-700 text-white font-bold  rounded-md ml-12 mt-2"
          >
            Add Item3
          </button>


          This is used when you want to call the handleAddAction on click with some params.
          <button
            onClick={() => handleAddAction("4")}
            className="px-3 py-1 focus:outline-none focus:ring focus:ring-violet-300 
             bg-violet-500 hover:bg-violet-500 active:bg-gray-700 text-white font-bold  rounded-md ml-12 mt-2"
          >
            Add Item4
          </button> */}

          <button
            onClick={() => handleAddAction(itemDetails)}
            className="px-3 py-1 focus:outline-none focus:ring focus:ring-violet-300 
             bg-violet-500 hover:bg-violet-500 active:bg-gray-700 text-white font-bold  rounded-md ml-12 mt-2"
          >
            Add Item
          </button>
          <img
            className="w-12/12 h-48 m-2 rounded-md"
            src={REST_IMG_URL + itemDetails.imageId}
          ></img>
        </div>
      </div>
    </div>
  );
};
