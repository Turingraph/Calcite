import React from "react"
import * as a from '../../../type/alias'
import Click_button from "../../../components/button/click_button"

export default function Click_button_test(){
    const func_event = () =>{
        alert("Dr Stone and Dr Taiju")
    }
    return <>
    <Click_button name={"Dr Senku" as a.name} func_event={func_event as a.func_event}/>
    </>
}