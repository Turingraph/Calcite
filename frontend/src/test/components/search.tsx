import React, {useState} from "react";
import * as a from '../../type/alias'
import Opt_input from "../../components/opt/opt_input";
import Search_bar from "../../components/opt/search_bar";
import { opt_mode_uit } from "../../components/opt/type";
import { OPT_NAME } from "../constant";
import { CHARACTERS } from "../constant";
import Opt_exist_arr from "../../components/opt/opt_exist_arr";
import Panel from "../../components/asset/panel";

export function Test_opt_exist_arr(){
    const [ss_arr, setss_arr] = useState<number[]>([0])
    const AVAILABLE_OPTS = CHARACTERS.map((item)=>{return item.name}) as string[]
    return <Opt_exist_arr 
        opt_name={"List" as a.opt_name}
        exist_opts={{ss:ss_arr, setss:setss_arr}}
        available_opts={AVAILABLE_OPTS}
        />
}

export function Test_opt_input(){
    const [ss_name, setss_name] = useState<number>(0)

    return <>
    <Opt_input
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
    const JSX_ELEMENT = ss_name.map((item,index)=>{return <h1 key={index}>{item?item.name:""}</h1>})
    return <>
        <Search_bar 
        opt_name={"Your name" as a.opt_name}
        read_only_arr={OPT_NAME.map((item)=>{return{name:item}})}
        select_arr={{ss:ss_name, setss:setss_name}}
        attr={"name"}/>
        <Panel jsx_element={<>{JSX_ELEMENT}</>}/>
    </>
}