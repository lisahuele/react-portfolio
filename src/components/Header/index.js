import React from 'react';
import Nav from '../Nav';

function Header(props) {

    return (
        <header>
            < Nav 
            homeState={props.homeState}
            setHomeState={props.setHomeState}
            aboutSelected={props.aboutSelected}
            setAboutSelected={props.setAboutSelected}
            contactSelected={props.contactSelected}
            setContactSelected={props.setContactSelected}
            projectSelected={props.projectSelected}
            setProjectSelected={props.setProjectSelected}
            />
        </header>
    )
}

export default Header;