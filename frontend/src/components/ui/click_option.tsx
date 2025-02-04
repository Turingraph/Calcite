import React, { JSX, useState, useEffect } from "react";
import * as a from "../../type/alias"
import { input_option_t } from "../../type/input";
import Str_to_h from "../../utils/str_to_h";

//  https://stackoverflow.com/questions/40209352/
//  how-to-specify-optional-default-props-with-typescript-for-stateless-functiona

/*

import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const App = () => {

  const [addrtype, setAddrtype] = useState("Work")
  const Add = ["Work", "Home", "Zoo"]
  const handleAddrTypeChange = (e) => {setAddrtype(Add[e.target.value])}

  return (
    <>
    <h1>{addrtype}</h1>
    < select
      onChange={e => handleAddrTypeChange(e)}
      className="browser-default custom-select" >
      {
        Add.map((address, key) => <option key={key}value={key}>{address}</option>)
      }
    </select >
    </>)


}

render(<App />, document.getElementById('root'));

// https://stackoverflow.com/questions/58114855
// /handling-select-options-in-react-hooks

*/

export default function Click_option(
{
    opt_name = undefined,
    options,
    ptr_select_option
}:{
    opt_name?:a.opt_name
    options:string[]
    ptr_select_option:a.value_t<number>
}){
    const [ss_select_opt, setss_select_opt] = useState<number>(ptr_select_option.value)
    useEffect(()=>{
        // https://stackoverflow.com/questions/42055039
        // /typescript-make-variable-act-as-pointer-to-another-variable
        ptr_select_option = {value:ss_select_opt}
    },[ss_select_opt])
    const handle_event = (e:number) => {setss_select_opt(e)};
    let jsx_options = options.map((i,value)=>{
        return (<option value={value}>{i}</option>)
    })
    return (<>
        <Str_to_h opt_name={opt_name}/>
        <select value={ptr_select_option.value} 
        onChange={(e)=>handle_event(+e.target.value)}>
            {jsx_options}
        </select>
    </>);
}
