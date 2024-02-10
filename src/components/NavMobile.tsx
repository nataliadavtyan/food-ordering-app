import styled from "styled-components";
// import { NavLink } from "react-router-dom";
import { Pivot as Hamburger } from "hamburger-react";

const StyledHamburger = styled.div`
  color: ${(props) => props.theme.color.text};
  display: block;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;

export const NavMobile = () => {
  return (
    <>
      <StyledHamburger>
        <Hamburger />
      </StyledHamburger>
    </>
  );
};
