import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantDetailsShimmer from "./RestaurantDetailsShimmer";
import { RESTAURANT_DETAILS_API, REST_IMG_URL } from "./utils/constants";

export const RestaurantDetailsCard = () => {
  const { id: restId } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetchRestDetails();
  }, []);

  fetchRestDetails = async () => {
    const fetchDetails = await fetch(RESTAURANT_DETAILS_API + restId);
    const jsonData = await fetchDetails.json();
    setItem(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards
    );
  };
  return !item?.length ? (
    <RestaurantDetailsShimmer />
  ) : (
    <div className="items-page">
      {item.map((item) => {
        const itemDetails = item?.card?.info;
        console.log(itemDetails);
        return (
          <div
            style={{
              backgroundColor:
                itemDetails?.itemAttribute?.vegClassifier === "NONVEG"
                  ? "#ffe6e6"
                  : "#d9f2e6",
            }}
            className="item-details-container"
            key={itemDetails?.id}
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
                      {itemDetails?.itemAttribute?.vegClassifier ===
                      "NONVEG" ? (
                        <span className="non-veg-classifier">
                          &#8226; Non-Vegetarian
                        </span>
                      ) : (
                        <span className="veg-classifier">
                          &#8226; Vegetarian
                        </span>
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
      })}
    </div>
  );
};

export default RestaurantDetailsCard;
