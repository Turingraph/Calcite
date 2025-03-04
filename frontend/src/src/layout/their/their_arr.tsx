import React, { useLayoutEffect } from "react";
import * as a from "../../type/alias"
import * as uarr from "../../utility/utility_arr"
import { their_t } from "../../type/obj";
import PANEL from "../../components/asset/panel";
import SEARCH_OBJ from "../../components/opt/search_obj";
import BUTTON_CLICK from "../../components/button/button_click";
import { file_to_url } from "../../utility/convert";

export default function THEIR_ARR({
    ss_arr,
    setss_select
}:{
    ss_arr:a.use_state_t<their_t[]>
    setss_select:a.setss_t<number>
}){
    // useLayoutEffect(()=>{
    //     const UPDATE_ARR = uarr.sort_arr_attr(ss_arr.ss, "name", "SORT")
    //     ss_arr.setss(UPDATE_ARR)
    // })
    const JSX_ADDITIONAL = ss_arr.ss.map((item, index)=>{
        return <div key={index}>
            <BUTTON_CLICK
                name={"open" as a.name}
                func_event={(()=>{setss_select(index)}) as a.func_event}
            />
            <img src={file_to_url(item.img)} style={{height:200}}/>
        </div>
    })
    return <>
    <PANEL jsx_element={<>
        <SEARCH_OBJ
            arr={ss_arr}
            jsx_additional={JSX_ADDITIONAL}
        />
        </>}/>
    </>
}