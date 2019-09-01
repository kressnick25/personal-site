import React, {useEffect, useState} from 'react';
import ContactMe from "./ContactMe";

export function AboutMe (props) {
    const [user, setUser] = useState(false);

    useEffect(() => {
        fetch("https://api.github.com/users/kressnick25")
            .then((res) => {
                if (res.ok) return res.json();
                throw new Error("failed to fetch");
            })
            .then(res => setUser(res))
            .catch(err => console.log(err.message));
    }, []);

    return (
        <div className={'Me'}>
            <div className={"meContent"}>
                <h1>Nick Kress</h1>
                {user ?
                    <p>{user.bio} at {user.company}</p> :
                    <p>Loading</p> // TODO loader here
                }

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
    )
}

export default AboutMe;