import styled from 'styled-components';

export const FormContainer = styled.form`
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
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;

  & span {
    align-self: flex-start;
    height: 1em;
  }

  & input, textarea {
    ${(props) => props.error !== '' && `border: 1px solid ${props.theme.colors.error}`}
  }
`;

export const SubmitButton = styled.button`
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
`;
