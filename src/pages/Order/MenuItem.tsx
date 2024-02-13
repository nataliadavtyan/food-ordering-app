import { FC } from "react";
import styled from "styled-components";
import PizzaImgFallback from "../../assets/pizza-img-fallback.jpg";
import { Pizza } from "./Order";

const StyledMenuItem = styled.div`
  border: 1px solid red;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;

export const MenuItem: FC<Pizza> = ({ name, price, img }) => {
  return (
    <StyledMenuItem>
      <img
        src={img}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = PizzaImgFallback;
        }}
      />
      <h3>{name}</h3>
      <p>{price}</p>
    </StyledMenuItem>
  );
};
