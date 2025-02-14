import React from "react";
import * as a from '../../type/alias'
import Click_button from "../../components/button/click_button";
import Select_tabs from "../../components/button/select_tabs";
import { OPT_NAME } from "../utils/constant";

export function Test_click_button(){
    const func_event = () =>{
        alert("Dr Stone and Dr Taiju")
    }
    return <>
    <Click_button 
        name={"Dr Senku" as a.name} 
        func_event={func_event as a.func_event}
    />
    </>
}

export function Test_select_tabs(){
    const JSX_ARR = OPT_NAME.map((item,index)=>{
        return <h1>No.{index}: {item}</h1>
    })
    return <Select_tabs 
    jsx_elements={JSX_ARR} 
    name_arr={OPT_NAME as a.name[]}/>
}