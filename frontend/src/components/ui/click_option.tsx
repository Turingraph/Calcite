import React, { JSX, useState, useEffect } from "react";
import * as a from "../../type/alias"
import Str_to_h from "../../utils/str_to_h";

//  https://stackoverflow.com/questions/40209352/
//  how-to-specify-optional-default-props-with-typescript-for-stateless-functiona

// https://stackoverflow.com/questions/
// 58114855/handling-select-options-in-react-hooks

/*
import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const App = () => {

  const [addrtype, setAddrtype] = useState("Work")
  const Add = ["Work", "Home", "school"]
  const handleAddrTypeChange = (e) => {setAddrtype(Add[e.target.value])}

  return (

   <><h1>{addrtype}</h1> < select
      onChange={e => handleAddrTypeChange(e)}
      className="browser-default custom-select" >
      {
        Add.map((address, key) => <option key={key}value={key}>{address}</option>)
      }
    </select ></>)


}

render(<App />, document.getElementById('root'));
*/


export default function Click_option(
{
    opt_name = undefined,
    options,
    ss_option
}:{
    opt_name?:a.opt_name
    options:string[]
    ss_option:a.use_state_t<number>
}){
    // https://stackoverflow.com/questions/40676343/
    // typescript-input-onchange-event-target-value
    const handle_event = ((e: React.ChangeEvent<HTMLSelectElement >) => {
        ss_option.setss(+e.target.value)}) as a.handle_event<HTMLSelectElement>
    let jsx_option = options.map((item, index)=>{
        return (<option value={index}>{item}</option>)
    })
    return (<>
        <Str_to_h opt_name={opt_name}/>
        <select value={ss_option.ss} onChange={(e)=>handle_event(e)}>
            {jsx_option}
        </select>
    </>);
}
