import { FC, useContext } from "react";
import PizzaImgFallback from "../../assets/pizza-img-fallback.jpg";
import { Item } from "./OrderPage";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { OrderContext } from "./OrderPage";
import { AddToBasketPanel, StyledMenuItem } from "./MenuItem.styled";

export const MenuItem: FC<Item> = ({
  id,
  name,
  price,
  img,
  quantity,
  addToUserOrder,
}) => {
  const priceInEuro = (price / 10).toFixed(2);
  // const { addToOrder, removeFromOrder } = useContext(OrderContext);

  return (
    <StyledMenuItem>
      <img
        src={img}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = PizzaImgFallback;
        }}
      />
      <div className="menu-item-description">
        <h3>{name}</h3>
        <p>€{priceInEuro}</p>
        <AddToBasketPanel>
          {quantity && (
            <>
              <button onClick={() => removeFromUserOrder(id)}>
                <FaMinus />
              </button>
              <p>{quantity}</p>
            </>
          )}
          <button onClick={() => addToUserOrder(id)}>
            <FaPlus />
          </button>
        </AddToBasketPanel>
      </div>
    </StyledMenuItem>
  );
};
