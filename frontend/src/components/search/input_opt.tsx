import React, {useEffect, useState} from "react";
import * as a from "../../type/alias"
import {Str_to_h} from "../../utils/convert";
import { opt_mode_uit, input_opt_uit } from "./type"
import Search_bar from "./search_bar";

//  https://stackoverflow.com/questions/40209352/
//  how-to-specify-optal-default-props-with-typescript-for-stateless-functiona

// https://stackoverflow.com/questions/
// 58114855/handling-select-opts-in-react-hooks

export default function Input_opt(
{
    opt_name = undefined,
    available_opts,
    ss_mode,
    is_search_bar = false
}:input_opt_uit){

    // https://developer.mozilla.org/en-US/docs/Web/
    // JavaScript/Reference/Global_Objects/Array/every

    // https://stackoverflow.com/questions/23130292/
    // test-for-array-of-string-type-in-typescript

    const [ss_show_opts, setss_show_opts] = useState<(opt_mode_uit|undefined)[]>(()=>{
        if(available_opts.every(item => typeof item === "string")){
            return available_opts.map((item, index)=>{ return {name:item as a.name, index:index}})
        }
        else{
            return available_opts
        }
    })
    useEffect(()=>{
        setss_show_opts(()=>{
            if(available_opts.every(item => typeof item === "string")){
                return available_opts.map((item, index)=>{ return {name:item as a.name, index:index}})
            }
            else{
                return available_opts
            }
        })
    })
    // https://stackoverflow.com/questions/40676343/
    // typescript-input-onchange-event-target-value
    const handle_event = ((e: React.ChangeEvent<HTMLSelectElement >) => {
        ss_mode.setss(+e.target.value)
        console.log("input_opt mode ", +e.target.value)
    }) as a.handle_event<HTMLSelectElement>
    
    const JSX_OPTS = ss_show_opts.map((item,index)=>{
        if(item != undefined){
            return (<option key={index} value={item.index}>{item.name}</option>)
        }
        return <></>
    })
    let jsx_search_bar = <></>
    if (is_search_bar===true){
        jsx_search_bar= <Search_bar
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
                }}
            attr = {"name"}
        />
    }
    return (<>
        <Str_to_h opt_name={opt_name}/>
        {jsx_search_bar}
        <select value={ss_mode.ss} onChange={(e)=>handle_event(e)}>
            {JSX_OPTS}
        </select>
    </>);
}
