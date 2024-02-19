import styled from "styled-components";
import { FC, useContext } from "react";
import PizzaImgFallback from "../../assets/pizza-img-fallback.jpg";
import { Pizza } from "./OrderPage";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { OrderContext } from "./OrderPage";

const StyledMenuItem = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background-color: white;
  justify-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    width: 100%;
    /* border: 1px solid green; */
  }

  img {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  div.menu-item-description {
    padding: 1em 0.75em;
    /* border: 1px solid red; */
    position: relative;
  }

  h3 {
    margin-bottom: 1.5em;
  }
`;

const AddToBasketPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  position: absolute;
  bottom: 1em;
  right: 0.75em;
  /* border: 1px solid red; */
  /* margin: 0;  */

  button {
    font-size: 1rem;
    border: 1px solid lightgray;
    /* border: none; */
    border-radius: 50%;
    /* background: lightgray; */
    background: transparent;
    padding: 0.5em;
    /* width: 1.25em;
    height: 1.25em; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 1.75rem;
  }
`;

export const MenuItem: FC<Pizza> = ({ id, name, price, img, quantity }) => {
  const priceInEuro = (price / 10).toFixed(2);
  const { addToOrder, removeFromOrder } = useContext(OrderContext);

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
        {quantity ? (
          <AddToBasketPanel>
            <button onClick={() => removeFromOrder(id)}>
              <FaMinus />
            </button>
            <p>{quantity}</p>
            <button onClick={() => addToOrder(id)}>
              <FaPlus />
            </button>
          </AddToBasketPanel>
        ) : (
          <AddToBasketPanel>
            <button onClick={() => addToOrder(id)}>
              <FaPlus />
            </button>
          </AddToBasketPanel>
        )}
      </div>
    </StyledMenuItem>
  );
};
