import React from 'react'
import styled from 'styled-components'

const Header = () => {

  return (
    <Title>Stingray Music Categories</Title>
  ) 
};

const Title = styled.h1`
margin-top: 1em;
margin-bottom: 1em;
text-align: center;
color: var(--cyprus);
font-size: 2.5em;
font-family: var(--title-font);

background: linear-gradient(315deg, rgba(0,51,51,1) 0%, rgba(102,102,204,1) 46%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

export default Header;
