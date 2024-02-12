import { FC } from "react";
import { StyledBurger } from "./Burger.styled";

export interface BurgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Burger: FC<BurgerProps> = ({ open, setOpen }) => {
  console.log(open);
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
