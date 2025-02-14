import React, { useState } from 'react';
import './App.css';
import State_button from './components/button/click_button';
import Page from './page';
import Test from './test';

function App() {
  const [SS_Num, setSS_Num] = useState<number>(0);
  return (
    <Test/>
  );
}

export default App;
