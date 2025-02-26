import { useState, useLayoutEffect, useRef, JSX } from "react"
import * as a from "../../type/alias"
import { opt_mode_uit } from "./type"
import { STR_TO_H, str_to_optmode } from "../../utils/convert"
import OBJ_SELF from "../obj/obj_self"
import SEARCH_BAR from "./search_bar"
import PANEL from "../asset/panel"

export default function SEARCH_OBJ<t extends {name:a.name}>({
    arr,
    jsx_additional = undefined,
    auto_update_arr = true
}:{
    arr:a.use_state_t<t[]>
    jsx_additional?:(JSX.Element|undefined)[]|undefined
    auto_update_arr?:boolean
}){
    const [ss_show_arr, setss_show_arr] = useState<opt_mode_uit[]>(
        str_to_optmode(arr.ss)
    )
    const [ss_select, setss_select] = useState<number|undefined>(undefined)
    const ref_show_arr: React.RefObject<opt_mode_uit[]|undefined> = useRef(ss_show_arr)

    // Update ss_show_arr every time the arr.ss is updated.
    useLayoutEffect(()=>{
        setss_show_arr(str_to_optmode(arr.ss))
    },[arr])

    const JSX_ARR = ss_show_arr.map((item,index)=>{
        if(item !== undefined){
            let jsx_item = undefined
            if (jsx_additional !== undefined && jsx_additional.length > item.index){
                jsx_item = jsx_additional[item.index]
            }
            return <div key={index}>
                <STR_TO_H opt_name={item.name}/>
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