import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { navRoutes } from "../navRoutes";

const Navigation = styled.nav`
  display: block;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2em;
    margin-top: 0.875em;
    color: ${({ theme }) => theme.color.text};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
    /* border: 1px solid red; */
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 1rem;
  font-weight: 400;
`;

export const NavDesktop = () => {
  return (
    <Navigation>
      <ul>
        {navRoutes.map((route, i) => (
          <li>
            <StyledNavLink to={route.path} key={`nav-${i}`}>
              {route.title}
            </StyledNavLink>
          </li>
        ))}
      </ul>
    </Navigation>
  );
};
