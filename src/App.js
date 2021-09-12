import React, {useState} from 'react';
import Header from './components/Header';
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  const [homeState] = useState(true);



  return (
    <body>
      <Home/>
      {!homeState && <Header/>}

      <main>
        -- PORTFOLIO - when selected, display more info
        -- CONTACT FORM - display if selected
      </main>

      <Footer/>
    </body>
  );
}

export default App;
