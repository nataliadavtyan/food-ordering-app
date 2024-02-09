import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navigation = styled.nav`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;
  color: ${(props) => props.theme.colors.text};
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 1rem;
  font-weight: 400;
`;

export const Nav = () => {
  const navLinks = [
    {
      link: "Home",
      to: "/",
    },
    {
      link: "Order",
      to: "/order",
    },
    {
      link: "Contact",
      to: "/contact",
    },
    {
      link: "My Profile",
      to: "/my-profile",
    },
  ];

  return (
    <Navigation>
      {navLinks.map((navLink, i) => (
        <StyledNavLink to={navLink.to} key={`navlink-${i}`}>
          {navLink.link}
        </StyledNavLink>
      ))}
    </Navigation>
  );
};
