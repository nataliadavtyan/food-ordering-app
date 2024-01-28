import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Nav } from './Nav'

export const Header = () => {
    const Header = styled.header`
        // border: 1px solid red;
        display: flex;
        // flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 90vw;
        margin: 0 auto;
        padding-block: 1em;
    `

    const StyledLink = styled(Link)`
        text-decoration: none;
    `

    const Title = styled.h1`
        color: #9c130e;
        font-size: 2.25rem;
        font-weight: 800;
        text-align: center;
    `

    return (
        <Header>
            <StyledLink to="/">
                <Title>Sunday Pizza</Title>
            </StyledLink>
            <Nav />
        </Header>
    )
}