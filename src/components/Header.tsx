import { FC, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { NavDesktop } from "./Navigation/Desktop/NavDesktop";
import { Burger } from "./Navigation/Mobile/Burger";
import { Menu } from "./Navigation/Mobile/Menu";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  margin: 0 auto;

  a {
    text-decoration: none;
  }

  h1 {
    color: ${({ theme }) => theme.color.main};
    font-size: 2.25rem;
    font-weight: 800;
    text-align: center;
  }
`;

export interface MenuProps {
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
        {/* <NavDesktop /> */}
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </StyledHeader>
  );
};
