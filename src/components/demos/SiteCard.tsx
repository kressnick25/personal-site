import React from 'react'
import styled from 'styled-components';

interface SiteCardProps {
    img: string;
    link: string;
    name: string;
    details: Array<string>;
}

function SiteCard(props: SiteCardProps){
    const Container = styled.div`
        position: relative;
        text-align: center;
        transition: 0.3s;
        &:hover {
            transform: translateY(-0.4em);
        }
    `;
    const Card = styled.img`
        text-align: center;
        border: 2px solid #49a372;
        width: 80vw;
        max-width: 500px;
        max-height: 300px;
        margin: 2em auto 2em;
        border-top-right-radius: 0.5em;
        border-top-left-radius: 0.5em;
        
        justify-content: center;
        align-items: center;
        display: flex;
    `;

    const Name = styled.h2`
        color: #fffff5;
        background-color: rgba(205,115,43,0.85);
        border-radius: 1em;
        padding: 20px 20px 20px;
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -30%);
        &:hover {
            background-color: rgba(205,115,43,0.98);
        }
    `;

    return (
        <Container>
        <Card src={props.img} alt={props.name + 'site demo screenshot image'}/>
        <a href={props.link}>

            <Name>{props.name}</Name>
            </a>
        </Container>
    )
}

export {
    SiteCard
}