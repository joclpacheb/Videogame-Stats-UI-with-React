//Stats UI
// This small project was created in preparation (and as a practice) for a coding interview as an UI engineer for a games studio.
// The interview was held on Nov 15th.
// Tools: It was created using React JSX, CSS and Vite.
// Goal: Implement visual UIUX design (and basic functionality) for a stylized Enemy/Player status bar.
// Developed By Jose Luis Pacheco B.
// Github: https://github.com/joclpacheb
// Generalist Games Portfolio Website: https://jose-luis-gamedev.vercel.app/
// Contact: https://www.linkedin.com/in/jose-luis-pacheco-boscan/


import { useState } from 'react';
import './App.css';

import StatsControls from './components/statsControls/StatsControls'; // Adjust the path as necessary
import StatsContainer from './components/statsContainer/StatsContainer';


function App() {
  //Initial values 
  const [username, setUsername] = useState('username'); //Player Username
  const [level, setLevel] = useState(2); // Player Level
  const [hp, setHp] = useState(75); // HP 
  const [mp, setMp] = useState(50); // MP 
  const maxHP = 400; // Maximum HP 

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleLevelChange = (e) => {
    setLevel(Number(e.target.value));
  };

  const handleHpChange = (e) => {
    setHp(Number(e.target.value));
  };

  const handleMpChange = (e) => {
    setMp(Number(e.target.value));
  };

  return (
    <div className="app">
      <h1 className="header">Stats UI with React.js</h1>
      <p className="description">Created as a front-end coding interview practice for games UI </p>
      <div className="main-app-container">
        <div className="box left-column">
          <h2 className="username">{username}</h2>

          <StatsContainer hp={hp} mp={mp} level={level} />
        </div>
        <div className="box right-column">
          <StatsControls
            level={level}
            hp={hp}
            maxHP={maxHP}
            currentHP={hp}
            mp={mp}
            handleUsernameChange={handleUsernameChange}
            handleLevelChange={handleLevelChange}
            handleHpChange={handleHpChange}
            handleMpChange={handleMpChange}
          />
        </div>
      </div>

    </div>
  );
}

export default App;