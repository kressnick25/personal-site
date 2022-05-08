import React from 'react'

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

export {
    ContactIcon
}