import { FetchedMenuItem } from "../hooks/useFetchData";
import { removeDuplicates } from "./removeDuplicates";

export const filterFetchedData = (
  data: FetchedMenuItem[],
  category: string
) => {
  if (category === "pizzas") {
    const pizzasOnly = data.filter((item: FetchedMenuItem) =>
      item.name.toLowerCase().split(" ").includes("pizza")
    );
    return removeDuplicates(pizzasOnly);
  } else if (category === "desserts") {
    const selectedDesserts = data.filter((item: FetchedMenuItem) => {
      const splitItemName = item.name.toLowerCase().split(" ");
      const specificDessertsOnly =
        splitItemName.includes("brownie") ||
        splitItemName.includes("chocolate") ||
        splitItemName.includes("pie") ||
        splitItemName.includes("cheesecake");
      return specificDessertsOnly;
    });
    return removeDuplicates(selectedDesserts);
  } else if (category === "drinks") {
    const selectedDrinks = data.filter((item: FetchedMenuItem) => {
      const splitItemName = item.name.toLowerCase().split(" ");
      const specificDrinksOnly =
        splitItemName.includes("juice") || splitItemName.includes("coffee");
      return specificDrinksOnly;
    });
    return removeDuplicates(selectedDrinks);
  }
};

// This function can also return undefined... but WHY?
// const pizzasNoDuplicates = Array.from(
//     new Set(pizzasOnly.map((item: FetchedMenuItem) => item.name))
//     ).map((name) => {
//         return pizzasOnly.find((item: FetchedMenuItem) => item.name === name);
// });
