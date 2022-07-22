import React from 'react';
import Contact from './Contact';
import { FooterContainer, About, Copyright } from './index.style';

function Footer() {
  return (
    <FooterContainer className="rwd-container">
      <About>
        <h3> Adam Jałocha </h3>
        <p>
          I'm not good at self-descriptions, so I thought that I could give you the
          story of how I got interested in website coding - in a nutshell :P.
        </p>
        <p>
          I first encountered web technologies in technical school, and I found it really fun,
          even though the methods were really provisional :D. After having some fun with website
          creation, I have decided it is something I would like to do professionally,
          aaaand here I am.
        </p>
      </About>
      <Contact />
      <Copyright> © 2022 Adam Jałocha </Copyright>
    </FooterContainer>
  );
}

export default Footer;
