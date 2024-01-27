import styled from "styled-components"

export const Header = () => {

const Header = styled.header`
    // border: 1px solid red;
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
        </Header>
    )
}