import React, { useEffect, useState } from 'react'
import { BsChevronCompactDown } from 'react-icons/bs'
import { BsChevronCompactRight } from 'react-icons/bs'

import ChannelType from './ChannelType'
import LinkType from './LinkType'

import styled from 'styled-components'


const Accordion = () => {

    const [data, setData] = useState([])
    const [selected, setSelected] = useState(null)
    const [dataStatus, setDataStatus] = useState('loading')


    useEffect(() => {

        setDataStatus('loading')
        fetch("/api/swimlanes")
        .then((res) => res.json())
        .then((data) => {

        setData(data)
        setDataStatus('resolved')
        })
        .catch((err) => {
        console.error("Error", err)
        })
    }, []);


    const toggle = (index) => {

        if(selected === index) {
        return setSelected(null)
        }
        setSelected(index)
    };

    
    return (
        <Wrapper>
            {data.map((data, index) => {
                return (
                    <>
                    <CategoryName onClick={() => toggle(index)} key={index}>
                        <h3>{data.description}</h3>
                        <span>{ selected === index ?
                        <BsChevronCompactRight/> : 
                        <BsChevronCompactDown />
                        }
                        </span>
                    </CategoryName>
                    <ListWrapper>
                    {selected === index && data.type === "CHANNEL" && 
                    data.swimlaneItems.map((item) => {
                        return (
                            <ChannelType 
                            item={item} 
                            key={item.id} 
                            dataStatus={dataStatus} 
                            />
                        )
                    })}
                    </ListWrapper>
                    <GridWrapper>
                    {selected === index && data.type === "LINK" && 
                    data.swimlaneItems.map((item) => {
                        return (
                            <LinkType 
                            item={item} 
                            key={item.id}
                            dataStatus={dataStatus} 
                            />
                        )
                    })}
                    </GridWrapper>
                    </>
                )
            })}
        </Wrapper>
    )
};

    const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;
    margin: auto;
    overflow: hidden;
    `;


    const CategoryName = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1.2em;
    color: var(--coastal-breeze);
    font-family: var(--title-font);
    font-weight: 600;
    box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;
    cursor: pointer;

    &:hover {
    color: var(--slate-blue);
    background: rgb(255,0,153);
    background: linear-gradient(241deg, rgba(255,0,153,1) 0%, rgba(255,51,114,0.9028653697807247) 35%, rgba(0,51,51,1) 76%);
    transition: all .3s ease-in-out;
    }

    &::after span {
        transition: transform .3s ease-in-out; 
    }
    `;

    const ListWrapper = styled.div`
    padding: .3em;
    margin-top: 2em;
    `;


    const GridWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: .5em; 
    `;


export default Accordion;
