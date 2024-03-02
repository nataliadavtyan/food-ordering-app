import { FetchedMenuItem } from "../hooks/useFetchData";

export const filterFetchedData = (data: FetchedMenuItem[]) => {
  // Remove pizzerias and apizzas
  const pizzasOnly = data.filter((item: FetchedMenuItem) =>
    item.name.toLowerCase().split(" ").includes("pizza")
  );

  const pizzasNoDuplicates = pizzasOnly.filter(
    (item: FetchedMenuItem, index: number, self: FetchedMenuItem[]) =>
      index === self.findIndex((it: FetchedMenuItem) => it.name === item.name)
  );

  return pizzasNoDuplicates;
};

// This function can also return undefined... but WHY?
// const pizzasNoDuplicates = Array.from(
//     new Set(pizzasOnly.map((item: FetchedMenuItem) => item.name))
//     ).map((name) => {
//         return pizzasOnly.find((item: FetchedMenuItem) => item.name === name);
// });
