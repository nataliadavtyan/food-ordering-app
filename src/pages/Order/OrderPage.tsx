import { createContext, useEffect, useState } from "react";
import styled from "styled-components";
import { MenuItem } from "./MenuItem";
import { useFetch } from "./useFetch";

const StyledOrderPage = styled.div`
  width: 90vw;
  max-width: 900px;
  margin: 0 auto;
  /* border: 1px solid blue; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2em;
  padding-block: 2em;
  /* grid-template-columns: repeat(3, minmax(250px, 1frc)); */
`;

export interface Pizza {
  id: string;
  img: string;
  name: string;
  price: number;
  quantity: number;
  rate?: number;
  country?: string;
  dsc?: string;
}

interface OrderContextType {
  order: Pizza[];
  addToOrder: (id: string) => void;
  removeFromOrder: (id: string) => void;
}

const OrderContext = createContext<OrderContextType>(null!);

export const OrderPage = () => {
  const PIZZAS_API = "https://adorable-bat-fatigues.cyclic.app/pizzas";
  const pizzaData = useFetch(PIZZAS_API);
  const [order, setOrder] = useState<Pizza[]>([]);
  // is it ok that it is being logged out 4-6 times?
  // console.log(pizzaData, "w");
  // console.log(order);

  useEffect(() => {
    if (pizzaData) {
      setOrder(pizzaData);
    }
  }, [pizzaData]);

  function addToOrder(id: string): void {
    setOrder((prevOrder) => {
      return prevOrder.map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
      );
    });
  }

  function removeFromOrder(id: string): void {
    setOrder((prevOrder) => {
      return prevOrder.map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
      );
    });
  }

  // console.log(order, order.length);

  return (
    <OrderContext.Provider value={{ order, addToOrder, removeFromOrder }}>
      <StyledOrderPage>
        {order.map((pizza: Pizza) => (
          <MenuItem key={pizza.id} {...pizza} />
        ))}
      </StyledOrderPage>
    </OrderContext.Provider>
  );
};

export { OrderContext };
