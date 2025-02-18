import React, {useState} from "react";
import * as a from "../../type/alias"
import Obj_self from "../../components/obj/obj_self";
import Button_click, {button_click_t} from "../../components/button/button_click";
import { Opt_to_jsx_arr } from "../../utils/convert";
import Search_bar from "../../components/opt/search_bar";
import Panel from "../../components/asset/panel";
import { img_t } from "../../type/obj";
import { opt_mode_uit } from "../../components/opt/type";
import Obj_bool from "../../components/obj/obj_bool";

export default function Display_multi_imgs(){
    const [ss_img_arr, setss_img_arr] = useState<img_t[]>([])
    const [ss_img_filter, setss_img_filter] = useState<(opt_mode_uit|undefined)[]>([])
    const [ss_select, setss_select] = useState<number|undefined>(undefined)
    
    const BUTTON_ARR:button_click_t[] = [
        {
            name:"open folder" as a.name,
            func_event:(()=>undefined) as a.func_event
        },
        {
            name:"open image" as a.name,
            func_event:(()=>undefined) as a.func_event
        },
        {
            name:"save" as a.name,
            func_event:(()=>undefined) as a.func_event
        },
        {
            name:"reset image" as a.name,
            func_event:(()=>undefined) as a.func_event
        },
        {
            name:"activate image processing" as a.name,
            func_event:(()=>undefined) as a.func_event
        },
        {
            name:"activate ocr" as a.name,
            func_event:(()=>undefined) as a.func_event
        },
        {
            name:"activate dilate image processing" as a.name,
            func_event:(()=>undefined) as a.func_event
        },
        {
            name:"select all images" as a.name,
            func_event:(()=>undefined) as a.func_event
        },
        {
            name:"unselect all image" as a.name,
            func_event:(()=>undefined) as a.func_event
        },
        {
            name:"help" as a.name,
            func_event:(()=>undefined) as a.func_event
        },
    ]
    const JSX_BUTTON_ARR = Opt_to_jsx_arr({arr:BUTTON_ARR,jsx_element:Button_click})
    const JSX_SEARCH_IMG = <Search_bar
        opt_name={"Search image" as a.opt_name}
        read_only_arr={ss_img_arr}
        select_arr={{
            ss:ss_img_filter, 
            setss:setss_img_filter
        }}
        attr={"name"}
    />
    const JSX_IMG_ARR = ss_img_filter.map((item, index)=>{
        if(item != undefined){
            return <>
                <Obj_self
                arr={{
                    ss:ss_img_arr, 
                    setss:setss_img_arr
                }}
                ss_select={{ss:ss_select, setss:setss_select}}
                this_item={item.index}
                jsx_additional={
                    <>
                    <Obj_bool 
                    arr={{
                        ss:ss_img_arr, 
                        setss:setss_img_arr
                    }}
                    this_item={item.index}
                    attr={"select"}
                    />
                    </>
                }
                />
            </>
        }
    })
    return <>
        {JSX_BUTTON_ARR}
        {JSX_SEARCH_IMG}
        <Panel jsx_element={<>{JSX_IMG_ARR}</>}/>
    </>
}