import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
    const Navigation = styled.nav`
        list-style: none;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2em;
    `
        
    // const NavList = styled.ul`
    // `
        
    // const ListItem = styled.li`
    // `
    
    const StyledLink = styled(NavLink)`
        text-decoration: none;
        color: inherit;
        font-size: 1rem;
        font-weight: 400;
    `

    return (
        <Navigation>
            {/* <NavList> */}
                {/* <ListItem> */}
                    <StyledLink to="/">
                        Main
                    </StyledLink>
                {/* </ListItem> */}
                {/* <ListItem> */}
                    <StyledLink to="/order">
                        Order
                    </StyledLink>    
                {/* </ListItem> */}
                {/* <ListItem> */}
                    <StyledLink to="/contact">
                        Contact
                    </StyledLink>
                {/* </ListItem> */}
                {/* <ListItem> */}
                    <StyledLink to="/my-profile">
                        My Profile
                    </StyledLink>
                {/* </ListItem> */}
            {/* </NavList> */}
        </Navigation>
    )
}