import React, {useState} from "react";
import * as a from "../../type/alias"
import { box_t, BOXES_INPUT_ATTR, BOXES_DEFAULT_INPUT, boxes_input_attr_t } from "../../type/obj";
import Factory_obj from "../../components/factory/factory_obj";
import Select_checkbox from "../../components/factory/select_checkbox";
import { opt_mode_uit } from "../../components/search/type";
import Search_bar from "../../components/search/search_bar";
import Panel from "../../components/asset/panel";
import Input_item_attr, {input_item_attr_uit} from "../../components/factory/input_item_attr";

export default function Display_boxes(){
    const [ss_boxes, setss_boxes] = useState<box_t[]>([])
    const [ss_boxes_filter, setss_boxes_filter] = useState<(opt_mode_uit|undefined)[]>([])

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
        const INTERFACE_BOX:input_item_attr_uit<box_t, boxes_input_attr_t> = {
            opt_name:"attribute of box" as a.opt_name,
            arr:{ss:ss_boxes, setss:setss_boxes},
            this_item:item.index,
            default_attr_values:BOXES_DEFAULT_INPUT as (string|number)[],
            attrs:BOXES_INPUT_ATTR as boxes_input_attr_t[],
        }
        return <><Factory_obj
            arr={{ss:ss_boxes, setss:setss_boxes}}
            index={item.index}
            jsx_additional={<>
                <Select_checkbox
                    name={"view" as a.name}
                    arr={{ss:ss_boxes, setss:setss_boxes}}
                    index={item.index}
                    attr={"view"}
                />
                <Select_checkbox
                    name={"ocr" as a.name}
                    arr={{ss:ss_boxes, setss:setss_boxes}}
                    index={item.index}
                    attr={"ocr"}
                />
                {Input_item_attr(INTERFACE_BOX)}
            </>}
        /></>}
    })
    return <>
        {JSX_SEARCH_BAR}
        <Panel jsx_element = {<>{JSX_BOXES}</>}/>
    </>
}