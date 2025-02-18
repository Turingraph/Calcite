import React, {useState} from "react";
import * as a from "../../type/alias"
import { box_t, BOXES_INPUT_ATTR, BOXES_DEFAULT_INPUT, boxes_input_attr_t } from "../../type/obj";
import Obj_self from "../../components/obj/obj_self";
import Obj_bool from "../../components/obj/obj_bool";
import { opt_mode_uit } from "../../components/opt/type";
import Search_bar from "../../components/opt/search_bar";
import Panel from "../../components/asset/panel";
import Obj_str, {obj_str_uit} from "../../components/obj/obj_str";

export default function Display_boxes(){
    const [ss_boxes, setss_boxes] = useState<box_t[]>([])
    const [ss_boxes_filter, setss_boxes_filter] = useState<(opt_mode_uit|undefined)[]>([])
    const [ss_select, setss_select] = useState<number|undefined>(undefined)
    const JSX_SEARCH_BAR = <Search_bar
        opt_name={"Search boxes" as a.opt_name}
        read_only_arr={ss_boxes}
        select_arr={{
            ss:ss_boxes_filter,
            setss:setss_boxes_filter
        }}
        attr={"name"}
    />
    const JSX_BOXES = ss_boxes_filter.map((item,index)=>{
        if (item != undefined){
        const INTERFACE_BOX:obj_str_uit<box_t> = {
            opt_name:"attribute of box" as a.opt_name,
            arr:{ss:ss_boxes, setss:setss_boxes},
            this_item:item.index,
            attrs:BOXES_INPUT_ATTR as boxes_input_attr_t[],
        }
        return <><Obj_self
            arr={{ss:ss_boxes, setss:setss_boxes}}
            ss_select={{ss:ss_select, setss:setss_select}}
            this_item={item.index}
            jsx_additional={<>
                <Obj_bool
                    name={"view" as a.name}
                    arr={{ss:ss_boxes, setss:setss_boxes}}
                    this_item={item.index}
                    attr={"view"}
                    ui_mode={"checkbox"}
                />
                <Obj_bool
                    name={"ocr" as a.name}
                    arr={{ss:ss_boxes, setss:setss_boxes}}
                    this_item={item.index}
                    attr={"ocr"}
                    ui_mode={"checkbox"}
                />
                {Obj_str(INTERFACE_BOX)}
            </>}
        /></>}
    })
    return <>
        {JSX_SEARCH_BAR}
        <Panel jsx_element = {<>{JSX_BOXES}</>}/>
    </>
}