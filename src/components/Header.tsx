import { FC, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BurgerIcon } from "./Navigation/BurgerIcon";
import { BurgerMenu } from "./Navigation/BurgerMenu";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;

  a {
    text-decoration: none;
  }

  h1 {
    color: ${({ theme }) => theme.color.main};
    font-size: 2.25rem;
    font-weight: 800;
    text-align: left;
  }
`;

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
