import styled from 'styled-components';
import backgroundImage from 'assets/contact-background.webp';

export const ContactFormContainer = styled.section`
  position: relative;
  min-height: 30em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1em;
  padding: 5em 0;
  color: ${(props) => props.theme.colors.white};

  overflow: hidden;
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
    ${(props) => props.isEmailSent && 'display: none;'}
    margin: 0;
    font-size: 2em;
    text-align: center;
  }

  & > h4 {
    ${(props) => props.isEmailSent && 'display: none;'}
    margin: 0;
    font-size: 1em;
    font-weight: 400;
    text-align: center;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    padding: 2em 1em;

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
  }
`;

export const SuccessInformation = styled.span`
  display: flex;
  align-items: center;
  gap: 1em;
  color: ${(props) => props.theme.colors.white};
  text-shadow: 1px 2px 2px ${(props) => props.theme.colors.success}, 3px 3px 2px ${(props) => props.theme.colors.black};
  text-align: center;
  font-size: 1.5em;
  padding: 0 5rem;

  & > img {
    height: 2em;
    width: 2em;
    filter: drop-shadow(0px 0px 1px ${(props) => props.theme.colors.success});
  }

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}px) {
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem;
  }
`;
