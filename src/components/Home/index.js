import React from 'react';
import Header from '../Header';
import HomeAbout from '../HomeAbout';

function Home(props) {
    return (
    <div>
        <div className="hero-background">
            <div className="hero-text">
                <p>Lisa Le - Full Stack Developer</p>
                <h1>The devil is in the details,<br/>but the
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    is in the experience.</h1>
                    <img className="soul" src={require('../../assets/images/Soul.png').default} alt='soul'/>
            </div>
        <Header 
            homeState={props.homeState}
            setHomeState={props.setHomeState}
            aboutSelected={props.aboutSelected}
            setAboutSelected={props.setAboutSelected}
            contactSelected={props.contactSelected}
            setContactSelected={props.setContactSelected}
            projectSelected={props.projectSelected}
            setProjectSelected={props.setProjectSelected}
        />
        </div>
        <HomeAbout/>
    </div>
    )
}

export default Home;