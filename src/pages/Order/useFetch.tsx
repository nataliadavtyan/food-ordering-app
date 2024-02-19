import { useEffect, useState } from "react";
import { Pizza } from "./OrderPage";

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
      const pizzasOnly = data.filter((item: Pizza) =>
        item.name.toLowerCase().split(" ").includes("pizza")
      );
      // const pizzasNoDuplicates = pizzasOnly.filter(
      //   (item: Pizza, index: number, self: Pizza[]) =>
      //     index === self.findIndex((it: Pizza) => it.name === item.name)
      // );

      // Another way of removing pizzas with the same names
      const pizzasNoDuplicates = Array.from(
        new Set(pizzasOnly.map((item: Pizza) => item.name))
      ).map((name) => {
        return pizzasOnly.find((item: Pizza) => item.name === name);
      });

      // add quantity to each pizza
      const addedQuantity = pizzasNoDuplicates.map((pizza: Pizza) => ({
        ...pizza,
        quantity: 0,
      }));
      setFetchedData(addedQuantity);
    });
  }, []);

  return fetchedData;
};
