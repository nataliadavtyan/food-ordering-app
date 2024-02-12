import { FC, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavDesktop } from "./Navigation/Desktop/NavDesktop";
import { Burger } from "./Navigation/Mobile/Burger";
import { Menu } from "./Navigation/Mobile/Menu";
// import { NavMobile } from "./Navigation/NavMobile";
// import { theme } from "../theme.tsx";

const StyledHeader = styled.header`
  // border: 1px solid red;
  display: flex;
  // flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* width: 90vw; */
  /* width: 100%; */
  padding: 1em 2em;
  margin: 0 auto;
  /* position: relative;
  width: 100vw; */
  /* padding-block: 1em; */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.color.main};
  font-size: 2.25rem;
  font-weight: 800;
  text-align: center;
`;

export const Header: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledHeader>
      <StyledLink to="/">
        <Title>Sunday Pizza</Title>
      </StyledLink>
      <div>
        {/* <NavDesktop /> */}
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </div>
    </StyledHeader>
  );
};
