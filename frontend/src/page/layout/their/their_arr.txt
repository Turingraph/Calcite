/* eslint-disable */
import React from "react";
import * as a from "../../type/alias"
import { their_t } from "../../type/obj";
import PANEL from "../../components/asset/panel";
import SEARCH_OBJ from "../../components/opt/search_obj";
import BUTTON_CLICK from "../../components/button/button_click";

export default function THEIR_ARR({
    ss_arr,
    setss_select
}:{
    ss_arr:a.use_state_t<their_t[]>
    setss_select:a.setss_t<number>
}){
    const JSX_ADDITIONAL = ss_arr.ss.map((item, index)=>{
        return <div key={index}>
            <BUTTON_CLICK
                name={"open" as a.name}
                func_event={(()=>{setss_select(index)}) as a.func_event}
            />
            <img 
                src={item.img} 
                // https://stackoverflow.com/questions/43812733/
                // what-does-this-warning-message-mean-img-elements-must-have-an-alt-prop-either
                alt="ocr input" 
                style={{height:200}}
            />
        </div>
    })
    return <>
    {/* <PANEL jsx_element={<>
        <SEARCH_OBJ
            arr={ss_arr}
            jsx_additional={JSX_ADDITIONAL}
        />
        </>}/> */}
    </>
}