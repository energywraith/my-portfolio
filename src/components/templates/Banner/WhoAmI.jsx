import React from 'react';
import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import useMisspell from 'hooks/useMisspell';

function WhoAmI() {
  const { t } = useTranslation();
  const [misSpelledString, rest] = useMisspell(t('name'));

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(80)
              .typeString(misSpelledString)
              .pauseFor(100)
              .deleteChars(2)
              .typeString(rest)
              .pauseFor(1000)
              .callFunction(
                ({ elements }) => {
                  const { cursor } = elements;
                  cursor.style.display = 'none';
                },
              )
              .start();
          }}
        />
      </Styled.Header>
      <Styled.Description>{t('description.regular')}</Styled.Description>
    </Styled.Wrapper>
  );
}

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.3em;
    grid-column: 1/3;
    font-size: 3.5em;
    color: ${({ theme }) => theme.colors.secondary};

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      padding: 0 0 0 2rem;
      text-align: left;
      grid-column: 1;
      font-size: 4em;
    }
  `,
  Header: styled.h3`
    font-size: 0.8em;
    font-family: 'Poppins';
    margin: 0;
    line-height: 1.2em;
    
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      line-height: 1.2em;
      font-size: 1.4em;
    }
  `,
  Description: styled.p`
    margin: 0;
    padding: 0;
    font-size: 0.3em;
    letter-spacing: 1px;
    max-width: 80%;
    line-height: 1.5em;

    @media (min-width: ${(props) => props.theme.breakpoints.laptop}px) {
      max-width: 60%;
    }
  `,
};

export default WhoAmI;
