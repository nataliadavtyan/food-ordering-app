import { FetchedMenuItem } from "../hooks/useFetchData";

export function removeDuplicates(itemsArray: FetchedMenuItem[]) {
  const itemsNoDuplicates = itemsArray.filter(
    (item: FetchedMenuItem, index: number, self: FetchedMenuItem[]) =>
      index === self.findIndex((it: FetchedMenuItem) => it.name === item.name)
  );
  return itemsNoDuplicates;
}
