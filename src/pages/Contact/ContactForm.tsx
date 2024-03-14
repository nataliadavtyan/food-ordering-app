import { useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { StyledContactForm } from "./ContactForm.styled";

export const ContactForm = () => {
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      console.log(form);
      emailjs
        .sendForm(
          "service_14rfngj",
          "template_tt1pcoo",
          form.current,
          import.meta.env.VITE_EMAILJS_KEY
        )
        .then(
          () => {
            // reset the input fields
            // add a message for the user
            console.log("Email sent successfully!");
          },
          (error: EmailJSResponseStatus) => {
            // add a message for the user
            console.log("An error occured while sending the email", error.text);
          }
        );
    }
  };

  return (
    <StyledContactForm ref={form} onSubmit={sendEmail}>
      <label htmlFor="from_name">Name</label>
      <input type="text" name="from_name" id="from_name" required />
      <label htmlFor="from_email">Email</label>
      <input type="email" name="from_email" id="from_email" required />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" required />
      <input type="submit" value="Send" />
    </StyledContactForm>
  );
};
