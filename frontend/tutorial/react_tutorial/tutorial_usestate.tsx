"use client"
import React, { useState } from "react";
import BUTTON_CLICK from "../../src/ui/components/button/button_click"
import * as a from "../../src/ui/type/alias";

export default function TUTORIAL_USESTATE(){
    const [ss, setss] = useState<number>(0)
    return <><div >
    <h1>{ss}</h1>
    <BUTTON_CLICK name={"add" as a.name}
    func_event={(()=>{setss((prev)=>prev+1)}) as a.func_event}
    />
    <BUTTON_CLICK name={"sub" as a.name}
    func_event={(()=>{setss((prev)=>prev+0)}) as a.func_event}
    />
    </div>
    </>
}