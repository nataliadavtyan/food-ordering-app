import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Navigation = styled.nav`
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2em;
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: inherit;
    font-size: 1rem;
    font-weight: 400;
`

export const Nav = () => {
    const links = [
        {
            link: "Home",
            to: "/"
        },
        {
            link: "Order",
            to: "/order"
        },
        {
            link: "Contact",
            to: "/contact"
        },
        {
            link: "My Profile",
            to: "/my-profile"
        },
    ]

    return (
        <Navigation>
            {links.map((link, i) => (
                <StyledLink to={link.to} key={`navlink-${i}`}>
                    {link.link}
                </StyledLink>
            ))}
        </Navigation>
    )
}