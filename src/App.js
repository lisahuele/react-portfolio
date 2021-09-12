import React from 'react';
import Header from './components/Header';
import Home from './components/Home'

function App() {
  return (
    <body>
      <Home/>
      <Header/>

      <main>
        -- ABOUT - when selected display more info
        -- PORTFOLIO - when selected, display more info
        -- CONTACT FORM - display if selected
      </main>
    </body>
  );
}

export default App;
