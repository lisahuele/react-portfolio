import React, {useState} from 'react';
import Header from './components/Header';
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  const [homeState, setHomeState] = useState(true);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [projectSelected, setProjectSelected] = useState(false);


  return (
    <body>
      {homeState && <Home 
        homeState={homeState}
        setHomeState={setHomeState}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        projectSelected={projectSelected}
        setProjectSelected={setProjectSelected}
      />}

      {!homeState && <Header 
        homeState={homeState}
        setHomeState={setHomeState}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        projectSelected={projectSelected}
        setProjectSelected={setProjectSelected}
        />}

      <main>
      {!homeState && !projectSelected && !contactSelected && <About/>}
      {!homeState && !aboutSelected && !contactSelected && <Project/>}
      {!homeState && !aboutSelected && !projectSelected && <Contact/>}
      </main>

      <Footer/>
    </body>
  );
}

export default App;
