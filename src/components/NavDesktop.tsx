import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navigation = styled.nav`
  display: none;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2em;
    margin-top: 0.875em;
    color: ${({ theme }) => theme.color.text};
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    display: block;
    border: 1px solid red;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 1rem;
  font-weight: 400;
`;

export const NavDesktop = () => {
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Order",
      path: "/order",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "My Profile",
      path: "/my-profile",
    },
  ];

  return (
    <Navigation>
      <ul>
        {navLinks.map((navLink, i) => (
          <li>
            <StyledNavLink to={navLink.path} key={`navlink-${i}`}>
              {navLink.title}
            </StyledNavLink>
          </li>
        ))}
      </ul>
    </Navigation>
  );
};
