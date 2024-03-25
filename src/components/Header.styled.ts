import styled from "styled-components";

export const StyledHeader = styled.header`
  padding-block: 1em;
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: start;

  a {
    text-decoration: none;
  }

  h1 {
    color: ${({ theme }) => theme.color.main};
    font-size: 2.25rem;
    font-weight: 800;
    text-align: left;
  }
`;
