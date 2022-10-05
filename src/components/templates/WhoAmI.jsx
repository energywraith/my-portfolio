import React from 'react';
import Typewriter from 'typewriter-effect';
import useMisspell from 'hooks/useMisspell';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

function WhoAmI() {
  const { t } = useTranslation();
  const [misSpelledString, rest] = useMisspell(t('name'));

  return (
    <Styled.Wrapper>
      <Styled.Header
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
      <Styled.Description>{t('description.regular')}</Styled.Description>
    </Styled.Wrapper>
  );
}

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.3em;
    padding: 1em 1em 2em 1em;
    text-align: center;
    align-items: center;
    grid-column: 1/3;
    font-size: 3.5em;

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      padding: 0 0 0 2rem;
      text-align: left;
      align-items: flex-start;
      grid-column: 1;
      font-size: 4em;
    }
  `,
  Header: styled(Typewriter)`
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 0.8em;

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      font-size: 1em;
    }
  `,
  Description: styled.p`
    margin: 0;
    padding: 0;
    font-size: 0.3em;
    font-weight: 100;
    max-width: 50ch;
    letter-spacing: 1px;
  `,
};

export default WhoAmI;
