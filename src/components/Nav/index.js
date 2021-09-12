import React from "react";

function Nav(props) {
    const {
        homeState, 
        setHomeState,
        aboutSelected, 
        setAboutSelected,
        contactSelected,
        setContactSelected,
        projectSelected,
        setProjectSelected
     } = props;

    return (
        <>
        <ul>
            <li>
                <a href="#project" 
                    onClick={() => {
                        setHomeState(false)
                        setAboutSelected(false);
                        setContactSelected(false);
                        setProjectSelected(true);
                    }} 
                    className={`
                        ${!homeState && 'nav-secondary'}
                        ${projectSelected && 'navActive'}    
                    `}>
                    PROJECTS
                </a>
            </li>
            <li>
                <a href="#about" 
                    onClick = {() => {
                        setHomeState(false)
                        setAboutSelected(true);
                        setContactSelected(false);
                        setProjectSelected(false);
                    }} 
                    className={`
                        ${!homeState && 'nav-secondary'}
                        ${aboutSelected && 'navActive'}
                    `}> ABOUT
                </a>
            </li>
            <li>
                <a href="#contact"
                    onClick = {() => {
                        setHomeState(false)
                        setAboutSelected(false);
                        setContactSelected(true);
                        setProjectSelected(false);
                    }} 
                    className={`
                    ${!homeState && 'nav-secondary'}
                    ${contactSelected && 'navActive'}
                `}>CONTACT
                </a>
            </li>
            <li>
                <a href="Resume/LisaLeResume.pdf" target="_blank" className={!homeState && 'nav-secondary'}>RESUME</a>
            </li>
        </ul>

        <div id="navigation" class="logo">
            <a className={`slice ${!homeState && 'slice-blk'}`}
                href="/"
                onClick={()=> setHomeState(true)}
                >
                <div className="top"><span>Lisa Le</span></div>
                <div className="bottom"><span>Lisa Le</span></div>
            </a>
        </div>
        </>
    )
}

export default Nav;