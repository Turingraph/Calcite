import React, {useState} from "react";
import * as a from '../../type/alias'
import Input_opt from "../../components/search/input_opt";
import Search_bar from "../../components/search/search_bar";
import { opt_mode_uit } from "../../components/search/type";
import { OPT_NAME } from "../utils/constant";

export function Test_input_opt(){
    const [ss_name, setss_name] = useState<number>(0)

    return <>
    <Input_opt
        opt_name={"Your name is " + OPT_NAME[ss_name] as a.opt_name}
        available_opts={OPT_NAME}
        ss_mode={{ss:ss_name, setss:setss_name}}
        is_search_bar = {true}
    />
    </>
}

export function Test_search_bar(){
    const [ss_name, setss_name] = useState<(opt_mode_uit|undefined)[]>(
        OPT_NAME.map((item,index)=>{
            return {
                name:item as a.name,
                index:index
            }
        })
    )
    return <>
        <Search_bar 
        opt_name={"Your name" as a.opt_name}
        read_only_arr={OPT_NAME.map((item)=>{return{name:item}})}
        select_arr={{ss:ss_name, setss:setss_name}}
        attr={"name"}/>
        {ss_name.map((item,index)=>{return <h1 key={index}>{item?item.name:""}</h1>})}
    </>
}