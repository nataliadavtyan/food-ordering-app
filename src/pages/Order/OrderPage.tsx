import { createContext, useEffect, useState } from "react";
import { MenuItem } from "./MenuItem";
import { FetchedMenuItem, useFetchData } from "./hooks/useFetchData";
import { FaTheRedYeti } from "react-icons/fa6";
import {
  FilterButton,
  StyledMenu,
  StyledOrderFilters,
} from "./OrderPage.styled";

export interface Item extends FetchedMenuItem {
  quantity?: number;
  // addToUserOrder: (id: string) => void;
}

interface OrderContextType {
  fullMenu: Item[];
  // quantity: number;
  addToOrder: (id: string) => void;
  removeFromOrder: (id: string) => void;
}

const OrderContext = createContext<OrderContextType>(null!);

export const OrderPage = () => {
  const [selectedFilterCategory, setSelectedFilterCategory] =
    useState("pizzas");
  const selectedCategoryData = useFetchData(selectedFilterCategory);
  const [userOrder, setUserOrder] = useState<Item[]>();
  // console.log(selectedFilterCategory);
  // const [fullMenu, setFullMenu] = useState<Item[]>([]);
  // const storedOrderData: string | null = JSON.parse(
  //   localStorage.getItem("userOrder")
  // );
  // const [userOrder, setUserOrder] = useState<Pizza[]>(
  //   JSON.parse(localStorage.getItem("userOrder")) || []
  // );

  const orderFilters = ["pizzas", "desserts", "drinks"];
  const orderFiltersEls = orderFilters.map((filter, i) => (
    <FilterButton
      key={i}
      onClick={() => setSelectedFilterCategory(filter)}
      $isSelected={filter === selectedFilterCategory}
    >
      {filter}
    </FilterButton>
  ));
  // console.log(selectedFilterCategory);

  // useEffect(() => {
  //   // setUserOrder(() => {
  //   let filteredOrder = fullMenu.filter((item: Item) => item.quantity > 0);
  //   localStorage.setItem("userOrder", JSON.stringify(filteredOrder));
  //   // });
  // }, [fullMenu]);

  // useEffect(() => {
  //   if (pizzaData) {
  //     setFullMenu(pizzaData);
  //   }
  // }, [pizzaData]);

  // function addToOrder(id: string): void {
  //   setFullMenu((prevFullMenu) => {
  //     return prevFullMenu.map((pizza) =>
  //       pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
  //     );
  //   });
  // }
  // function addToUserOrder(id: string): void {
  // check if the selected item exists in the order
  // if it does exist there, update the quantity
  // if it doesn't, push the item to the order and add quantity
  //   const clickedMenuItem = pizzaData!.find((item) => item.id === id)!;
  //   if (userOrder?.some((item) => item.id === clickedMenuItem.id)) {
  //     setUserOrder((prevUserOrder: Item[]) => [
  //       ...prevUserOrder,
  //       { ...clickedMenuItem, quantity: clickedMenuItem.quantity + 1 },
  //     ]);
  //   }
  // }
  // function removeFromUserOrder(id: string): void {
  //   setFullMenu((prevFullMenu) => {
  //     return prevFullMenu.map((pizza) =>
  //       pizza.id === id ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
  //     );
  //   });
  // }

  // console.log(order, order.length);

  return (
    // <OrderConext.Provider value={{ fullMenu, addToOrder, removeFromOrder }}>
    <>
      <StyledOrderFilters>{orderFiltersEls}</StyledOrderFilters>
      <StyledMenu>
        {selectedCategoryData &&
          selectedCategoryData.map((item: FetchedMenuItem) => (
            <MenuItem key={item.id} {...item} />
          ))}
      </StyledMenu>
    </>
    // </OrderContext.Provider>
  );
};

export { OrderContext };
