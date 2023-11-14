import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import Line from 'components/core/Line';
import LinkedInSVG from 'assets/linkedin.svg';
import GithubSVG from 'assets/github.svg';
import MailSVG from 'assets/mail.svg';

function QuickContact() {
  return (
    <Styled.List>
      <Line />
      <li>
        <a href="https://github.com/energywraith" rel="noopener noreferrer">
          <img src={GithubSVG} alt="github logo" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/adam-jalocha/" rel="noopener noreferrer">
          <img src={LinkedInSVG} alt="linkedin logo" />
        </a>
      </li>
      <li>
        <Styled.Link to="Contact" smooth duration={1000}>
          <img src={MailSVG} alt="mail icon" />
        </Styled.Link>
      </li>
      <Line />
    </Styled.List>
  );
}

const Styled = {
  List: styled.ul`
    padding-bottom: 5rem;
    grid-column: 2;
    grid-row: 2/4;
    flex-direction: column;
    align-items: center;
    row-gap: 1em;
    display: none;
    font-size: 1.1rem;
    margin-right: -1rem;

    & li a {
      display: inline-block;
      padding: 1em;
      width: 2em;
      height: 2em;
  
      &:hover img {
        filter: invert(1) brightness(1);
      }
    }
  
    & img {
      filter: invert(1) brightness(0.8);
      width: 100%;
      height: 100%;
    }
  
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      display: flex;
    }
  `,
  Link: styled(Link)`
    cursor: pointer;
  `,
};

export default QuickContact;
