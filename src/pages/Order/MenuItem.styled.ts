import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const StyledMenuItem = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background-color: white;
  justify-self: center;

  @media ${device.md} {
    width: 100%;
  }

  img {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  div.menu-item-description {
    padding: 1em 0.75em;
    position: relative;
  }

  h3 {
    margin-bottom: 1.5em;
  }
`;

const AddToBasketPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  position: absolute;
  bottom: 1em;
  right: 0.75em;

  button {
    font-size: 1rem;
    border: 1px solid lightgray;
    border-radius: 50%;
    background: transparent;
    padding: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 1.75rem;
  }
`;

export { StyledMenuItem, AddToBasketPanel };
