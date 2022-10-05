import React, { useState } from 'react';
import emailjs, { init } from 'emailjs-com';
import styled from 'styled-components';
import handleContactValidation from 'utils/handleContactValidation';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function ContactForm({ onEmailSend }) {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contactFormErrors, setContactFormErrors] = useState({
    name: '', email: '', message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (handleContactValidation(name, email, message, setContactFormErrors)) {
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
          onEmailSend(true);
        }, () => {
          // console.log('FAILED...', error);
        });
    }
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.InputGroup error={contactFormErrors.name}>
        <input
          type="text"
          placeholder={t('contact.fields.name')}
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <span>
          {contactFormErrors.name}
        </span>
      </Styled.InputGroup>
      <Styled.InputGroup error={contactFormErrors.email}>
        <input
          type="text"
          placeholder={t('contact.fields.email')}
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <span>
          {contactFormErrors.email}
        </span>
      </Styled.InputGroup>
      <Styled.InputGroup error={contactFormErrors.message}>
        <textarea
          placeholder={t('contact.fields.body')}
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        />
        <span>
          {contactFormErrors.message}
        </span>
      </Styled.InputGroup>
      <Styled.Submit type="submit">
        {t('contact.fields.submit')}
      </Styled.Submit>
    </Styled.Form>
  );
}

const Styled = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1em;
    row-gap: 1em;
    width: 50vw;
    max-width: 40em;

    & input, textarea {
      padding: 0.5em;
      font-family: Rubik;
      border-radius: 4px;
      box-shadow: 1px 1px 1px ${(props) => props.theme.colors.darkGray};
      font-size: 1em;
      border: 0;
      width: 100%;
    }

    & textarea {
      min-width: 100%;
      max-width: 40em;
      min-height: 10em;
      max-height: 15em;
    }
  `,
  InputGroup: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;

    & span {
      align-self: flex-start;
      height: 1em;
    }

    & input, textarea {
      ${({ error, theme }) => error !== '' && `border: 1px solid ${theme.colors.error}`}
    }
  `,
  Submit: styled.button`
    background: ${(props) => props.theme.colors.white};
    border: 0;
    color: ${(props) => props.theme.colors.black};
    border-radius: 4px;
    font-size: 1em;
    cursor: pointer;
    padding: 1em 2em;
    margin-top: 1em;
    font-family: Rubik;
    box-shadow: 2px 2px 1px ${(props) => props.theme.colors.darkGray};
    transition: 100ms;

    &:hover {
      box-shadow: 0px 0px 3px ${(props) => props.theme.colors.black}, 3px 3px 2px ${(props) => props.theme.colors.lightBlueSecondary};
    }
  `,
};

ContactForm.propTypes = {
  onEmailSend: PropTypes.func.isRequired,
};

export default ContactForm;
