import { Link } from "react-router-dom";
import { navRoutes } from "../../navRoutes";
import { StyledMenu } from "./Menu.styled";
import { FC } from "react";

export interface MenuProps {
  open: boolean;
}

export const Menu: FC<MenuProps> = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <ul>
        {navRoutes.map((route, i) => (
          <li key={`nav-${i}`}>
            <Link to={route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
};
