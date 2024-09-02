import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantDetailsShimmer from "./RestaurantDetailsShimmer";
import { RestuarantMenuCategoryCard } from "./RestaurantMenuCategory";
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
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  };
  return !item?.length ? (
    <RestaurantDetailsShimmer />
  ) : (
    <div key={restId} className="py-4">
      {item.map((item, index) => {
        if (index === 0 || index === item.length - 1) {
          return;
        }
        const itemDetails = item?.card?.card;
        return (
          <div className="px-10" key={itemDetails?.title}>
            <div className="font-bold flex justify-center">
              {itemDetails?.title}
            </div>

            {itemDetails?.itemCards?.map((menuItems) => {
              return (
                <RestuarantMenuCategoryCard
                  key={menuItems?.card?.info?.id}
                  itemDetails={menuItems?.card?.info}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantDetailsCard;
