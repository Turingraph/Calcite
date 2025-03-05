import React, { JSX } from "react";
import * as a from "../../type/alias";
import * as uarr from "../../utility/utility_arr"
import { opt_input_uit } from "../opt/type";
import {str_to_attr_value, STR_TO_H} from "../../utility/convert";
import OPT_INPUT from "../opt/opt_input";
import INPUT_FORM from "./input_form";
import "./index.css"

function func_input_opt_index(arr_all:a.attr_value<string|number>[], arr_include:string[]){
    return arr_all.map((item, index)=>{
        if(arr_include.includes(item.name as string) === true)
        {
            return index
        }
        return 0
    })
}

interface  opt_attr_t extends a.attr_value<string[]> {
    is_search_bar?:undefined|boolean
} 

export type input_combine_uit = {
    opt_name?:a.opt_name,
    input_str?:a.use_state_t<a.attr_value<string|number>[]>
    input_opt?:opt_attr_t[]
    func_activate?:a.func_event,
    is_undo?:boolean
}

export default function INPUT_COMBINE({
    opt_name,
    input_str,
    input_opt = [],
    func_activate = (()=>{}) as a.func_event,
    is_undo = false
}:input_combine_uit){
    const INPUT_OPT_INDEX = func_input_opt_index(
        input_str ? input_str.ss : [], 
        input_opt.map((item)=>{return item.name}))
    let jsx_input_str = <></>
    if (input_str !== undefined){
        jsx_input_str = <INPUT_FORM
            arr = {input_str}
            except_arr={input_opt.map((item)=>{return item.name as string})}
            func_activate={func_activate}
            is_undo={is_undo}
        />
    }
    let jsx_input_opt:(JSX.Element|undefined)[]|undefined = [<></>]
    if (input_opt.length > 0 && input_str !== undefined){
        jsx_input_opt = input_opt.map((item:a.attr_value<string[]>, index:number)=>{
            const CONST_ITEM = str_to_attr_value(item.name, input_str.ss)
            if(CONST_ITEM !== undefined && typeof CONST_ITEM.value === "number"){
                return <div key={index}>
                    <OPT_INPUT
                    opt_name={CONST_ITEM.name as a.opt_name}
                    available_opts={item.value}
                    ss_mode={{ss:CONST_ITEM.value, setss:((e:number|undefined)=>{
                        uarr.update_item_attr(
                            INPUT_OPT_INDEX[index] ? INPUT_OPT_INDEX[index] : -1,
                            input_str,
                            "value",
                            e ? e : 0
                        )
                    })}}
                    is_search_bar={item.is_search_bar ? item.is_search_bar : false}
                    auto_update_opts={false}
                    />
                    </div>
            }
            return undefined
        })
    }
    return <>
        <STR_TO_H opt_name={opt_name as a.opt_name}/>
        {jsx_input_opt}
        {jsx_input_str}
    </>
}
