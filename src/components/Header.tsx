import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { BurgerIcon } from "./Navigation/BurgerIcon";
import { BurgerMenu } from "./Navigation/BurgerMenu";
import { StyledHeader } from "./Header.styled";

export interface BurgerMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Header: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledHeader>
      <Link to="/">
        <h1>Sunday Pizza</h1>
      </Link>
      <div>
        <BurgerIcon open={open} setOpen={setOpen} />
        <BurgerMenu open={open} setOpen={setOpen} />
      </div>
    </StyledHeader>
  );
};
