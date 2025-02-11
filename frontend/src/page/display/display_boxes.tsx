import React, {useState} from "react";
import * as a from "../../type/alias"
import { box_t } from "../../type/obj";
import Factory_obj from "../../components/factory/factory_obj";
import Select_button from "../../components/button/select_button";
import { opt_mode_t } from "../../type/input";
import Search_bar from "../../components/search/search_bar";
import Panel from "../../components/asset/panel";
import Combine_input from "../../components/input/combine_input";
import { combine_input_t } from "../../type/input";

export default function Factory_boxes({
    //
}:{
    //
}){
    const [ss_boxes, setss_boxes] = useState<box_t[]>([])
    const [ss_boxes_filter, setss_boxes_filter] = useState<(opt_mode_t|undefined)[]>([])
    let jsx_search_bar = <Search_bar
        opt_name={"Search boxes" as a.opt_name}
        read_only_arr={ss_boxes}
        search_arr={{
            ss:ss_boxes_filter,
            setss:setss_boxes_filter
        }}
        property={"name"}
    />
    let jsx_boxes = ss_boxes_filter.map((item,index)=>{
        if (item != undefined){
        // I will add input form later for each box.
        // let interface_box:combine_input_t = {
        //     opt_name:"attribute of box" as a.opt_name,
        //     input_str:[
        //         {
        //             opt_name:"r" as a.opt_name,
        //             input:{{ss:}}
        //         }
        //     ]
        // }
        return <><Factory_obj
            obj_arr={{ss:ss_boxes, setss:setss_boxes}}
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