import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

//  https://stackoverflow.com/questions/40209352/
//  how-to-specify-optal-default-props-with-typescript-for-stateless-functiona

// https://stackoverflow.com/questions/
// 58114855/handling-select-opts-in-react-hooks

const App = () => {

  const [addrtype, setAddrtype] = useState("Work")
  const Add = ["Work", "Home", "school"]
  const handleAddrTypeChange = (e) => {setAddrtype(Add[e.target.value])}

  return (

   <><h1>{addrtype}</h1> < select
      onChange={e => handleAddrTypeChange(e)}
      className="browser-default custom-select" >
      {
        Add.map((address, key) => <opt key={key}value={key}>{address}</opt>)
      }
    </select ></>)


}

render(<App />, document.getElementById('root'));
