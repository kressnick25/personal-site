import React, {useEffect, useState} from 'react';
import ContactMe from "./ContactMe";
import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';

export function AboutMe (props) {
    // animations
    const fadeAnimation = keyframes`${fadeInUp}`;
    const FadeDiv = styled.div`
      animation: 1s ${fadeAnimation};
    `;

    return (
        <FadeDiv>
        <div className={'Me'}>
            <div className={"meContent"}>

                <h1>Nick Kress</h1>

                <Details/>
                <hr/>
                <ContactMe/>
            </div>
            <svg viewBox="0 0 1792 1792" id={"moreArrow"} onClick={e => window.scrollTo({left: 0, top:window.innerHeight, behavior:"smooth"})}>
                <path
                    d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10
                        23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
                />
            </svg>
        </div>
        </FadeDiv>
    )
}

function Details (props) {
    const [user, setUser] = useState(false);
    // get user data
    useEffect(() => {
        fetch("https://api.github.com/users/kressnick25")
            .then((res) => {
                if (res.ok) return res.json();
                throw new Error("failed to fetch");
            })
            .then(res => setUser(res))
            .catch(err => console.log(err.message));
    }, []);

    if (!user) return <p>Loading...</p>
    return <p>{user.bio} at {user.company}</p>
}

export default AboutMe;