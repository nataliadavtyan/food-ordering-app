import { useEffect, useState } from "react";
import { filterFetchedData } from "../utils/filterFetchedData";

export interface FetchedMenuItem {
  id: string;
  name: string;
  price: number;
  img: string;
  rate?: number;
  country?: string;
  dsc?: string;
}

export const useFetchData = (category: string) => {
  const API_URL = `https://adorable-bat-fatigues.cyclic.app/${category}`;
  const [fetchedData, setFetchedData] = useState<FetchedMenuItem[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data: FetchedMenuItem[] = await response.json();
        // console.log(data);
        return data;
      } catch (error) {
        console.error("Something went wrong with fetching", error);
        // throw error;
      }
    };
    fetchData().then((data: FetchedMenuItem[] | undefined) => {
      if (data) {
        setFetchedData(filterFetchedData(data, category));
        // setFetchedData(data);
      } else {
        console.log("No data returned. NATALIA!!!!!");
        // handle error
      }
    });
  }, []);

  return fetchedData;
};
