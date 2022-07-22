import React from 'react';
import mailIcon from '../../LandingPage/images/mail.svg';
import githubIcon from '../../LandingPage/images/github.svg';
import {
  Lists, List, ListHeader, LinkStyled,
} from './index.style';

function Contact() {
  return (
    <Lists>
      <List>
        <ListHeader> Quick Links </ListHeader>
        <li>
          <LinkStyled to="Home" smooth duration={1000}>
            Home
          </LinkStyled>
        </li>
        <li>
          <LinkStyled to="Projects" smooth duration={500}>
            Projects
          </LinkStyled>
        </li>
        <li>
          <LinkStyled to="Contact" smooth duration={500}>
            Contact Form
          </LinkStyled>
        </li>
      </List>
      <List>
        <ListHeader> Contact </ListHeader>
        <li>
          <img src={mailIcon} alt="mail" />
          jalochadev@gmail.com
        </li>
        <li>
          <a href="https://github.com/energywraith" rel="noopener noreferrer">
            <img src={githubIcon} alt="github" />
            energywraith
          </a>
        </li>
      </List>
    </Lists>
  );
}

export default Contact;