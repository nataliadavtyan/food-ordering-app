import { useEffect, useState } from "react";
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

export const Order = () => {
  const [pizzaData, setPizzaData] = useState<Pizza[]>([]);
  const API_URL = "https://adorable-bat-fatigues.cyclic.app/pizzas";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data: Pizza[] = await response.json();
        // console.log(data);
        return data;
      } catch (error) {
        console.error("Something went wrong with fetching", error);
        // throw error;
      }
    };
    fetchData().then((data: any) => {
      setPizzaData(data);
    });
  }, []);

  return (
    <div>
      <h2>Order component is here</h2>
      <div>
        {pizzaData.map((pizza: Pizza) => (
          <MenuItem key={pizza.id} {...pizza} />
        ))}
      </div>
    </div>
  );
};
