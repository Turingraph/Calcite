import React, { useState, JSX, useRef, useLayoutEffect, useReducer} from "react";
import * as a from "../../type/alias"
import {STR_TO_H, str_to_optmode_arr} from "../../utility/convert";
import { opt_mode_uit} from "./type"
import SEARCH_BAR from "./search_bar";
import "./index.css"
import { index_to_optmode } from "../../utility/convert";
import act_arrobj, { setss_arrname_t } from "../../array/act_arrobj";
import BUTTON_CLICK from "../button/button_click";

export type opt_input_t = {
    opt_name?:a.opt_name
    available_opts:string[]|opt_mode_uit[]
    ss_mode:a.use_state_t<number|undefined>
    is_search_bar?:boolean,
    auto_update_opts?:boolean,
    default_input?:undefined|number
}

//  https://stackoverflow.com/questions/40209352/
//  how-to-specify-optal-default-props-with-typescript-for-stateless-functiona

// https://stackoverflow.com/questions/
// 58114855/handling-select-opts-in-react-hooks

export default function OPT_INPUT(
{
    opt_name = undefined,
    available_opts,
    ss_mode,
    is_search_bar = false,
    auto_update_opts = true,
    default_input = undefined
} : opt_input_t){

    // https://developer.mozilla.org/en-US/docs/Web/
    // JavaScript/Reference/Global_Objects/Array/every

    // https://stackoverflow.com/questions/23130292/
    // test-for-array-of-string-type-in-typescript

    const [ss_show_opts, setss_show_opts] = useReducer(
        act_arrobj,
        str_to_optmode_arr(available_opts) as opt_mode_uit[]
    )
    const ref_show_opts: React.RefObject<opt_mode_uit[]|undefined> = useRef(ss_show_opts)

    // Update ss_mode to be the first available ss_show_opts option, 
    // everytime when ss_show_opt is pushed.
    useLayoutEffect(()=>{
        if(ref_show_opts.current !== ss_show_opts && auto_update_opts === true){
            let i = 0
            while(i < ss_show_opts.length){
                if(ss_show_opts[i] !== undefined){
                    ss_mode.setss(ss_show_opts[i].index)
                    i = ss_show_opts.length
                }
                i+=1
            }
            ref_show_opts.current = ss_show_opts
        }
    },[ss_show_opts, ss_mode, auto_update_opts])

    // The ss_show_opts is updated every time the available_opts is updated.
    useLayoutEffect(()=>{
        if(ref_show_opts.current !== ss_show_opts && auto_update_opts === true){
            setss_show_opts({
                type:"SET",
                input:str_to_optmode_arr(available_opts)
            })
            ref_show_opts.current = ss_show_opts
        }
    }, [available_opts, ss_show_opts, auto_update_opts])

    // https://stackoverflow.com/questions/40676343/
    // typescript-input-onchange-event-target-value
    const handle_event = ((e: React.ChangeEvent<HTMLSelectElement>) => {
        ss_mode.setss(+e.target.value)
    }) as a.handle_event<HTMLSelectElement>

    // PREVIOUS: const JSX_OPTS = ss_show_opts.reverse().map((item,index)=>{
    // What does .reverse() do and is it important ?
    const JSX_OPTS = ss_show_opts.map((item,index)=>{
        if(item !== undefined && index_to_optmode(item.index, str_to_optmode_arr(available_opts)) !== undefined){
            return (<option key={index} value={item.index}>{item.name}</option>)
        }
        return undefined
    }) as JSX.Element[]
    const JSX_SEARCH_BAR = <SEARCH_BAR
            opt_name={undefined as a.opt_name}
            read_only_arr={available_opts}
            setss_select_arr={
                setss_show_opts as setss_arrname_t<opt_mode_uit[]>
            }
        />
    return (<>
        <STR_TO_H opt_name={opt_name}/>
        {is_search_bar ? JSX_SEARCH_BAR : <></>}
        <select value={ss_mode.ss} onChange={(e)=>handle_event(e)}>
            {JSX_OPTS}
        </select>
        {default_input 
            ? <BUTTON_CLICK 
                name={"default_input" as a.name} 
                func_event={(()=>{ss_mode.setss(default_input)}) as a.func_event}
            />
            : <></>
        }
    </>);
}
