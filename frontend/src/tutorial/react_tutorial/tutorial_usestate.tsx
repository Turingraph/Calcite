import {useState} from "react";
import * as a from "../../type/alias"
import BUTTON_CLICK from "../../components/button/button_click";

function TUTORIAL_USESTATE<t extends object>({
}:{
}){
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