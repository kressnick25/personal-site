import React from 'react';
import github from '../images/icons/github.png'
import linkedin from '../images/icons/linkedin.png';
import email from '../images/icons/gmail.png';
export function ContactMe() {
    return (
        <div className={'contact'}>
            <div className={'contactIcons'}>
                <ContactIcon
                    icon={github}
                    serviceName={'GitHub'}
                    link={'https://github.com/kressnick25/'}
                />
                <ContactIcon
                    icon={linkedin}
                    serviceName={'LinkedIn'}
                    link={'https://www.linkedin.com/in/nicholas-kress-651b74161/'}
                />
                <ContactIcon
                    icon={email}
                    serviceName={'Email'}
                    //TODO change to dev email
                    link={'mailto: kressnick25@gmail.com'}
                />
            </div>
        </div>
    )
}

interface ContactIconProps {
    link: string;
    icon: string;
    serviceName: string;
}

const ContactIcon = (props: ContactIconProps) => {
    return (
        <a href={props.link}>
            <img src={props.icon} alt={props.serviceName + 'logo icon'} /><br/>
        </a>
    )
};

export default ContactMe;