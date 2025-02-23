import React, { useState, useEffect, JSX, useRef, useLayoutEffect} from "react";
import * as a from "../../type/alias"
import {STR_TO_H} from "../../utils/convert";
import { opt_mode_uit, opt_input_uit } from "./type"
import SEARCH_BAR from "./search_bar";
import "./index.css"
import { method_no_undefined } from "../../utils/arr_method";

//  https://stackoverflow.com/questions/40209352/
//  how-to-specify-optal-default-props-with-typescript-for-stateless-functiona

// https://stackoverflow.com/questions/
// 58114855/handling-select-opts-in-react-hooks

function func_init(available_opts:opt_mode_uit[]|string[]){
    if(typeof available_opts[0] === "string"){
        return available_opts.map(
            (item, index)=>{ 
                return {name:item as a.name, index:index} as opt_mode_uit
        })
    }
    return available_opts
}

export default function OPT_INPUT(
{
    opt_name = undefined,
    available_opts,
    ss_mode,
    is_search_bar = false
}:opt_input_uit){

    // https://developer.mozilla.org/en-US/docs/Web/
    // JavaScript/Reference/Global_Objects/Array/every

    // https://stackoverflow.com/questions/23130292/
    // test-for-array-of-string-type-in-typescript

    const [ss_show_opts, setss_show_opts] = useState<opt_mode_uit[]>(
        func_init(available_opts) as opt_mode_uit[]
    )
    const ref_show_opts = useRef(ss_show_opts)
    useLayoutEffect(()=>{
        if(ref_show_opts.current !== ss_show_opts){
        let i = 0
        while(i < ss_show_opts.length){
            if(ss_show_opts[i] !== undefined){
                ss_mode.setss(i)
                i = ss_show_opts.length
            }
            i+=1
        }}
        ref_show_opts.current = ss_show_opts
    },[ss_show_opts, ss_mode])
    // https://stackoverflow.com/questions/40676343/
    // typescript-input-onchange-event-target-value
    const handle_event = ((e: React.ChangeEvent<HTMLSelectElement >) => {
        ss_mode.setss(+e.target.value)
    }) as a.handle_event<HTMLSelectElement>
    
    const JSX_OPTS = method_no_undefined(ss_show_opts.map((item,index)=>{
        if(item !== undefined){
            return (<option key={index} value={item.index}>{item.name}</option>)
        }
        return undefined
    })) as JSX.Element[]
    let jsx_search_bar = <></>
    if (is_search_bar===true){
        jsx_search_bar= <SEARCH_BAR
            opt_name={undefined as a.opt_name}
            read_only_arr={
                available_opts.map((item,index)=>{
                    if(typeof item === "string"){
                        return {
                            name:item,
                            index:index
                        } as opt_mode_uit
                    }
                    else{
                        return item
                    }})}
            select_arr={{
                    ss:ss_show_opts, 
                    setss:setss_show_opts
                } as a.use_state_t<opt_mode_uit[]>}
            attr = {"name"}
        />
    }
    return (<>
        <STR_TO_H opt_name={opt_name}/>
        {jsx_search_bar}
        <select value={ss_mode.ss} onChange={(e)=>handle_event(e)}>
            {JSX_OPTS}
        </select>
    </>);
}
