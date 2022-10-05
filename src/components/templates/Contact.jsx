import React, { useState } from 'react';
import postmanSvg from 'assets/postman.svg';
import styled from 'styled-components';
import backgroundImage from 'assets/contact-background.webp';
import ContactForm from 'components/templates/ContactForm';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleEmailSend = (isSuccess) => {
    setIsEmailSent(isSuccess);
  };

  return (
    <Styled.Wrapper isEmailSent={isEmailSent}>
      <h3>{t('contact.header')}</h3>
      <h4>{t('contact.description')}</h4>
      {
        !isEmailSent
          ? <ContactForm onEmailSend={handleEmailSend} />
          : (
            <Styled.Success>
              <img src={postmanSvg} alt="Postman is in hurry" />
              {t('contact.successText')}
            </Styled.Success>
          )
      }
    </Styled.Wrapper>
  );
}

const Styled = {
  Wrapper: styled.section`
    position: relative;
    min-height: 30em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1em;
    color: ${({ theme }) => theme.colors.white};
    overflow: hidden;
    padding: 2em 1em;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      padding: 5em 0;
    }

    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: url(${backgroundImage}) center center no-repeat;
      background-size: cover;
      filter: brightness(0.2) blur(1px);
      transform: scale(1.1);
    }

    & > h3 {
      ${({ isEmailSent }) => isEmailSent && 'display: none;'}
      margin: 0;
      font-size: 2em;
      text-align: center;
    }

    & > h4 {
      ${({ isEmailSent }) => isEmailSent && 'display: none;'}
      margin: 0;
      font-size: 1em;
      font-weight: 400;
      text-align: center;
    }

    & form {
      width: 100%;
      padding: 1em;
      box-sizing: border-box;

      & div {
        padding-right: 1em;

        & textarea {
          max-width: 100%;
        }
      }
    }
  `,
  Success: styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
    color: ${({ theme }) => theme.colors.white};
    text-shadow: 1px 2px 2px ${({ theme }) => theme.colors.success}, 3px 3px 2px ${({ theme }) => theme.colors.black};
    text-align: center;
    font-size: 1.5em;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem;

    & > img {
      height: 2em;
      width: 2em;
      filter: drop-shadow(0px 0px 1px ${({ theme }) => theme.colors.success});
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.laptop}px) {
      flex-direction: row;
      padding: 0 5rem;
    }
  `,
};

export default Contact;
