import React from 'react';
import qld_crimes from '../images/screens/qld_crimes_db.png';
import adnat from '../images/screens/adnat.png';
import trailseeker from '../images/screens/trail_seeker.png';

import { SiteCard } from './SiteCard';

const LiveDemos = () => {
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

export { 
    LiveDemos
}
    