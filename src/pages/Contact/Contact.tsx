import styled from "styled-components";
import { ContactForm } from "./ContactForm";
import { Map } from "./Map";
// import { Center } from "../Main/MainContent";

export const ContactPage = styled.div`
  width: 95%;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2rem;
`;

export const Contact = () => {
  return (
    <ContactPage>
      <Title>Contact Us</Title>
      <p>
        Please note that this is a fictional restaurant which means that it does
        not exist. If you are looking for a place to eat a good pizza in
        Barcelona on Sunday, one of my favourite places is Parking Pizza.
      </p>
      <ContactForm />
      <Map />
    </ContactPage>
  );
};
