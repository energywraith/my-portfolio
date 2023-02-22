import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from '@formspree/react';
import { useTranslation } from 'react-i18next';
import handleContactValidation from 'utils/handleContactValidation';
import Loader from 'components/core/Loader';

function ContactForm() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_SPREE_KEY);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contactFormErrors, setContactFormErrors] = useState({
    name: '', email: '', message: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();

    if (handleContactValidation(name, email, message, setContactFormErrors)) {
      const params = {
        from_name: name,
        email,
        message,
      };

      handleSubmit(params);
    }
  };

  if (state.succeeded) {
    return <Styled.Success>Thanks for contacting me :).</Styled.Success>;
  }

  return (
    <Styled.Form onSubmit={onSubmit}>
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
      <Styled.Submit type="submit" disabled={state.submitting}>
        {state.submitting && <Styled.Loader size={20} />}
        <span>{t('contact.fields.submit')}</span>
      </Styled.Submit>
    </Styled.Form>
  );
}

const Styled = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    max-width: 40em;
    height: 100%;

    & input, textarea {
      padding: 0.5em 0;
      font-family: Rubik;
      border-radius: 0;
      font-size: 1em;
      border: 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
      background: transparent;
      color: white;
      outline: none;
      transition: 300ms border-bottom-color ease-out;

      &:focus {
        border-bottom-color: ${({ theme }) => theme.colors.white};
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.laptop}px) {
        max-width: 30em;
        width: 30em;
      }
    }

    & textarea {
      resize: vertical;
      height: 1.4em;
      min-height: 1.4em;
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
      height: 1.3em;
      font-size: 0.8em;
      margin-top: -0.4rem;
      color: ${({ theme }) => theme.colors.error};
    }

    & input, textarea {
      ${({ error, theme }) => error !== '' && `border-bottom: 1px solid ${theme.colors.error}`}
    }
  `,
  Submit: styled.button`
    background: transparent;
    border: 0;
    color: ${(props) => props.theme.colors.lightSecondary};
    border-radius: 4px;
    font-size: 1em;
    padding: 1em 2em;
    font-family: Rubik;
    box-shadow: 0.3px 0.3px 0.3px ${(props) => props.theme.colors.darkGray};
    border: 1px solid ${(props) => props.theme.colors.darkGray};
    transition: all 300ms;
    width: 100%;
    position: relative;
    margin-top: 1rem;
    
    &:disabled { 
      & > span {
        opacity: 0;
      }
    }

    &:not(&:disabled) {
      cursor: pointer;

      &:hover {
        color: white;
        border-color: ${(props) => props.theme.colors.gray};
        box-shadow: 0.3px 0.3px 0.3px ${(props) => props.theme.colors.gray};
      }
    }

    @media (min-width: ${(props) => props.theme.breakpoints.laptop}px) {
      width: fit-content;
    }
  `,
  Loader: styled(Loader)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `,
  Success: styled.div`
    align-self: flex-start;
    margin-top: 1rem;
    font-size: 1.5em;
  `,
};

export default ContactForm;
