import React from 'react'
import styled from 'styled-components'

import GlobalStyles from './Components/GlobalStyles'
import Header from './Components/Header'
import Accordion from './Components/Accordion'
import Footer from './Components/Footer'

import cover from './images/cover.jpg'



function App() {

  return (
    <div>
        <GlobalStyles/>
        <StyledImg src={cover} alt='cover' />
        <Header/>
        <Accordion/>
        <Footer/>
    </div>
  )
};


const StyledImg = styled.img`
    min-height: 100%; 
    min-width: 1024px;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    opacity: 0.9;
    z-index: -1;

`;

export default App;

