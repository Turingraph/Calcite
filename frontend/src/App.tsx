import React, { useState } from 'react';
import './App.css';
import State_button from './components/button/click_button';
import Page from './page';

function App() {
  const [SS_Num, setSS_Num] = useState<number>(0);
  return (
    <Page/>
  );
}

export default App;
