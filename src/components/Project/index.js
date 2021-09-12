import React, {useState} from "react";

function Project() {
    const [projects] = useState([
        {
            title: 'Waste Management',
            description: 'The application allows the user to store, access, and save quantitative data regarding their product expenses. Business owners can track their restaurant’s inventory with business-specific accounting which ultimately improves the order accuracy and streamline of their budget.',
            role: ['Interactive Design', 'Full Stack Development'],
            github: ['GitHub Repo', 'https://github.com/Group05-Project02/waste-management.git'],
            deploy: ['Heroku Deployment', 'https://waste-management-project2.herokuapp.com/'],
            image: 'wastemanagement'
        },
        {
            title: 'Coca-Cola Company',
            description: '3-week long research into a website redesign concept focused on aligning the design towards their brand identity and market objectives.',
            role: ['User Research', 'UI Design', 'Front-End'],
            github: ['GitHub Repo', 'https://github.com/cocacolay/coca-colacompany.git'],
            deploy: ['Deployment', 'https://cocacolay.github.io/coca-colacompany/'],
            image: 'cocacola'
        },
        {
            title: 'Music Visualizer',
            description: 'A music visualizer synced with music requested by the user and streamed from a server that contains the music (i.e., Soundcloud). There is also a Spotify search bar for streaming audio.',
            role: ['Interactive Design', 'Front-End'],
            github: ['GitHub Repo', 'https://github.com/uotgroup3/beats-and-bops'],
            deploy: ['Deployment', 'https://uotgroup3.github.io/beats-and-bops/'],
            image: 'musicvisualizer'
        }
    ]);

    return (
        <section id="work">
            <div class="work-title">
                <h3>Featured Projects</h3>
            </div>

            {projects.map((project) => (
                <div class="work-container" key={project.title}> 
                    <div class="content-child">
                        <h6> {project.title} </h6>
                        <p> {project.description} </p>
                        <div class="role-container">
                            <div class="role">{project.role[0]}</div>
                            <div class="role">{project.role[1]}</div>
                        </div>
                        <div class="aboutme-child">
                            <a className="link" href={project.github[1]}>{project.github[0]}</a>
                            <a className="link" href={project.deploy[1]}>{project.deploy[0]}</a>
                        </div>
                    </div>
                
                    <div class="work-child">
                        <a href={project.deploy[1]}><img className="work-img" src={require(`../../assets/images/${project.image}.png`).default} alt={project.title}/></a>
                    </div>
                </div>
            ))}
    </section>
    )
}

export default Project;