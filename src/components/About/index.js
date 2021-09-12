import React from "react";

function About() {
    return (
        <section class="about">
    <div class="contentLeft">
        <img className="profileimg" src={require('../../assets/images/profile.png').default} alt="profile"/>
    </div>
    
    <div class="contentRight">
        <img className="hello" src={require('../../assets/images/Hello.png').default} alt="hello"/>
        <p className="sub">Developer and UX/UI Designer with a background in digital art and 6 years of retail management experience.</p>
        <p className="quote">As far as I can remember, I have always been a creative soul. Afraid of losing that passion, I opted out of monetizing my work. Instead, I developed skills in retail management and discovered a different passion — data and developing people. Fast forward six years later. It is time for me to expand on skills like: development, training, and assessment, that I have grown in my role as a manager and apply them to my passion for code and design.
        </p>
        <p>I have two loves, data and design. I like asking myself what drives people, what tools do they need, and how can I build those tools for them? Drawing from my management experience I can better address questions like what drives a company, what needs does a team has to address, and what skills can be supported by smart information design? I see a direct application of the skill set I produced while advancing through my retail to a career to the work required in code and design. Both are about tailoring and communicating information to enable other people to succeed.
        </p> 
        <a class="link" href="#resume">View Resume</a> 
    </div>
</section>
    )
}

export default About;