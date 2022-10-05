import React from 'react';
import { ThemeProvider } from 'styled-components';

import Projects from 'components/templates/Projects';
import Section from 'components/core/Section';
import Banner from 'components/templates/Banner';
import Contact from 'components/templates/Contact';
import Footer from 'components/templates/Footer';

import Styled from 'theme.style';
import GlobalStyle from './GlobalStyles';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={Styled.theme}>
      <GlobalStyle />

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
