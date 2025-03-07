import * as a from "../../type/alias";
import BUTTON_CLICK from "../button/button_click";
import "./index.css"
import { use_objarr_t } from "../../use_reducer/act_objarr";

export type obj_bool_uit<
t extends object[],
k extends keyof t[number]> = {
        name?:a.name
        input_arr:use_objarr_t<t[]>,
        this_item:number,
        attr:k,
        ui_mode?:"button"|"checkbox"
}

export default function OBJ_BOOL<
    t extends object[],
    k extends keyof t[number]>({
    name = "select" as a.name,
    input_arr,
    this_item,
    attr,
    ui_mode = "button"
}:obj_bool_uit<t,k>){
    function func_select(){
        if(typeof input_arr.ss[this_item][attr] === "boolean"){
            input_arr.setss({
                type:"EDIT_ATTR",
                index:this_item as number,
                attr:attr as k,
                input:(input_arr.ss[this_item][attr] ? false : true) as t[keyof t]
            })
        }
    }
    const HANDLE = ((e:any)=>{func_select()})
    if(ui_mode === "checkbox"){
        // https://github.com/gloriaJun/til/issues/18
        return <>
        <input 
            type="checkbox" 
            onChange={()=>{func_select()}}
            checked={input_arr.ss[this_item][attr] as unknown as boolean}
        />
        <label>{name}</label>
        </>
    }
    return <>
    <BUTTON_CLICK 
        name={name as a.name} 
        func_event={HANDLE as a.func_event}
    />
    </>
}