import React, {useState, JSX} from "react";
import * as a from '../../type/alias'
import Obj_self from "../../components/obj/obj_self";
import Opt_exist_arr from "../../components/opt/opt_exist_arr";
import Obj_str, { obj_str_uit } from "../../components/obj/obj_str";
import Obj_bool from "../../components/obj/obj_bool";
import { character_t } from "../utils/constant";
import { CHARACTERS } from "../utils/constant";

export function Test_obj_self(){
    const [ss_arr, setss_arr] = useState<character_t[]>(CHARACTERS)
    const JSX_ARR = ss_arr.map((item,index)=>{
        return <div key={index}><Obj_self 
            arr = {{ss:ss_arr, setss:setss_arr}}
            index={index}
            jsx_additional={<Obj_bool
                name={"rule64" as a.name}
                arr={{ss:ss_arr, setss:setss_arr}}
                index={index}
                attr={"is_male"}
            />}
            /></div>
    })
    return <>
    {JSX_ARR}
    </>
}

export function Test_obj_str(){
    const [ss_arr, setss_arr] = useState<character_t[]>(CHARACTERS)
    const INTERFACE_USE_STATE:a.use_state_t<character_t[]> = {
        ss:ss_arr,
        setss:setss_arr
    }
    const JSX_ELEMENTS:JSX.Element[] = ss_arr.map((item,index)=>{
        const INTERFACE_OBJ_STR:obj_str_uit<character_t> = {
            opt_name:item.name as a.opt_name,
            arr:INTERFACE_USE_STATE,
            this_item:index,
            attrs:["name","skill"],
            is_undo:false
        }
        return <div key={index}>{Obj_str(INTERFACE_OBJ_STR)}</div>
    })
    return <>
        {JSX_ELEMENTS}
    </>
}

export function Test_obj_bool(){
    const [ss_arr, setss_arr] = useState<character_t[]>(CHARACTERS)
    const JSX_ARR = ss_arr.map((item, index)=>{
        return <div key={index}>
        <h1>Name: {item.name}</h1>
        <h1>Gander: {item.is_male ? "Male" : "Female"}</h1>
        <Obj_bool
            name={"rule64" as a.name}
            arr={{ss:ss_arr, setss:setss_arr}}
            index={index}
            attr={"is_male"}
            />
        </div>
    })
    return <>
    {JSX_ARR}
    </>
}
