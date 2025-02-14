import React, {useState} from "react";
import * as a from '../../type/alias'
import Factory_obj from "../../components/factory/factory_obj";
import Factory_opts from "../../components/factory/factory_opts";
import Input_item_attr from "../../components/factory/input_item_attr";
import Select_button from "../../components/factory/select_button";
import Select_checkbox from "../../components/factory/select_checkbox";
import { character_t } from "../utils/constant";

export function Test_factory_obj(){
    const [ss_characters, setss_characters] = useState<character_t[]>([
        {
            name:"Ena" as a.name,
            age: 25,
            skill:"Bipolar",
            is_male:false
        },
        {
            name:"Moony" as a.name,
            age: 28,
            skill:"Orbit around the Earth",
            is_male:false
        },
        {
            name:"Dream BBQ" as a.name,
            age: 27,
            skill:"Cook BBQ",
            is_male:false
        },
        {
            name:"Rick" as a.name,
            age: 78,
            skill:"Create advanced technology",
            is_male:true
        },
        {
            name:"Wizard" as a.name,
            age: 80,
            skill:"Be a normal wizard in the weird series",
            is_male:true
        },
        {
            name:"Pink Dolphin" as a.name,
            age: 24,
            skill:"Swimming",
            is_male:true
        },
    ])
    const JSX_ARR = ss_characters.map((item,index)=>{
        return <Factory_obj 
            arr = {{ss:ss_characters, setss:setss_characters}}
            index={index}
            />
    })
    return <>
    {JSX_ARR}
    </>
}

export function Test_factory_opts(){
    return <>
    </>
}

export function Test_input_item_attr(){
    return <>
    </>
}

export function Test_select_button(){
    return <>
    </>
}

export function Test_select_checkbox(){
    return <>
    </>
}