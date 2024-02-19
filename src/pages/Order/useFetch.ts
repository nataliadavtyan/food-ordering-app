import { useEffect, useState } from "react";
import { Pizza } from "./OrderPage";

interface FetchedMenuItem extends Pizza {
    rate: number;
    country: string;
    dsc: string;
  }

export const useFetch = (url: string) => {
  const [fetchedData, setFetchedData] = useState<Pizza[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
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
      const pizzasOnly = data.filter((item: FetchedMenuItem) =>
        item.name.toLowerCase().split(" ").includes("pizza")
      );
      // const pizzasNoDuplicates = pizzasOnly.filter(
      //   (item: Pizza, index: number, self: Pizza[]) =>
      //     index === self.findIndex((it: Pizza) => it.name === item.name)
      // );

      // Another way of removing pizzas with the same names
      const pizzasNoDuplicates = Array.from(
        new Set(pizzasOnly.map((item: FetchedMenuItem) => item.name))
      ).map((name) => {
        return pizzasOnly.find((item: FetchedMenuItem) => item.name === name);
      });

      // add quantity to each pizza
      const finalDataFormat = pizzasNoDuplicates.map((pizza: FetchedMenuItem): Pizza => ({
        id: pizza.id,
        name: pizza.name,
        img: pizza.img,
        price: pizza.price,
        quantity: 0,
      }));
      setFetchedData(finalDataFormat);
    });
  }, []);

  return fetchedData;
};
