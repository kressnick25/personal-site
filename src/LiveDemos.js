import React, {useState} from 'react';
import qld_crimes from './_img/screens/qld_crimes_db.png'

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
        </div>
    )
}

function SiteCard(props){
    //const [view, setView] = useState(false);
    return (
        <a href={props.link}>
            <div className={'siteCard'}>
                <h3>{props.name}</h3>
                <img src={props.img} alt={props.name + ' site screenshot'} />
                {/*
                <ul>
                    {props.details.map(item => <li>{item}</li>)}
                </ul>*/}
            </div>
        </a>
    )
};

export default LiveDemos;