import React, { JSX } from "react";
import * as a from "../../type/alias";
import { str_to_avarr } from "../../convert/attr";
import { STR_TO_H } from "../../convert/str";
import OPT_INPUT from "../opt/opt_input";
import INPUT_FORM from "./input_form";
import "./index.css"
import { use_arrobj_t } from "../../array/act_arrobj";

function func_input_opt_index(arr_all:a.attr_value<string|number>[], arr_include:string[]){
    return arr_all.map((item, index)=>{
        if(arr_include.includes(item.attr as string) === true)
        {
            return index
        }
        return 0
    })
}

export type input_combine_uit = {
    opt_name?:a.opt_name,
    input_str?:use_arrobj_t<a.attr_value<string|number>[]>|undefined
    input_opt?:(a.attr_value<string[]> & {is_search_bar?:undefined|boolean})[]
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
        input_opt.map((item)=>{return item.attr}))
    let jsx_input_str = <></>
    if (input_str !== undefined){
        jsx_input_str = <INPUT_FORM
            input_arr = {input_str}
            no_input_fields={input_opt.map((item)=>{return item.attr as string})}
            func_activate={func_activate}
            is_undo={is_undo}
        />
    }
    let jsx_input_opt:(JSX.Element|undefined)[]|undefined = [<></>]
    if (input_opt.length > 0 && input_str !== undefined){
        jsx_input_opt = input_opt.map((item, index:number)=>{
            const CONST_ITEM = str_to_avarr(item.attr, input_str.ss)
            if(CONST_ITEM === undefined || typeof CONST_ITEM.value !== "number"){
                return <div key={index}></div>
            }
            return <div key={index}>
                <OPT_INPUT
                opt_name={CONST_ITEM.attr as a.opt_name}
                available_opts={item.value}
                ss_mode={{ss:CONST_ITEM.value, setss:((e:number)=>{
                    input_str.setss({
                        type:"EDIT_ATTR",
                        index:index,
                        attr:"value",
                        input: e
                    })
                }) as ((e: number | undefined) => void)}}
                is_search_bar={item.is_search_bar ? item.is_search_bar : false}
                />
                </div>
            })
            return undefined
    }
    return <>
        <STR_TO_H opt_name={opt_name as a.opt_name}/>
        {jsx_input_opt}
        {jsx_input_str}
    </>
}
