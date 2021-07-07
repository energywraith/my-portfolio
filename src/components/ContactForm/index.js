import { useState } from "react";
import Form from "./Form";

import { ContactFormContainer, SuccessInformation } from "./index.style";

const ContactForm = ({ id }) => {
  const [isEmailSent, setIsEmailSent] = useState(false)

  return (
    <ContactFormContainer id={id}>
      <h3> Get in touch with me </h3>
      <h4> Use a contact form or other options listed below </h4>
      {
        !isEmailSent
          ? <Form setIsEmailSent={setIsEmailSent} />
          : <SuccessInformation> Your email has been successfully sent, I will try to reply as fast as possible. </SuccessInformation>
      }
    </ContactFormContainer>
  )
}

export default ContactForm