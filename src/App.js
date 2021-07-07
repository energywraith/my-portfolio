import React from 'react'
import styled from 'styled-components'

import LandingPage from './components/LandingPage'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

import './App.css'
import GlobalStyle from './GlobalStyles'

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />

      <LandingPage id="Home" />
      <Projects id="Projects" />
      <ContactForm id="Contact" />
      <Footer />
    </AppContainer>
  )
}

const AppContainer = styled.div``

export default App
