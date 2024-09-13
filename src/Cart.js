import { useDispatch, useSelector } from "react-redux";
import appStore from "./store/appStore";
import { RestuarantMenuCategoryCard } from "./RestaurantMenuCategory";
import { clearCart } from "./store/cartSlice";

const CartComponent = () => {
  const items = useSelector((store) => store.cart.items);
  const actionDispatcher = useDispatch();

  const actionHandler = () => {
    actionDispatcher(clearCart());
  };
  return (
    <div>
      <div className="flex m-auto justify-between mb-2 mt-8 w-8/12">
        <span className="font-bold text-3xl"> Cart</span>
        {items.length ? (
          <button
            onClick={actionHandler}
            className="hover:text-white hover:bg-blue-500 bg-white outline-none text-blue-500  font-bold rounded-md px-2"
          >
            Clear cart
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="w-8/12 m-auto mb-2">
        {items.length ? (
          items.map((item) => {
            return (
              <RestuarantMenuCategoryCard
                key={item?.id}
                itemDetails={item}
                isCart={true}
              />
            );
          })
        ) : (
          <div className="flex m-auto justify-between mt-2">
            Please add items to your cart...
          </div>
        )}
      </div>
    </div>
  );
};

export default CartComponent;
