import { FetchedMenuItem } from "../hooks/useFetchData";

export const filterFetchedData = (
  data: FetchedMenuItem[],
  category: string
) => {
  // Remove pizzerias and apizzas
  if (category === "pizzas") {
    const pizzasOnly = data.filter((item: FetchedMenuItem) =>
      item.name.toLowerCase().split(" ").includes("pizza")
    );
    return removeDuplicates(pizzasOnly);
  } else if (category === "desserts") {
    // Only get selected categories of desserts
    const selectedDesserts = data.filter((item: FetchedMenuItem) => {
      const splitItemName = item.name.toLowerCase().split(" ");
      const specificDessertsOnly =
        splitItemName.includes("brownie") ||
        splitItemName.includes("chocolate") ||
        splitItemName.includes("pie") ||
        splitItemName.includes("cheesecake") ||
        splitItemName.includes("cupcake");
      return specificDessertsOnly;
    });
    return removeDuplicates(selectedDesserts);
  }

  //   remove duplicates
  function removeDuplicates(itemsArray: FetchedMenuItem[]) {
    const itemsNoDuplicates = itemsArray.filter(
      (item: FetchedMenuItem, index: number, self: FetchedMenuItem[]) =>
        index === self.findIndex((it: FetchedMenuItem) => it.name === item.name)
    );
    return itemsNoDuplicates;
  }
};

// This function can also return undefined... but WHY?
// const pizzasNoDuplicates = Array.from(
//     new Set(pizzasOnly.map((item: FetchedMenuItem) => item.name))
//     ).map((name) => {
//         return pizzasOnly.find((item: FetchedMenuItem) => item.name === name);
// });
