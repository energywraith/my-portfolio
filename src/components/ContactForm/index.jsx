import React, { useState } from 'react';
import postmanSvg from 'assets/postman.svg';
import Form from './Form';
import { ContactFormContainer, SuccessInformation } from './index.style';

function ContactForm() {
  const [isEmailSent, setIsEmailSent] = useState(false);

  return (
    <ContactFormContainer isEmailSent={isEmailSent}>
      <h3>Get in touch with me</h3>
      <h4>Use a contact form or other options listed below</h4>
      {
        !isEmailSent
          ? <Form setIsEmailSent={setIsEmailSent} />
          : (
            <SuccessInformation>
              <img src={postmanSvg} alt="Postman is in hurry" />
              Your email has been successfully sent, I will try to reply as fast as possible.
            </SuccessInformation>
          )
      }
    </ContactFormContainer>
  );
}

export default ContactForm;
