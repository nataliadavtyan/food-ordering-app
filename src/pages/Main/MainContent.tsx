import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  // border: 1px solid green;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // max-width: 600px;
  // width: 70vw;
  gap: 5em;
  padding: 2em;
  // border: 1px solid blue;
`;

const Slogan = styled.p`
  font-size: 1.75rem;
  white-space: pre-wrap;
  text-align: center;
`;
const LinkAsButton = styled(Link)`
  text-decoration: none;
  background-color: black;
  color: white;
  font-size: 1.125rem;
  font-weight: 400;
  padding: 0.75em 1.5em;
  border-radius: 2em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

export const MainContent = () => {
  // const Link = ({ className: string, children: string}) => (
  //     <a className={className}>
  //         {children}
  //     </a>
  // )

  // const Button = styled.button`
  //     text-decoration: none;
  //     background-color: black;
  //     color: white;
  //     font-size: 1.125rem;
  //     font-weight: 400;
  //     padding: 0.75em 1.5em;
  //     border-radius: 2em;
  //     cursor: pointer;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     gap: 2em;
  // `

  return (
    <Center>
      <MainContainer>
        <Slogan>{`Any day is a Sunday.\nAny day is a pizza day.`}</Slogan>
        {/* <LinkAsButton>
                    Order your pizza
                    <FaAngleRight size="0.75em" />
                </LinkAsButton> */}
      </MainContainer>
    </Center>
  );
};
