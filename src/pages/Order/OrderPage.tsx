import { useEffect, useState } from "react";
import styled from "styled-components";
import { MenuItem } from "./MenuItem";

export interface Pizza {
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
  const [pizzaData, setPizzaData] = useState<Pizza[]>([]);
  const PIZZAS_API = "https://adorable-bat-fatigues.cyclic.app/pizzas";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(PIZZAS_API);
        const data: Pizza[] = await response.json();
        // console.log(data);
        return data;
      } catch (error) {
        console.error("Something went wrong with fetching", error);
        // throw error;
      }
    };
    fetchData().then((data: any) => {
      // Remove pizzerias and apizzas
      const pizzasOnly = data.filter((item: Pizza) =>
        item.name.toLowerCase().split(" ").includes("pizza")
      );
      // const pizzasNoDuplicates = pizzasOnly.filter(
      //   (item: Pizza, index: number, self: Pizza[]) =>
      //     index === self.findIndex((it: Pizza) => it.name === item.name)
      // );

      // Another way of removing pizzas with the same names
      const pizzasNoDuplicates = Array.from(
        new Set(pizzasOnly.map((a: Pizza) => a.name))
      ).map((name) => {
        return pizzasOnly.find((a: Pizza) => a.name === name);
      });
      setPizzaData(pizzasNoDuplicates);
    });
  }, []);

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
