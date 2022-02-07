import React from 'react'
import styled from 'styled-components'

const Footer = () => {

    return (
        <Wrapper>
            Challenge by
            <a
                href="https://www.stingray.com/"
                target="_blank"
                rel="noreferrer"
            > STINGRAY 
            </a> Coded by 
            <a 
                href="https://github.com/Irina504"
                target="_blank"
                rel="noreferrer"
                > Irina Cucereavii
            </a>
        </Wrapper> 

    ) 
};

const Wrapper = styled.div`
width: 70%;
margin: auto;
text-align: center;
margin-bottom: .3em;
padding-bottom: .3em;
font-family: var(--title-font);
font-size: .7em;
font-weight: bolder;
`;

export default Footer;
