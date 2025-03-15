import React from "react";
import * as a from "../type/alias"
import BUTTON_CLICK from "../components/button/button_click";

// https://youtu.be/b8ZUb_Okxro?si=-nf2fG_X8vszt0Gs

export default function BUTTON_API(){
    const MAKE_API_CALL = async () => {
        await fetch('/api/hello', {
            method:"POST",
            body: JSON.stringify({hello:"world"})
        })
    }
    
    return <>
    <BUTTON_CLICK
    name={"click" as a.name}
    func_event={MAKE_API_CALL as a.func_event}
    />
    </>
}