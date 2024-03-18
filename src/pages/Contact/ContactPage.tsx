import { ContactForm } from "./ContactForm";
import { Map } from "./Map";
import { StyledContactPage } from "./ContactPage.styled";
import { PageTitle } from "../../sharedStyles/PageTitle";

export const ContactPage = () => {
  return (
    <StyledContactPage>
      <PageTitle>Contact Us</PageTitle>
      <div>
        <ContactForm />
        <Map />
      </div>
    </StyledContactPage>
  );
};
