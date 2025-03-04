import { useState, JSX, useLayoutEffect } from "react"
import * as a from "../../type/alias"
import { opt_mode_uit } from "./type"
import { str_to_optmode } from "../../utility/convert"
import OBJ_SELF from "../obj/obj_self"
import SEARCH_BAR from "./search_bar"
import PANEL from "../asset/panel"
import * as uarr from '../../utility/utility_arr'

export default function SEARCH_OBJ<t extends {name:a.name}>({
    arr,
    jsx_additional = undefined,
}:{
    arr:a.use_state_t<t[]>
    jsx_additional?:(JSX.Element|undefined)[]|undefined
}){
    const [ss_show_arr, setss_show_arr] = useState<opt_mode_uit[]>(
        str_to_optmode(arr.ss)
    )
    const [ss_select, setss_select] = useState<number|undefined>(undefined)

    useLayoutEffect(()=>{
        arr.setss(((prev:t[]) => uarr.sort_arr_name(prev, "SORT")) as unknown as t[])
    })

    const JSX_ARR = ss_show_arr.map((item,index)=>{
        if(item !== undefined && arr.ss[item.index] !== undefined){
            let jsx_item = undefined
            if (jsx_additional !== undefined && jsx_additional.length > item.index){
                jsx_item = jsx_additional[item.index]
            }
            return <div key={index}>
                <OBJ_SELF 
                arr = {arr}
                this_item={item.index}
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
    read_only_arr={arr.ss}
    setss_select_arr={setss_show_arr}
    />
    <PANEL jsx_element={<>{JSX_ARR}</>}/>
    </>
}