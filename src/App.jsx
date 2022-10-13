import React from 'react';
import { ThemeProvider } from 'styled-components';

import Projects from 'components/templates/sections/Projects';
import Banner from 'components/templates/sections/Banner';
import Contact from 'components/templates/sections/Contact';
import Footer from 'components/templates/sections/Footer';
import Section from 'components/core/Section';
import MouseTrail from 'components/core/MouseTrail';

import Styled from 'theme.style';
import GlobalStyle from './GlobalStyles';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={Styled.theme}>
      <GlobalStyle />
      <MouseTrail />

      <Section id="Home">
        <Banner />
      </Section>
      <Section id="Projects">
        <Projects />
      </Section>
      <Section id="Contact">
        <Contact />
      </Section>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
