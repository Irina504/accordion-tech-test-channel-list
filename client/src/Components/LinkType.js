import React from 'react'
import styled from 'styled-components' 
import LoadingSpinner from './LoadingSpinner'


const LinkType = ({ item, dataStatus }) => {

    if(dataStatus === 'loading') {
        return <LoadingSpinner />
    } 
        return (
            <Wrapper>
                <StyledImg src={item.cover} />
                <Label>{item.description}</Label>
                <Overlay></Overlay>
            </Wrapper>
        ) 

};



const Wrapper = styled.div`
position: relative;
margin: .5em;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
cursor: pointer;    


&:hover div  {
    background: transparent;
    transition: all 0.3s ease-in-out;
    }
`;

const StyledImg = styled.img`
display: flex;
align-self: center;
border-radius: .2em;
width: 10em;
height: 10em;
`;

const Label = styled.h3`
position: absolute;
text-align: center;
font-family: var(--title-font);
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
z-index: 2;

&:hover {
    transition: all 0.3s ease-in-out;
    }
`;

const Overlay = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
height: 100%;
width: 100%;
background: rgb(0, 0, 0);
background: rgba(0, 0, 0, 0.5);
border-radius: .2em;
`;

export default LinkType;
