import { useEffect, useState } from "react";
import { filterFetchedData } from "../utils/filterFetchedData";

export interface FetchedMenuItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
  rate?: number;
  country?: string;
  dsc?: string;
}

export const useFetchData = (url: string) => {
  const [fetchedData, setFetchedData] = useState<FetchedMenuItem[]>();

  useEffect(() => {
    async () => {
      try {
        const response = await fetch(url);
        const data: FetchedMenuItem[] = await response.json();
        return setFetchedData(data);
      } catch (error) {
        console.error("Something went wrong with fetching", error);
        // throw error;
      }
    };
  }, []);

  if (fetchedData) {
    setFetchedData(filterFetchedData(fetchedData));
  } else {
    console.log("No data returned. NATALIA!!!!!");
    // handle error
  }

  // return fetchedData;
};

// Another way of removing pizzas with the same names
// const pizzasNoDuplicates = pizzasOnly.filter(
//   (item: Pizza, index: number, self: Pizza[]) =>
//     index === self.findIndex((it: Pizza) => it.name === item.name)
// );
