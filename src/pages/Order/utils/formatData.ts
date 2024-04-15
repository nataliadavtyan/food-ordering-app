import { filterFetchedData } from "./filterFetchedData";
import { FetchedMenuItem } from "../hooks/useFetchData";
import { removeDuplicates } from "./removeDuplicates";

export const formatData = (
  data: FetchedMenuItem[],
  category: string
): FetchedMenuItem[] => {
  const filteredData = filterFetchedData(data, category);
  const noDuplicatesData = removeDuplicates(filteredData!);
  return noDuplicatesData;
};
