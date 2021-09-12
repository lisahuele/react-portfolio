import React from "react";

function Nav() {
    return (
        <>
        <ul >
            <li><a className="scrollWork scrollHit" href="#project">PROJECTS</a></li>
            <li><a className="scrollHit" href="#about">ABOUT</a></li>
            <li><a className="scrollHit" href="Resume/LisaLeResume.pdf" target="_blank">RESUME</a></li>
        </ul>

        <div id="navigation" class="logo">
            <a className="slice" href="/">
                <div className="top"><span>Lisa Le</span></div>
                <div className="bottom"><span>Lisa Le</span></div>
            </a>
        </div>
        </>
    )
}

export default Nav;