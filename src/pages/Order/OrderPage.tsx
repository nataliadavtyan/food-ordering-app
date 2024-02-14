import { useEffect, useState } from "react";
import styled from "styled-components";
import { MenuItem } from "./MenuItem";
import { useFetch } from "./useFetch";

export interface Pizza {
  // map: any;
  // map(arg0: (pizza: Pizza) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  country?: string;
  dsc?: string;
  id: string;
  img: string;
  name: string;
  price: number;
  rate?: number;
}

const StyledOrderPage = styled.div`
  width: 90vw;
  max-width: 900px;
  margin: 0 auto;
  /* border: 1px solid blue; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2em;
  /* grid-template-columns: repeat(3, minmax(250px, 1frc)); */
`;

export const OrderPage = () => {
  const PIZZAS_API = "https://adorable-bat-fatigues.cyclic.app/pizzas";
  const pizzaData = useFetch(PIZZAS_API);

  // is it ok that it is being logged out 4 times?
  console.log(pizzaData, "w");

  return (
    <div>
      {/* <h2>Order component is here</h2> */}
      <StyledOrderPage>
        {pizzaData.map((pizza: Pizza) => (
          <MenuItem key={pizza.id} {...pizza} />
        ))}
      </StyledOrderPage>
    </div>
  );
};
