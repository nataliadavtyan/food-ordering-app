import { FC } from "react";
import { StyledBurgerIcon } from "./BurgerIcon.styled";
import { BurgerMenuProps } from "../Header";

export const BurgerIcon: FC<BurgerMenuProps> = ({ open, setOpen }) => {
  return (
    <StyledBurgerIcon open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurgerIcon>
  );
};
