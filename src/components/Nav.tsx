import styled from "styled-components"

export const Nav = () => {
    const Navigation = styled.nav`

    `
        
    const NavList = styled.ul`
        list-style: none;
        display: flex;
        justify-content: center;
        gap: 2em;
    `

    const ListItem = styled.li`
        font-size: 1rem;
        font-weight: 400;
    `

    return (
        <Navigation>
            <NavList>
                <ListItem>Main</ListItem>
                <ListItem>Order</ListItem>
                <ListItem>Contact</ListItem>
                <ListItem>My Profile</ListItem>
            </NavList>
        </Navigation>
    )
}