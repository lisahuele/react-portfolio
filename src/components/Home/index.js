import React from 'react';

function Home() {
    return (
        <div className="hero-section">
          <p>Lisa Le - Full Stack Developer</p>
          <h1>The devil is in the details,<br/>but the
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            is in the experience.</h1>
            <img className="image" src={require('../../assets/images/Soul.png').default} alt='soul'/>
      </div>
    )
}

export default Home;