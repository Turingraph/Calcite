import React from "react";
import * as a from '../../type/alias'
import Click_button from "../../components/button/click_button";

export default function Test_click_button(){
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