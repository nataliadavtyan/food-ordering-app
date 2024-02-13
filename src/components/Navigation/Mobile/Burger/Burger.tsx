import { FC } from "react";
import { StyledBurger } from "./Burger.styled";
import { MenuProps } from "../../../Header";

export const Burger: FC<MenuProps> = ({ open, setOpen }) => {
  console.log(open);
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
