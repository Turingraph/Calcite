import React, {useEffect, useState} from "react";
import * as a from "../../type/alias"
import Click_button from "../ui/click_button";
import Click_option from "./click_option";
import Str_to_h from "../../utils/str_to_h";
import { input_option_t } from "../../type/input";

export default function Multi_options(
    {
        opt_name = undefined as a.opt_name,
        exist_objs,
        available_opts,
        default_opt = 0,
        is_search_bar = false,
        is_duplicate = false
    }:{
        opt_name?:a.opt_name
        exist_objs:a.use_state_t<number[]>,
        available_opts:string[]
        default_opt?:number
        is_search_bar?:boolean
        is_duplicate?:boolean
    }
){
    const [ss_create_mode, setss_create_mode] = useState<number>(default_opt)
    useEffect(()=>{
        if (is_duplicate === false){
            // https://stackoverflow.com/questions/36829184/
            // how-can-i-convert-a-set-to-an-array-in-typescript
            let update_exist_objs = new Set(exist_objs.ss);
            exist_objs.setss(Array.from(update_exist_objs))
        }
    },[exist_objs.ss])
    function func_reset(){
        exist_objs.setss([default_opt])
        setss_create_mode(default_opt)
    }
    return <>
        <Str_to_h opt_name={opt_name}/>
        <Click_option 
            opt_name={"Select Mode" as a.opt_name} 
            available_opts={available_opts} 
            ss_mode={{ss:ss_create_mode, setss:setss_create_mode} as a.use_state_t<number>}
            is_search_bar={is_search_bar}
        />
        <Click_button 
            name={("Create "+available_opts[ss_create_mode]) as a.name}
            func_event={(()=>{}) as a.func_event}
        />
        <Click_button 
            name={("Reset") as a.name}
            func_event={(()=>{func_reset()}) as a.func_event}
        />
    </>
}