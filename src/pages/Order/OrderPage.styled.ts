import styled from "styled-components";
import { theme } from "../../styles/theme";

const StyledOrderFilters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1em;
  width: 100vw;
  background-color: white;
  padding-block: 0.625em;
  overflow-x: hidden;
`;

const FilterButton = styled.button<{ $isSelected: boolean }>`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ $isSelected }) =>
    $isSelected ? "white" : theme.color.inactiveText};
  padding: 0.5em 2em;
  border-radius: 1.5em;
  text-transform: capitalize;
  background-color: ${({ $isSelected }) =>
    $isSelected ? theme.color.main : "transparent"};

  &:hover {
    color: ${({ $isSelected }) => ($isSelected ? "white" : theme.color.text)};
  }
`;

const StyledMenu = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 1.5em auto;
  /* border: 1px solid blue; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2em;
`;

export { StyledOrderFilters, FilterButton, StyledMenu };
