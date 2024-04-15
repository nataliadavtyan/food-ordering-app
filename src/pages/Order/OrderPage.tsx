import { useState } from "react";
import { MenuItem } from "./MenuItem";
import { FetchedMenuItem, useFetchData } from "./hooks/useFetchData";
import {
  FilterButton,
  StyledMenu,
  StyledOrderFilters,
} from "./OrderPage.styled";
import { Loading } from "../../components/Loading";
import { formatData } from "./utils/formatData";

export interface UserOrderItem {
  id: string;
  quantity: number;
  // addToUserOrder: (id: string) => void;
}

interface RenderedMenuItem extends FetchedMenuItem {
  quantity?: number;
}

export const OrderPage = () => {
  const [selectedFilterCategory, setSelectedFilterCategory] =
    useState("pizzas");
  // const selectedCategoryData = useFetchData(selectedFilterCategory);
  const [selectedCategoryData, isLoading] = useFetchData(
    selectedFilterCategory
  );

  const [userOrder, setUserOrder] = useState<UserOrderItem[]>([
    { id: "2-lou-malnatis-deep-dish-pizzas", quantity: 1 },
    { id: "brooklyn-pizza-choose-your-own-5-pack", quantity: 2 },
  ]);

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

  const filteredSelectedCategoryData =
    selectedCategoryData &&
    formatData(selectedCategoryData, selectedFilterCategory);

  return (
    // <OrderContext.Provider value={{ userOrder, addToUserOrder }}>
    <>
      <StyledOrderFilters>{orderFiltersEls}</StyledOrderFilters>
      <StyledMenu>
        {isLoading ? (
          <Loading />
        ) : (
          filteredSelectedCategoryData?.map((item: FetchedMenuItem) => (
            <MenuItem
              key={item.id}
              quantity={
                userOrder.find((orderItem) => orderItem.id === item.id)
                  ?.quantity || undefined
              }
              {...item}
              // addToUserOrder={addToUserOrder}
            />
          ))
        )}
      </StyledMenu>
    </>
    // </OrderContext.Provider>
  );
};

// interface OrderContextType {
//   userOrder: Item[];
//   // quantity: number;
//   addToOrder: (id: string) => void;
//   removeFromOrder?: (id: string) => void;
// }

// const OrderContext = createContext<OrderContextType>(null!);
