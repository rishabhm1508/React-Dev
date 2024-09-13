import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantDetailsShimmer from "./RestaurantDetailsShimmer";
import { RESTAURANT_DETAILS_API } from "./utils/constants";
import RestuarantCategoryAndItemsDetails from "./RestuarantCategory";

export const RestaurantDetailsCard = () => {
  const { id: restId } = useParams();
  const [item, setItem] = useState([]);
  const [showIndex, setShowIndex] = useState(0);
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
    <div className="py-4 border-2 border-indigo-200 rounded-lg">
      {item.map((item, index) => {
        if (index === 0 || index === item.length - 1) {
          return;
        }
        const itemDetails = item?.card?.card;
        return (
          <RestuarantCategoryAndItemsDetails
            key={`${restId}_${index}`}
            restuarantItemCategory={itemDetails}
            showAccordion={showIndex === index}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantDetailsCard;
