import styled from "styled-components";

export const StyledContactForm = styled.form`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  padding: 2em;
  border-radius: 16px;

  label {
    font-size: 1.125rem;
    margin-bottom: 0.5em;
    margin-left: 0.375em;
  }

  input,
  textarea {
    font-size: 1.125rem;
    padding: 0.5em 1em;
    border-radius: 8px;
    border: none;
    margin-bottom: 1.5em;
    border: 1px solid lightgray;

    &::placeholder {
      color: ${({ theme }) => theme.color.inactiveText};
    }

    &::after {
      content: " *";
    }
  }

  textarea {
    resize: none;
  }

  button {
    background: black;
    color: white;
    font-size: 1.5rem;
    padding: 0.5em 1em;
    border-radius: 8px;
    border: none;
    margin-bottom: 1em;

    &:hover {
      background: ${({ theme }) => theme.color.main};
    }
  }

  p {
    font-size: 0.875rem;
    line-height: 1.25;
    color: ${({ theme }) => theme.color.inactiveText};
    margin-bottom: 0.75em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    text-underline-offset: 0.25em;
    color: inherit;

    &:hover {
      color: ${({ theme }) => theme.color.main};
    }
  }
`;
