import React, {useState, JSX} from "react";
import Click_button, {click_button_t} from "../ui_00/click_button";
import * as a from "../../type/alias";

export default function Obj_tabs<
    t extends object, 
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
    let jsx_opt_buttons = [<></>]
    if (opt_buttons != undefined){
        jsx_opt_buttons = opt_buttons.map((item)=>{
            return <Click_button
                name={item.name}
                func_event={item.func_event}
            />
        })
    }
    
    let jsx_element = <>
    <Click_button
        name={"rename" as a.name}
        func_event={(()=>{setss_ui_mode("rename")}) as a.func_event}
    />
    <Click_button
        name={"select" as a.name}
        func_event={(()=>{}) as a.func_event}
    />
    <Click_button
        name={"copy" as a.name}
        func_event={(()=>{}) as a.func_event}
    />
    {jsx_opt_buttons}
    <Click_button
        name={"x" as a.name}
        func_event={(()=>{setss_ui_mode("delete")}) as a.func_event}
    />
    </>
    if (ss_ui_mode === "rename"){
        //
    }
    if (ss_ui_mode === "delete"){
        //
    }
    return jsx_element
}
