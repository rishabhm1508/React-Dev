import { useState } from "react";
import { RestuarantMenuCategoryCard } from "./RestaurantMenuCategory";

export const RestuarantCategoryAndItemsDetails = ({
  restuarantItemCategory,
  showAccordion,
  setShowIndex,
}) => {
  const [isShowAccordion, setIsShowAccordion] = useState(false);
  function handleClick() {
    if (!showAccordion || !isShowAccordion) {
      setIsShowAccordion(true);
      setShowIndex();
    } else {
      setIsShowAccordion(false);
    }
  }
  return (
    <div className={"w-1/2 m-auto cursor-pointer border-3 border-black"}>
      <div
        onClick={handleClick}
        className="flex justify-between bg-gray-50 px-8 py-4 mt-2 border-2 border-gray-200 rounded-sm shadow-md"
      >
        {/* accordion header  */}
        <span className="font-bold text-lg">
          {restuarantItemCategory?.title}
        </span>
        <span>⬇️</span>
      </div>

      {showAccordion && isShowAccordion && (
        <div className="px-2 bg-indigo-100 border-8 ease duration-1000">
          {restuarantItemCategory?.itemCards?.map((menuItems) => {
            return (
              <RestuarantMenuCategoryCard
                key={menuItems?.card?.info?.id}
                itemDetails={menuItems?.card?.info}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestuarantCategoryAndItemsDetails;
