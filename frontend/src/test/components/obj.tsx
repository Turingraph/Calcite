import React from "react";
import { JSX, useReducer, useState } from "react";
import { act_arrname, use_arrname_t } from "../../src/array/act_arrobj";
import * as oarr from "../../src/array/func_arrobj";
import PANEL from "../../src/components/asset/panel";
import BUTTON_CLICK from "../../src/components/button/button_click";
import OBJ_BOOL from "../../src/components/obj/obj_bool";
import OBJ_SELF from "../../src/components/obj/obj_self";
import OBJ_STR from "../../src/components/obj/obj_str";
import * as a from '../../src/type/alias';
import { character_t, CHARACTERS } from "../data";

function func_delete_arr<t extends {name:a.name}[]>(input_arr:use_arrname_t<t>){
    if(input_arr.ss.length > 1){
        input_arr.setss({
            type:"DELETE",
            index:0
        })
    }
}

function func_create_arr<t extends {name:a.name}[]>(input_arr:use_arrname_t<t>){
    if(input_arr.ss.length > 0){
        input_arr.setss({
            type:"COPY",
            index:0
        })
    }
}

export function TEST_OBJ_SELF(){
    const [ss_arr, setss_arr] = useReducer(
        act_arrname,
        oarr.sort_arr(CHARACTERS, {attr:"name", mode:"SORT"}) as character_t[]
    )
    const [ss_select, setss_select] = useState<number|undefined>(undefined)

    const JSX_ARR = ss_arr.map((item,index)=>{
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
                attrs={["skill"]}
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
        oarr.sort_arr(CHARACTERS, {attr:"name", mode:"SORT"}) as character_t[]
    )
    const JSX_ELEMENTS:JSX.Element[] = ss_arr.map((item,index)=>{
        return <div key={index}>
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
        oarr.sort_arr(CHARACTERS, {attr:"name", mode:"SORT"}) as character_t[]
    )
    const JSX_ARR = ss_arr.map((item, index)=>{
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
