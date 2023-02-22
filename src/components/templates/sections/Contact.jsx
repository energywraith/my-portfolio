import React from 'react';
import ContactPng from 'assets/saintjulianxv.png';
import styled from 'styled-components';
import ContactForm from 'components/templates/ContactForm';
import { useTranslation } from 'react-i18next';
import Container from 'components/core/Container';

import { InView } from 'react-intersection-observer';
import Header from 'components/core/Header';

function Contact() {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper>
      <Styled.ImageWrapper>
        <img src={ContactPng} alt="@saintjulianxv" />
      </Styled.ImageWrapper>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <Header
            inView={inView}
            ref={ref}
          >
            {t('contact.header')}
          </Header>
        )}
      </InView>
      <h4>{t('contact.description')}</h4>
      <ContactForm />
    </Styled.Wrapper>
  );
}

const Styled = {
  Wrapper: styled(Container)`
    position: relative;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-rows: auto auto 1fr;
    gap: 1rem 2rem;
    color: ${({ theme }) => theme.colors.white};
    padding-bottom: 4rem;
    min-height: 24rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      grid-template-columns: auto 1fr;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.laptop}px) {
      column-gap: 4em;
    }

    & > h3 {
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin: 0;
        font-size: 1.7em;
        line-height: 1.4em;
        text-transform: uppercase;
        height: 1.2em;
        margin-top: 0.6rem;
      }
    }

    & > h4 {
      margin: 0;
      font-size: 1em;
      font-weight: 400;
      max-width: 80ch;
      color: ${(props) => props.theme.colors.lightSecondary};
      line-height: 1.8em;
      margin-top: 0.5rem;
    }

    & form {
      width: 100%;
      box-sizing: border-box;

      & > div {
        padding-right: 1em;

        & textarea {
          max-width: 100%;
        }
      }
    }
  `,
  ImageWrapper: styled.div`
    grid-row: 1/4;
    grid-column: 1;
    max-width: 20rem;
    z-index: ${(props) => props.theme.layers.background};
    display: none;
    
    & > img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      display: block;
    }
  `,
};

export default Contact;
