import React, { JSX, useState } from "react";
import obj_t from "../../../prev_src/type/object/obj_t";
import obj_tabs_t from "../../../prev_src/composite_ui/obj_tabs/type";
import Search_bar from "../../../prev_src/composite_ui/search_bar/search_bar";
import State_button from "../ui/state_button";
import Str_to_h from "../../utils/str_to_h";
import Color_ui from "../ui/color_ui";


export default function Obj_tabs<t extends obj_t>(
{
    ss_arr,
    setss_arr,
    ss_jsx_arr
}:obj_tabs_t<t>
){
    const[ss_select_tab, setss_select_tab] = useState<number|undefined>(0)
    const[ss_read_arr, setss_read_arr] = useState<t[]>(ss_arr)
    const[ss_ui_mode, setss_ui_mode] = useState<number>(0)
    const normal_rgb = [255,255,255]
    const select_rgb = [255,0,0]
    function func_rename(index:number){
        setss_select_tab(index)
        setss_ui_mode(1)
    }
    function func_select(index:number){
        setss_select_tab(index)
        setss_arr
    }
    function func_copy(index:number){
        setss_select_tab(index)
    }
    function func_delete(index:number){
        setss_select_tab(index)
        setss_ui_mode(2)
    }
    let jsx_obj_tabs = ss_arr.map((i,index)=>{
        if (ss_read_arr.includes(i)){
            if (ss_ui_mode == 1 && ss_select_tab == index){
                return <></>
            }
            if (ss_ui_mode == 2 && ss_select_tab == index){
                return <></>
            }
            else{            
                let rgb = normal_rgb;
                if (i.select == true){
                    rgb = select_rgb;
                }
                let jsx_obj_tab = <>
                    <Str_to_h title={i.title}/>
                    <State_button title={"rename"} input_function={()=>{func_rename(index)}}/>
                    <State_button title={"select"} input_function={()=>{func_select(index)}}/>
                    <State_button title={"copy"}   input_function={()=>{  func_copy(index)}}/>
                    <State_button title={"delete"} input_function={()=>{func_delete(index)}}/>
                    {ss_jsx_arr[index]}
                </>
                return <Color_ui component={jsx_obj_tab} rgb={rgb}
            />
        }
        }
        return <></>
    })
    return <>
        <Search_bar 
            title = "Search" 
            arr={ss_arr} 
            reading_arr={setss_read_arr}
        />
        {jsx_obj_tabs}
    </>
}
