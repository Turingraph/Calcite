import React, { useState } from 'react';
import './App.css';
import State_button from './components/button/click_button';

function App() {
  const [SS_Num, setSS_Num] = useState<number>(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{SS_Num}</h1>
        <State_button title = {"21"} update_Var={21} setSS_Var={setSS_Num}/>
      </header>
    </div>
  );
}

export default App;
