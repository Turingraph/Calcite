import React, {useEffect, useState} from "react";
import * as a from "../../type/alias"
import Button_click from "../button/button_click";

export default function Test_usestate(){
    const [ss, setss] = useState<number>(0)
    // useEffect(()=>{
    //     // Add this in node_modules/react-dom/index.js
    //     window.React1 = require('react');
            
    //     // Add this in your component file
    //     require('react-dom');
    //     window.React2 = require('react');
    //     console.log(window.React1 === window.React2);
    // })
    return <>
    <h1>{ss}</h1>
    <Button_click name={"add" as a.name}
    func_event={(()=>{setss((prev)=>prev+1)}) as a.func_event}
    />
    <Button_click name={"sub" as a.name}
    func_event={(()=>{setss((prev)=>prev-1)}) as a.func_event}
    />
    </>
}