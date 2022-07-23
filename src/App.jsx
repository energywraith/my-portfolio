import React from 'react';
import { ThemeProvider } from 'styled-components';

import Section from 'components/Section';
import LandingPage from 'components/LandingPage';
import Projects from 'components/Projects';
import ContactForm from 'components/ContactForm';
import Footer from 'components/Footer';

import { theme } from 'theme.style';
import GlobalStyle from './GlobalStyles';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Section id="Home">
        <LandingPage />
      </Section>
      <Section id="Projects">
        <Projects />
      </Section>
      <Section id="Contact">
        <ContactForm />
      </Section>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
