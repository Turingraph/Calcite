import React, {useEffect, useState} from "react"
import * as a from "../../type/alias";
import Str_to_h from "../../utils/str_to_h";
import Click_button from "../ui/click_button";
import Panel from "../ui/panel";
import Click_option from "../ui/click_option";

export default function Multi_options(
{
    opt_name,
    available_opts,
    exist_opts,
    default_opts = undefined
}:{
    opt_name:a.opt_name,
    available_opts:string[],
    exist_opts:number[]
    default_opts?:number[]|undefined
}
){
    let ptr_mode = {value:0} as a.value_t<number>;
    const [ss_opt_obj, setss_opt_obj] = useState<number[]>(exist_opts)
    const [ss_mode, setss_mode] = useState<number>(0)
    useEffect(()=>{
        if(default_opts == undefined){
            default_opts = [0]
        }
    },[])
    useEffect(()=>{
        exist_opts  = ss_opt_obj
    },[ss_opt_obj])
    useEffect(()=>{
        setss_mode(ptr_mode.value)
    },[ptr_mode])

    function func_add_option(){
        let update_opts = ss_opt_obj
        update_opts.push(ptr_mode.value)
        setss_opt_obj(update_opts)
    }

    function func_reset(){
        setss_opt_obj(default_opts as number[])
    }

    function func_delete(index:number){
        //
    }

    let jsx_elements = exist_opts.map((item,index)=>{return <></>})

    return <>
    <Str_to_h opt_name={opt_name}/>
    <Panel jsx_element={<>{jsx_elements}</>}/>
    <Click_option opt_name = {"Select Option mode" as a.opt_name} options={available_opts} ptr_select_option={ptr_mode}/>
    <Click_button name={"add "+available_opts[ss_mode] as a.name} event_func={(()=>{func_add_option()}) as a.event_func}/>
    <Click_button name={"reset" as a.name} event_func={(()=>{func_reset()}) as a.event_func}/>
    </>
}