import React, { JSX, useReducer, useState } from "react";
import { act_arrname, INIT_ARRNAME, ss_arrname_t, use_arrname_t } from "../../ui/array/act_arrobj";
import * as oarr from "../../ui/array/func_arrobj";
import PANEL from "../../ui/components/asset/panel";
import BUTTON_CLICK from "../../ui/components/button/button_click";
import OBJ_BOOL from "../../ui/components/obj/obj_bool";
import OBJ_SELF from "../../ui/components/obj/obj_self";
import OBJ_STR from "../../ui/components/obj/obj_str";
import * as a from '../../ui/type/alias';
import { character_t, CHARACTERS } from "../data";

function func_delete_arr<t extends {name:a.name}[]>(input_arr:use_arrname_t<t, keyof t[number]>){
    if(input_arr.ss.ss.length > 1){
        input_arr.setss({
            type:"DELETE",
            index:0
        })
    }
}

function func_create_arr<t extends {name:a.name}[]>(input_arr:use_arrname_t<t, keyof t[number]>){
    if(input_arr.ss.ss.length > 0){
        input_arr.setss({
            type:"COPY",
            index:0
        })
    }
}

export function TEST_OBJ_SELF(){
    const [ss_arr, setss_arr] = useReducer(
        act_arrname,
        {
            ...INIT_ARRNAME,
            ss:oarr.sort_arrobj(CHARACTERS, "SORT", "name") as character_t[]
        } as ss_arrname_t<character_t[], keyof character_t>
    )
    const [ss_select, setss_select] = useState<number|undefined>(undefined)

    const JSX_ARR = ss_arr.ss.map((item,index)=>{
        return <div key={index}>
            <OBJ_SELF 
            input_arr = {{ss:ss_arr, setss:setss_arr}}
            this_item={index}
            ss_select={{ss:ss_select, setss:setss_select}}
            jsx_additional={<>
            <OBJ_BOOL
                name={"rule64" as a.name}
                input_arr={{ss:ss_arr, setss:setss_arr}}
                this_item={index}
                attr={"is_male"}
                ui_mode={"checkbox"}
            />
            <OBJ_STR
                input_arr={{ss:ss_arr, setss:setss_arr}}
                this_item={index}
                attrs={["skill", "age"]}
                is_undo={false}
            />
            </>}
            />
            <hr/>
            </div>
    })
    return <>
    {JSX_ARR}
    </>
}

export function TEST_OBJ_STR(){
    const [ss_arr, setss_arr] = useReducer(
        act_arrname,
        {
            ...INIT_ARRNAME,
            ss:oarr.sort_arrobj(CHARACTERS, "SORT", "name") as character_t[]
        } as ss_arrname_t<character_t[],keyof character_t>
    )
    const JSX_ELEMENTS:JSX.Element[] = ss_arr.ss.map((item,index)=>{
        return <div key={index}>
            <h1>Skill no.{index} : {item.skill}</h1>
            <OBJ_STR
                input_arr={{ss:ss_arr,setss:setss_arr}}
                this_item={index}
                attrs={["skill"]}
                is_undo={false}
                />
            <hr/>
        </div>
    })
    return <>
    <BUTTON_CLICK
        name={"delete" as a.name}
        func_event={(()=>{func_delete_arr({ss:ss_arr, setss:setss_arr})}) as a.func_event}
    />
    <BUTTON_CLICK
        name={"create" as a.name}
        func_event={(()=>{func_create_arr({ss:ss_arr, setss:setss_arr})}) as a.func_event}
    />
    <PANEL jsx_element={<>
        {JSX_ELEMENTS}
    </>}/>
    </>
}

export function TEST_OBJ_BOOL(){
    const [ss_arr, setss_arr] = useReducer(
        act_arrname,
        {
            ss:oarr.sort_arrobj(CHARACTERS, "SORT", "name") as character_t[],
        } as ss_arrname_t<character_t[],keyof character_t>
    )
    const JSX_ARR = ss_arr.ss.map((item, index)=>{
        return <div key={index}>
        <h1>Name: {item.name}</h1>
        <h1>Gander: {item.is_male ? "Male" : "Female"}</h1>
        <OBJ_BOOL
            name={"rule64" as a.name}
            input_arr={{ss:ss_arr, setss:setss_arr}}
            this_item={index}
            attr={"is_male"}
            ui_mode={"checkbox"}
            />
            <hr/>
        </div>
    })
    return <>
    <BUTTON_CLICK
        name={"delete" as a.name}
        func_event={(()=>{func_delete_arr({ss:ss_arr, setss:setss_arr})}) as a.func_event}
    />
    <BUTTON_CLICK
        name={"create" as a.name}
        func_event={(()=>{func_create_arr({ss:ss_arr, setss:setss_arr})}) as a.func_event}
    />
    <PANEL jsx_element={<>
        {JSX_ARR}
    </>}/>
    </>
}
