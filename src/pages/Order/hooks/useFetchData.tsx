import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { Loading } from "../../../components/Loading";

export interface FetchedMenuItem {
  id: string;
  name: string;
  price: number;
  img: string;
  quantity?: number;
}

export const useFetchData = (
  category: string
): [FetchedMenuItem[] | undefined, boolean] => {
  const API_URL = `https://adorable-bat-fatigues.cyclic.app/${category}`;

  const { data, isLoading } = useQuery({
    queryKey: ["fetchedData"],
    queryFn: async () => {
      const { data } = await axios.get(API_URL);
      return data as FetchedMenuItem[];
    },
  });

  return [data, isLoading];
};
