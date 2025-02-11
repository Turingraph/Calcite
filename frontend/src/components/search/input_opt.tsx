import React, {useState} from "react";
import * as a from "../../type/alias"
import {Str_to_h} from "../../utils/convert";
import { opt_mode_t, input_opt_t } from "../../type/input";
import Search_bar from "./search_bar";

//  https://stackoverflow.com/questions/40209352/
//  how-to-specify-optal-default-props-with-typescript-for-stateless-functiona

// https://stackoverflow.com/questions/
// 58114855/handling-select-opts-in-react-hooks

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
        Add.map((address, key) => <opt key={key}value={key}>{address}</opt>)
      }
    </select ></>)


}

render(<App />, document.getElementById('root'));
*/


export default function Input_opt(
{
    opt_name = undefined,
    available_opts,
    ss_mode,
    is_search_bar = false
}:input_opt_t){
    const [ss_show_opts, setss_show_opts] = useState<(opt_mode_t|undefined)[]>(()=>{
        return available_opts.map((item, index)=>{ return {name:item as a.name, index:index}})
    })
    // https://stackoverflow.com/questions/40676343/
    // typescript-input-onchange-event-target-value
    const handle_event = ((e: React.ChangeEvent<HTMLSelectElement >) => {
        ss_mode.setss(+e.target.value)
    }) as a.handle_event<HTMLSelectElement>
    
    let jsx_opts = ss_show_opts.map((item)=>{
        if(item != undefined){
            return (<option value={item.index}>{item.name}</option>)
        }
        return <></>
    })
    let jsx_search_bar = <></>
    if (is_search_bar===true){
        jsx_search_bar= <Search_bar<opt_mode_t, "name">
            opt_name={undefined as a.opt_name}
            read_only_arr={available_opts.map((item,index)=>{return {name:item,index:index} as opt_mode_t})}
            search_arr={
                {
                    ss:ss_show_opts, 
                    setss:setss_show_opts
                }}
            property = "name"
        />
    }
    return (<>
        <Str_to_h opt_name={opt_name}/>
        {jsx_search_bar}
        <select value={ss_mode.ss} onChange={(e)=>handle_event(e)}>
            {jsx_opts}
        </select>
    </>);
}
