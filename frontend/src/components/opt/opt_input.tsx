import React, { useState, JSX, useRef, useLayoutEffect} from "react";
import * as a from "../../type/alias"
import {STR_TO_H, str_to_optmode} from "../../utils/convert";
import { opt_mode_uit, opt_input_uit } from "./type"
import SEARCH_BAR from "./search_bar";
import "./index.css"
import { method_no_undefined} from "../../utils/arr_method";
import { handle_access_optmode } from "../../utils/utils";

//  https://stackoverflow.com/questions/40209352/
//  how-to-specify-optal-default-props-with-typescript-for-stateless-functiona

// https://stackoverflow.com/questions/
// 58114855/handling-select-opts-in-react-hooks

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
        str_to_optmode(available_opts) as opt_mode_uit[]
    )
    const ref_show_opts = useRef(ss_show_opts)

    // Update ss_mode to be the first available ss_show_opts option.
    useLayoutEffect(()=>{
        if(ref_show_opts.current !== ss_show_opts){
        let i = 0
        while(i < ss_show_opts.length){
            if(ss_show_opts[i] !== undefined){
                ss_mode.setss(ss_show_opts[i].index)
                i = ss_show_opts.length
            }
            i+=1
        }}
        ref_show_opts.current = ss_show_opts
    },[ss_show_opts, ss_mode])

    // The ss_show_opts is updated every time the available_opts is updated.
    // Then it is updated in JSX_SEARCH_BAR
    useLayoutEffect(()=>{
        setss_show_opts(str_to_optmode(available_opts))
    }, [available_opts])
    
    // https://stackoverflow.com/questions/40676343/
    // typescript-input-onchange-event-target-value
    const handle_event = ((e: React.ChangeEvent<HTMLSelectElement >) => {
        ss_mode.setss(+e.target.value)
    }) as a.handle_event<HTMLSelectElement>

    const JSX_OPTS = method_no_undefined(ss_show_opts.map((item,index)=>{
        if(item !== undefined && handle_access_optmode(item.index, str_to_optmode(available_opts)) !== undefined){
            return (<option key={index} value={item.index}>{item.name}</option>)
        }
        return undefined
    })) as JSX.Element[]
    const JSX_SEARCH_BAR = <SEARCH_BAR
            opt_name={undefined as a.opt_name}
            read_only_arr={str_to_optmode(available_opts)}
            setss_select_arr={setss_show_opts}
        />
    return (<>
        <STR_TO_H opt_name={opt_name}/>
        {is_search_bar ? JSX_SEARCH_BAR : <></>}
        <select value={ss_mode.ss} onChange={(e)=>handle_event(e)}>
            {JSX_OPTS}
        </select>
    </>);
}
