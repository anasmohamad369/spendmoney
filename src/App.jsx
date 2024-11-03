import React from 'react';
import { GameDisplay } from './GameDisplay';
import './App.css'
import { Head } from './Head';
import { Footer } from './Footer';
function App() {
  return (
    <div id='main'>
    <Head/>
      <GameDisplay/>
        <Footer/>
    </div>

  );
}

export default App;
