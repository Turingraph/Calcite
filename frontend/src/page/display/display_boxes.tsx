import React, {useState} from "react";
import * as a from "../../type/alias"
import { box_t, boxes_input_key, boxes_default_input, boxes_input_key_t } from "../../type/obj";
import Factory_obj from "../../components/factory/factory_obj";
import Select_checkbox from "../../components/factory/select_checkbox";
import { opt_mode_uit } from "../../type/input_ui";
import Search_bar from "../../components/search/search_bar";
import Panel from "../../components/asset/panel";
import Input_item_key, {input_item_key_uit} from "../../components/factory/input_item_key";

export default function Display_boxes({
    //
}:{
    //
}){
    const [ss_boxes, setss_boxes] = useState<box_t[]>([])
    const [ss_boxes_filter, setss_boxes_filter] = useState<(opt_mode_uit|undefined)[]>([])

    let jsx_search_bar = <Search_bar
        opt_name={"Search boxes" as a.opt_name}
        read_only_arr={ss_boxes}
        select_arr={{
            ss:ss_boxes_filter,
            setss:setss_boxes_filter
        }}
        key={"name"}
    />
    let jsx_boxes = ss_boxes_filter.map((item,index)=>{
        if (item != undefined){
        let interface_box:input_item_key_uit<box_t, boxes_input_key_t> = {
            opt_name:"attribute of box" as a.opt_name,
            arr:{ss:ss_boxes, setss:setss_boxes},
            this_item:item.index,
            default_key_values:boxes_default_input as (string|number)[],
            keys:boxes_input_key as boxes_input_key_t[],
        }
        return <><Factory_obj
            arr={{ss:ss_boxes, setss:setss_boxes}}
            index={item.index}
            jsx_additional={<>
                <Select_checkbox
                    name={"view" as a.name}
                    arr={{ss:ss_boxes, setss:setss_boxes}}
                    index={item.index}
                    key={"view"}
                />
                <Select_checkbox
                    name={"ocr" as a.name}
                    arr={{ss:ss_boxes, setss:setss_boxes}}
                    index={item.index}
                    key={"ocr"}
                />
                {Input_item_key(interface_box)}
            </>}
        /></>}
    })
    return <>
        {jsx_search_bar}
        <Panel jsx_element = {<>{jsx_boxes}</>}/>
    </>
}