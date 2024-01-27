import styled from "styled-components"
import { Nav } from "./Nav"

export const Header = () => {

    const Header = styled.header`
        // border: 1px solid red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: 0 auto;
        padding-block: 1em;
    `

    const Title = styled.h1`
        color: #9c130e;
        font-size: 2.25rem;
        font-weight: 800;
        text-align: center;
    `

    return (
        <Header>
            <Title>Sunday Pizza</Title>
            <Nav/>
        </Header>
    )
}