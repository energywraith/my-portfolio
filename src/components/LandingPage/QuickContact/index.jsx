import React from 'react';
import { Link } from 'react-scroll';
import github from 'assets/github.svg';
import mail from 'assets/mail.svg';
import { QuickContactList, VerticalLine } from './index.style';

function QuickContact() {
  return (
    <QuickContactList>
      <VerticalLine />
      <li>
        <a href="https://github.com/energywraith" rel="noopener noreferrer">
          <img src={github} alt="github logo" />
        </a>
      </li>
      <li>
        <Link to="Contact" smooth duration={1000} style={{ cursor: 'pointer' }}>
          <img src={mail} alt="mail icon" />
        </Link>
      </li>
      <VerticalLine />
    </QuickContactList>
  );
}

export default QuickContact;
