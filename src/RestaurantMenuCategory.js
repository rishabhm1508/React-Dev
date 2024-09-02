import { REST_IMG_URL } from "./utils/constants";

export const RestuarantMenuCategoryCard = ({ itemDetails }) => {
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
                <span className="seperator">&#124;</span>
                <span>{itemDetails?.itemAttribute?.portionSize}</span>
              </span>
            )}

            <span className="seperator">&#124;</span>
            <span>
              {itemDetails?.itemAttribute?.vegClassifier === "NONVEG" ? (
                <span className="non-veg-classifier">
                  &#8226; Non-Vegetarian
                </span>
              ) : (
                <span className="veg-classifier">&#8226; Vegetarian</span>
              )}
            </span>
          </div>
        </div>

        <img
          className="w-2/12 h-36 m-2 rounded-md"
          src={REST_IMG_URL + itemDetails.imageId}
        ></img>
      </div>
    </div>
  );
};
