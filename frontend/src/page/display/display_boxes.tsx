import React, {useState} from "react";
import * as a from "../../type/alias"
import { box_t } from "../../type/obj";
import Factory_obj from "../../components/factory/factory_obj";
import Select_button from "../../components/factory/select_button";
import { opt_mode_uit } from "../../type/input_ui";
import Search_bar from "../../components/search/search_bar";
import Panel from "../../components/asset/panel";
import Input_item_key from "../../components/factory/input_item_key";

export default function Display_boxes({
    //
}:{
    //
}){
    const [ss_boxes, setss_boxes] = useState<box_t[]>([])
    const [ss_boxes_filter, setss_boxes_filter] = useState<(opt_mode_uit|undefined)[]>([])
    const [ss_p, setss_p] = useState<string|number>(0)
    const boxes_key = [
        "r",
        ""
    ]
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
        let interface_box = {
            opt_name:"attribute of box" as a.opt_name,
            input_str:[
                {
                    opt_name:"r" as a.opt_name,
                    input:{
                        ss:ss_boxes,
                        setss:setss_boxes
                    },
                    index:item.index,
                    key:"r"
                },
                {
                    opt_name:"g" as a.opt_name,
                    input:{
                        ss:ss_boxes,
                        setss:setss_boxes
                    },
                    index:item.index,
                    key:"g"
                },
                {
                    opt_name:"b" as a.opt_name,
                    input:{
                        ss:ss_boxes,
                        setss:setss_boxes
                    },
                    index:item.index,
                    key:"b"
                }
            ]
        }
        // let interface_box:combine_input_t = {
        //     opt_name:"attribute of box" as a.opt_name,
        //     input_str:[
        //         {
        //             opt_name:"r" as a.opt_name,
        //             input:{
        //                 opt_name:undefined as a.opt_name,
        //                 input:{ss:ss_p, setss:setss_p}},
        //             input_opt
        //         }
        //     ]
        // }
        return <><Factory_obj
            arr={{ss:ss_boxes, setss:setss_boxes}}
            index={item.index}
            jsx_additional={<>
                <Select_button
                    name={"view" as a.name}
                    arr={{ss:ss_boxes, setss:setss_boxes}}
                    index={item.index}
                />
            </>}
        /></>}
    })
    return <>
        {jsx_search_bar}
        <Panel jsx_element = {<>{jsx_boxes}</>}/>
    </>
}