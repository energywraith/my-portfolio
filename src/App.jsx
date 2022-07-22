import React from 'react';

import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import './App.css';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <div>
      <GlobalStyle />

      <LandingPage id="Home" />
      <Projects id="Projects" />
      <ContactForm id="Contact" />
      <Footer />
    </div>
  );
}

export default App;
