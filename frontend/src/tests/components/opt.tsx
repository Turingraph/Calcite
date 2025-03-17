import React, { useReducer, useState } from "react";
import act_arr, { ss_arr_t } from "../../ui/array/act_arr";
import act_arrobj, { act_arrname, ss_arrname_t } from "../../ui/array/act_arrobj";
import * as oarr from "../../ui/array/func_arrobj";
import PANEL from "../../ui/components/asset/panel";
import OBJ_BOOL from "../../ui/components/obj/obj_bool";
import OBJ_STR from "../../ui/components/obj/obj_str";
import OPT_EXIST_ARR from "../../ui/components/opt/opt_exist_arr";
import OPT_INPUT from "../../ui/components/opt/opt_input";
import SEARCH_BAR from "../../ui/components/opt/search_bar";
import SEARCH_OBJ from "../../ui/components/opt/search_obj";
import * as a from '../../ui/type/alias';
import { character_t, CHARACTERS, OPT_NAME } from "../data"

export function TEST_OPT_EXIST_ARR(){
    const [ss_arr, setss_arr] = useReducer(
        act_arr,
        {ss:[0]} as ss_arr_t<number>
    )
    const AVAILABLE_OPTS = OPT_NAME
    return <OPT_EXIST_ARR 
        opt_name={"List" as a.opt_name}
        exist_opts={{ss:ss_arr, setss:setss_arr}}
        available_opts={AVAILABLE_OPTS}
        is_search_bar={true}
        />
}

export function TEST_OPT_INPUT(){
    const [ss_select, setss_select] = useState<number>(0)
    return <>
    <OPT_INPUT
        opt_name={"Your name is " + OPT_NAME[ss_select] as a.opt_name }
        available_opts={OPT_NAME}
        ss_mode={{ss:ss_select, setss:setss_select} as a.use_state_t<number|undefined>}
        is_search_bar = {true}
    />
    </>
}

export function TEST_SEARCH_BAR(){
    const [ss_name, setss_name] = useReducer(
        act_arrobj,
        {ss:OPT_NAME.map((item,index)=>{
            return {
                attr:item as a.attr,
                value:index
            } as a.attr_value<number>
        })} as ss_arr_t<a.attr_value<number>>
    )
    const JSX_ELEMENT = ss_name.ss.map((item,index)=>{return <h1 key={index}>{item?item.attr:""}</h1>})
    return <>
        <SEARCH_BAR 
        opt_name={"Your name" as a.opt_name}
        read_only_arr={OPT_NAME}
        setss_select_arr={setss_name}
        />
        <PANEL jsx_element={<>{JSX_ELEMENT}</>}/>
    </>
}

export function TEST_SEARCH_OBJ(){
    const [ss_arr, setss_arr] = useReducer(
        act_arrname,
        {
            sort_mode:"SORT",
            sort_attr:"name",
            ss:oarr.sort_arrobj(CHARACTERS, "SORT", "name") as character_t[]
        } as ss_arrname_t<character_t[], keyof character_t>
    )
 
    const JSX_ARR = ss_arr.ss.map((item,index)=>{
        return <div key={index}>
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
            attrs={["skill","age"]}
            is_undo={false}
        />
        </div>
    })
    return <>
    <SEARCH_OBJ 
        input_arr={{ss:ss_arr, setss:setss_arr}}
        jsx_additional={JSX_ARR}
    />
    </>
}
