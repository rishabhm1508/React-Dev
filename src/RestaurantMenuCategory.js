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
      className="item-details-container"
    >
      <div className="item-name-img-container">
        <div>
          <h4 className="item-name">{itemDetails?.name}</h4>
          <p className="item-description">{itemDetails?.description}</p>
          <div>
            <h4>
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
            </h4>
          </div>
        </div>

        <img
          className="item-image"
          src={REST_IMG_URL + itemDetails.imageId}
        ></img>
      </div>
    </div>
  );
};
