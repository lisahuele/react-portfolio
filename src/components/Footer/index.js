import React from "react";

function Footer() {
    return (
        <footer>
            <div class="footer-container">
                <div class="socials">
                    <a href="https://www.linkedin.com/in/lisahuelee/"><img src={require('../../assets/images/LinkedIn-Logo.png').default} alt="LinkedIn" /></a>
                    <a href="https://github.com/lisahuele"><img src={require('../../assets/images/GitHub-Logo.png').default} alt="GitHub" /></a>
                </div>
                <p class="copyright">Copyright © 2021 Lisa Le. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;