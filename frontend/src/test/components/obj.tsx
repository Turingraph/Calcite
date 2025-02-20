import {useState, JSX} from "react";
import * as a from '../../type/alias'
import OBJ_SELF from "../../components/obj/obj_self";
import OBJ_STR from "../../components/obj/obj_str";
import OBJ_BOOL from "../../components/obj/obj_bool";
import { character_t } from "../constant";
import { CHARACTERS } from "../constant";
import PANEL from "../../components/asset/panel";
import { STR_TO_H } from "../../utils/convert";
import BUTTON_CLICK from "../../components/button/button_click";
import { method_delete_item, method_push_arr } from "../../utils/arr_method";
import { handle_copy } from "../../utils/utils";

function func_delete_arr<t>(arr:a.use_state_t<t[]>){
    if(arr.ss.length > 1){
        method_delete_item(0, arr)
    }
}
function func_create_arr<t>(arr:a.use_state_t<t[]>){
    if(arr.ss.length > 0){
        method_push_arr(
            handle_copy(arr.ss[0]),
            arr)
    }
}


export function TEST_OBJ_SELF(){
    const [ss_arr, setss_arr] = useState<character_t[]>(CHARACTERS)
    const [ss_select, setss_select] = useState<number|undefined>(undefined)

    const JSX_ARR = ss_arr.map((item,index)=>{
        return <div key={index}>
            <STR_TO_H opt_name={item.name}/>
            <OBJ_SELF 
            arr = {{ss:ss_arr, setss:setss_arr}}
            this_item={index}
            ss_select={{ss:ss_select, setss:setss_select}}
            jsx_additional={<>
            <OBJ_BOOL
                name={"rule64" as a.name}
                arr={{ss:ss_arr, setss:setss_arr}}
                this_item={index}
                attr={"is_male"}
                ui_mode={"checkbox"}
            />
            <OBJ_STR
                opt_name={item.name as a.opt_name}
                arr={{ss:ss_arr, setss:setss_arr}}
                this_item={index}
                attrs={["skill"]}
                is_undo={false}
            />
            </>}
            />
            <hr/>
            </div>
    })
    return <>
    {JSX_ARR}
    </>
}

export function TEST_OBJ_STR(){
    const [ss_arr, setss_arr] = useState<character_t[]>(CHARACTERS)
    const JSX_ELEMENTS:JSX.Element[] = ss_arr.map((item,index)=>{
        return <div key={index}>
            <OBJ_STR
                opt_name={item.name as a.opt_name}
                arr={{ss:ss_arr,setss:setss_arr}}
                this_item={index}
                attrs={["skill"]}
                is_undo={false}
                />
            <hr/>
        </div>
    })
    return <>
    <BUTTON_CLICK
        name={"delete" as a.name}
        func_event={(()=>{func_delete_arr({ss:ss_arr, setss:setss_arr})}) as a.func_event}
    />
    <BUTTON_CLICK
        name={"create" as a.name}
        func_event={(()=>{func_create_arr({ss:ss_arr, setss:setss_arr})}) as a.func_event}
    />
    <PANEL jsx_element={<>
        {JSX_ELEMENTS}
    </>}/>
    </>
}

export function TEST_OBJ_STR_01(){
    const [ss_arr, setss_arr] = useState<character_t[]>(CHARACTERS)
    const JSX_ELEMENTS:JSX.Element[] = ss_arr.map((item,index)=>{
        return <div key={index}>
            {/* {Obj_str_ctrl_00()} 
                Error
                Have Hook
            */}
            {/* {Obj_str_ctrl_01({arr:ss_arr})} 
                Not Error
                No Hook
            */}
            {/* {Obj_str_err({arr:ss_arr})} 
                Error
                Have Hook
            */}
            {/* <Obj_str_ctrl_00/> 
                Not Error
                Have Hook
            */}
            {/* <Obj_str_ctrl_01 arr={ss_arr}/> 
                Not Error
                No Hook
            */}
            {/* <Obj_str_err arr={ss_arr}/> 
                Not Error
                Have Hook
            */}
        </div>
    })
    return <>
    <BUTTON_CLICK
        name={"delete" as a.name}
        func_event={(()=>{func_delete_arr({ss:ss_arr, setss:setss_arr})}) as a.func_event}
    />
    <BUTTON_CLICK
        name={"create" as a.name}
        func_event={(()=>{func_create_arr({ss:ss_arr, setss:setss_arr})}) as a.func_event}
    />
    <PANEL jsx_element={<>
        {JSX_ELEMENTS}
    </>}/>
    </>
}

export function TEST_OBJ_BOOL(){
    const [ss_arr, setss_arr] = useState<character_t[]>(CHARACTERS)
    const JSX_ARR = ss_arr.map((item, index)=>{
        return <div key={index}>
        <h1>Name: {item.name}</h1>
        <h1>Gander: {item.is_male ? "Male" : "Female"}</h1>
        <OBJ_BOOL
            name={"rule64" as a.name}
            arr={{ss:ss_arr, setss:setss_arr}}
            this_item={index}
            attr={"is_male"}
            ui_mode={"checkbox"}
            />
            <hr/>
        </div>
    })
    return <>
    <BUTTON_CLICK
        name={"delete" as a.name}
        func_event={(()=>{func_delete_arr({ss:ss_arr, setss:setss_arr})}) as a.func_event}
    />
    <BUTTON_CLICK
        name={"create" as a.name}
        func_event={(()=>{func_create_arr({ss:ss_arr, setss:setss_arr})}) as a.func_event}
    />
    <PANEL jsx_element={<>
        {JSX_ARR}
    </>}/>
    </>
}
