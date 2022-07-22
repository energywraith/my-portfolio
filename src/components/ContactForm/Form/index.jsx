import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emailjs, { init } from 'emailjs-com';
import { handleValidation } from './validation';
import { FormContainer, InputGroup, SubmitButton } from './index.style';

function Form({ setIsEmailSent }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contactFormErrors, setContactFormErrors] = useState({
    name: '', email: '', message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (handleValidation(name, email, message, setContactFormErrors)) {
      init('user_FokKGGu0nYvixQZZQCMYz');

      const params = {
        from_name: name,
        email,
        message,
      };

      emailjs.send('service_e2649gi', 'template_8vmolpe', params)
        .then(() => {
          setName('');
          setEmail('');
          setMessage('');
          setIsEmailSent(true);
        }, () => {
          // console.log('FAILED...', error);
        });
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputGroup error={contactFormErrors.name}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <span>
          {' '}
          {contactFormErrors.name}
          {' '}
        </span>
      </InputGroup>
      <InputGroup error={contactFormErrors.email}>
        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <span>
          {' '}
          {contactFormErrors.email}
          {' '}
        </span>
      </InputGroup>
      <InputGroup error={contactFormErrors.message}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        />
        <span>
          {' '}
          {contactFormErrors.message}
          {' '}
        </span>
      </InputGroup>
      <SubmitButton type="submit">
        Send a message
      </SubmitButton>
    </FormContainer>
  );
}

Form.propTypes = {
  setIsEmailSent: PropTypes.func,
};

Form.defaultProps = {
  setIsEmailSent: () => {},
};

export default Form;
