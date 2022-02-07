import React from 'react'
import styled from 'styled-components'
import LoadingSpinner from './LoadingSpinner'

const ChannelType = ({ item, dataStatus }) => {

    if(dataStatus === 'loading') {
        return <LoadingSpinner />
    } 


    return (
        <Wrapper>
            <StyledImg src={item.cover} />
            <Details>
                <Label>{item.label}</Label>
                <Description>{item.description}</Description>
            </Details>
        </Wrapper>
    ) 
};

const Wrapper = styled.div`
display: flex;
padding: 1em;
margin: .5em;
cursor: pointer;

@media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }


&:hover {
    transition: all 0.3s ease-in-out;
    background-color: rgba(255,255,255,0.1);

}

`;

const StyledImg = styled.img`
width: 25%;
height: 25%;
padding: .1em;
border-radius: 3%;
@media (max-width: 600px) {
    width: 100%;
    height: 100%;
    }

`;

const Details = styled.div`
display: flex;
flex-direction: column;
margin-left: 1em;
padding: .1em;
text-align: left;
`;

const Label = styled.h4`
padding-bottom: .5em;
font-family: var(--title-font);
font-size: 1.3em;
@media (max-width: 600px) {
    text-align: center;
    }

`;

const Description = styled.p`
line-height: 1.3;
`;


export default ChannelType;
