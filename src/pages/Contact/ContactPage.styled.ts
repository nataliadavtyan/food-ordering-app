import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const StyledContactPage = styled.div`
  width: 95%;
  margin: 0 auto 1em;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 3em;

    @media ${device.md} {
      flex-direction: column;
      align-items: center;
      gap: 2em;
    }
  }
`;
