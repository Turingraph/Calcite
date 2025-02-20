import React, {useEffect, useState} from "react";
import * as a from "../../type/alias"
import Button_click from "../../components/button/button_click";

export default function Test_usestate<t extends object>({
    arr = undefined  ,   
    input = 0
}:{
    arr?:t[]|undefined
    input?:number
}){
    const [ss, setss] = useState<number>(input)
    return <><div >
    <h1>{ss}</h1>
    <Button_click name={"add" as a.name}
    func_event={(()=>{setss((prev)=>prev+1)}) as a.func_event}
    />
    <Button_click name={"sub" as a.name}
    func_event={(()=>{setss((prev)=>prev+0)}) as a.func_event}
    />
    </div>
    </>
}