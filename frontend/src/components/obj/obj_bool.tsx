import * as a from "../../type/alias";
import { method_update_item } from "../../utils/arr_method";
import BUTTON_CLICK from "../button/button_click";

export type obj_bool_uit<
    t extends object,
    k extends keyof t> = {
        name?:a.name
        arr:a.use_state_t<t[]>,
        this_item:number,
        attr:k,
        ui_mode?:"button"|"checkbox"
}

export default function OBJ_BOOL<
    t extends object,
    k extends keyof t>({
    name = "select" as a.name,
    arr,
    this_item,
    attr,
    ui_mode = "button"
}:obj_bool_uit<t,k>){
    function func_select(){
        const UPDATE_INPUT = arr.ss[this_item]
        if (UPDATE_INPUT[attr] === true){
            UPDATE_INPUT[attr] = false as t[k]
        }
        else{
            UPDATE_INPUT[attr] = true as t[k]
        }
        method_update_item(this_item, arr, UPDATE_INPUT)
    }
    const HANDLE = ((e:any)=>{func_select()})
    let jsx_element = <>
    <BUTTON_CLICK 
        name={name as a.name} 
        func_event={HANDLE as a.func_event}
    />
    </>
    if(ui_mode === "checkbox"){
        // https://github.com/gloriaJun/til/issues/18
        jsx_element = <>
        <input 
            type="checkbox" 
            onChange={()=>{func_select()}}
            checked={arr.ss[this_item][attr] as unknown as boolean}
        />
        <label>{name}</label>
        </>
    }
    return <>{jsx_element}</>
}