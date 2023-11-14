import React from 'react';
import { ThemeProvider } from 'styled-components';

import Banner from 'components/templates/Banner';
import Projects from 'components/templates/Projects';
import Designs from 'components/templates/Designs';
import Contact from 'components/templates/Contact';
import Footer from 'components/templates/Footer';
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
      <Section id="Designs">
        <Designs />
      </Section>
      <Section id="Contact">
        <Contact />
      </Section>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
