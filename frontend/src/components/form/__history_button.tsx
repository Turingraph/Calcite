import React from "react";
import * as a from "../../type/alias";
import { history } from "../../type/history";
import Click_button from "../ui/click_button";

export default function History_button<t>({
    {
        components,
        length
    }
}:history<t>
){
    function prev_func(){
        //
    }
    let jsx_prev_button = <Click_button name={"=>" as a.name} event_func={(()=>{prev_func()}) as a.event_func}/>
    let jsx_next_button = <Click_button name={"<=" as a.name} event_func={()=>{next_func()}}/>
    return <>
        //
    </>
}