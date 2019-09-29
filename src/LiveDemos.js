import React from 'react';
import qld_crimes from './_img/screens/qld_crimes_db.png';
import adnat from './_img/screens/adnat.png';
import trailseeker from './_img/screens/trail_seeker.png';
import styled from 'styled-components';

export function LiveDemos(props) {
    return (
        <div className={'liveDemos'}>
            <h2>Live demos of my work</h2>
            <hr/>
            <SiteCard
                name={'Queensland Criminal Offences Viewer'}
                details={[  "Displays tables, graphs and mapping of data from QLD Gov. crimes dataset from 2000-2019",
                            "ReactJS frontend",
                            "NodeJS + Express backend",
                            "MySQL DB",
                            "Backend hosted on Amazon EC2",
                ]}
                img={qld_crimes}
                link={"https://kressnick25.github.io/cab230/"}
            />
            <SiteCard
                name={'Tanda React Challenge'}
                details={[]}
                img={adnat}
                link={"https://kressnick25.github.io/TandaHQ-React-Challenge/"}
            />
            <SiteCard
                name={'TrailSeeker'}
                details={[]}
                img={trailseeker}
                link={"https://kresslab.org/trailseeker"}
            />

        </div>
    )
}

function SiteCard(props){
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
        <Card src={props.img}/>
        <a href={props.link}>

            <Name>{props.name}</Name>
            </a>
        </Container>
    )
};

export default LiveDemos;