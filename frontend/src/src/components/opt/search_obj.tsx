import React from "react"
import { JSX, useReducer, useState } from "react"
import act_arrobj, { use_arrname_t } from "../../array/act_arrobj"
import { arr_to_opt } from "../../convert/arr"
import * as a from "../../type/alias"
import PANEL from "../asset/panel"
import OBJ_SELF from "../obj/obj_self"
import SEARCH_BAR from "./search_bar"

export default function SEARCH_OBJ<t extends {name:a.name}[]>({
    input_arr,
    jsx_additional = undefined,
}:{
    input_arr:use_arrname_t<t>
    jsx_additional?:(JSX.Element|undefined)[]|undefined
}){
    const [ss_show_arr, setss_show_arr] = useReducer(
        act_arrobj,
        arr_to_opt(input_arr.ss)
    )
    const [ss_select, setss_select] = useState<number|undefined>(undefined)

    const JSX_ARR = ss_show_arr.map((item,index)=>{
        if(item !== undefined && input_arr.ss[item.value] !== undefined){
            let jsx_item = undefined
            if (jsx_additional !== undefined && jsx_additional.length > item.value){
                jsx_item = jsx_additional[item.value]
            }
            return <div key={index}>
                <OBJ_SELF 
                input_arr = {input_arr}
                this_item={item.value}
                ss_select={{ss:ss_select, setss:setss_select}}
                jsx_additional={jsx_item ? jsx_item : <></>}
                />
                <hr/>
                </div>
        }
        return undefined
    })
    return <>
    <SEARCH_BAR 
    opt_name={"Search bar" as a.opt_name}
    read_only_arr={input_arr.ss}
    setss_select_arr={setss_show_arr}
    />
    <PANEL jsx_element={<>{JSX_ARR}</>}/>
    </>
}