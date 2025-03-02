import React from "react";
import * as a from "../../type/alias"
import BUTTON_CLICK from "../../components/button/button_click";

// https://stackoverflow.com/questions/54779318/
// can-async-functions-be-called-in-onclick-in-button-react

// https://stackoverflow.com/questions/67367665/
// type-promisevoid-is-not-assignable-to-type-mouseeventhandlerhtmlbuttonelem

export default function ASYNC_ONCLICK(){
    async function asyncFunc() {
        setTimeout(()=>console.log("Mumu"), 3000)
    }
    
    return <>
    <BUTTON_CLICK
    name={"click" as a.name}
    func_event={asyncFunc as a.func_event}
    />
    </>
}