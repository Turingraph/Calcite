import React, {useState} from "react";
import * as a from '../../type/alias'
import Factory_obj from "../../components/factory/factory_obj";
import Factory_opts from "../../components/factory/factory_opts";
import Input_item_attr from "../../components/factory/input_item_attr";
import Select_button from "../../components/factory/select_button";
import Select_checkbox from "../../components/factory/select_checkbox";
import { character_t } from "../utils/constant";
import { CHARACTERS } from "../utils/constant";

export function Test_factory_obj(){
    const [ss_arr, setss_arr] = useState<character_t[]>(CHARACTERS)
    const JSX_ARR = ss_arr.map((item,index)=>{
        return <Factory_obj 
            arr = {{ss:ss_arr, setss:setss_arr}}
            index={index}
            jsx_additional={<Select_checkbox
                name={"rule64" as a.name}
                arr={{ss:ss_arr, setss:setss_arr}}
                index={index}
                attr={"is_male"}
            />}
            />
    })
    return <>
    {JSX_ARR}
    </>
}

export function Test_factory_opts(){
    const [ss_arr, setss_arr] = useState<number[]>([0])
    const AVAILABLE_OPTS = CHARACTERS.map((item)=>{return item.name}) as string[]
    return <Factory_opts 
        opt_name={"List" as a.opt_name}
        exist_opts={{ss:ss_arr, setss:setss_arr}}
        available_opts={AVAILABLE_OPTS}
        />
}

export function Test_input_item_attr(){
    return <>
    </>
}

export function Test_select_button(){
    const [ss_arr, setss_arr] = useState<character_t[]>(CHARACTERS)
    const JSX_ARR = ss_arr.map((item, index)=>{
        return <>
        <h1>Name: {item.name}</h1>
        <h1>Gander: {item.is_male ? "Male" : "Female"}</h1>
        <Select_checkbox
            name={"rule64" as a.name}
            arr={{ss:ss_arr, setss:setss_arr}}
            index={index}
            attr={"is_male"}
            />
        </>
    })
    return <>
    {JSX_ARR}
    </>
}
