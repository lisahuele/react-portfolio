import React from "react";

function HomeAbout() {
    return (
        <section id="profile">

            <div className="aboutme">
                    <h2>Creating a good product experience is like telling a good story.</h2>
                    <p>We have to pay attention to the details, but not lose sight of the power of the entire narrative. Great experience design takes into account all of the touch-points one has with a product or service, intertwining a story together so compelling that it demands to be shared and retold. Through the practice of holistic, thoughtful UX design and the execution of beautiful UI elements, together we can create soulful solutions that will tell your story in a new way.</p>
                    <div className="aboutme-child">
                        <a className="link" href="#about">More About Me</a>
                        <a className="link" href="#project">My Projects</a>
                    </div>
            </div>
            <div className="profileimg">
                <img src={require('../../assets/images/profile.png').default} alt="profile" />
            </div>
        </section>
    )
}

export default HomeAbout;