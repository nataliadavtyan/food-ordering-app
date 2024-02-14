import { Link } from "react-router-dom";
import { navRoutes } from "./navRoutes";
import { StyledBurgerMenu } from "./BurgerMenu.styled";
import { FC } from "react";
import { BurgerMenuProps } from "../Header";

export const BurgerMenu: FC<BurgerMenuProps> = ({ open, setOpen }) => {
  return (
    <StyledBurgerMenu open={open}>
      <ul>
        {navRoutes.map((route, i) => (
          <li key={`nav-${i}`} onClick={() => setOpen(!open)}>
            <Link to={route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </StyledBurgerMenu>
  );
};
