import React, {useState, JSX} from "react";
import Click_button, {click_button_t} from "../ui_00/click_button";
import * as a from "../../type/alias";
import Opt_to_jsx from "../../utils/opt_to_jsx";
import Str_to_h from "../../utils/str_to_h";
import Get_unknown_prob from "../../utils/handle";

export default function Obj_tabs<
    t extends unknown, 
    k_name extends keyof t,
    k_select extends keyof t>(
{
    obj_arr,
    this_obj,
    opt_buttons = undefined,
    opt_jsx_elements  = undefined,
    property_name,
    property_select,
}:{
    obj_arr:a.use_state_t<t[]>
    this_obj:number
    opt_buttons?:undefined|click_button_t[]
    opt_jsx_elements?:undefined|JSX.Element[]
    property_name:k_name
    property_select:k_select
}){
    const [ss_ui_mode, setss_ui_mode] = useState<"normal"|"rename"|"delete">("normal")
    let let_obj:unknown = obj_arr.ss[this_obj]
    let let_name:string|undefined = Get_unknown_prob({
        unknown_obj:let_obj,
        property:"name",
        type:"string"
        })

    if (ss_ui_mode === "normal"){
        function func_select(){
            if (Get_unknown_prob({
                unknown_obj:let_obj,
                property:'select',
                type:'boolean'
                }) === false){
            }
            else{
                //
            }
        }
        function func_copy(){
            //
        }
        return <>
            <Str_to_h opt_name={let_name as a.name}/>
            <Click_button
                name={"rename" as a.name}
                func_event={(()=>{setss_ui_mode("rename")}) as a.func_event}
            />
            <Click_button
                name={"select" as a.name}
                func_event={(()=>{func_select()}) as a.func_event}
            />
            <Click_button
                name={"copy" as a.name}
                func_event={(()=>{func_copy()}) as a.func_event}
            />
            {Opt_to_jsx({arr:opt_buttons,jsx_element:Click_button})}
            <Click_button
                name={"x" as a.name}
                func_event={(()=>{setss_ui_mode("delete")}) as a.func_event}
            />
        </>
    }
    else if (ss_ui_mode === "rename"){
        //
    }
    else if (ss_ui_mode === "delete"){
        //
    }
    else{
        return <h1>There is Error in `frontend/src/components/ui_02/obj_tabs.tsx`</h1>
    }
}
