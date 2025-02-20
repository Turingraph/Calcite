import {useState, JSX} from "react";
import * as a from '../../type/alias'
import Obj_self from "../../components/obj/obj_self";
import Obj_str from "../../components/obj/obj_str";
import Obj_bool from "../../components/obj/obj_bool";
import { character_t } from "../constant";
import { CHARACTERS } from "../constant";
import Panel from "../../components/asset/panel";
import { Str_to_h } from "../../utils/convert";
import Button_click from "../../components/button/button_click";
import { method_delete_item, method_push_arr } from "../../utils/arr_method";

function func_delete_arr<t>(arr:a.use_state_t<t[]>){
    if(arr.ss.length > 1){
        method_delete_item(0, arr)
    }
}
function func_create_arr<t>(arr:a.use_state_t<t[]>){
    if(arr.ss.length > 0){
        method_push_arr(
            JSON.parse(JSON.stringify(arr.ss[0])),
            arr)
    }
}


export function Test_obj_self(){
    const [ss_arr, setss_arr] = useState<character_t[]>(CHARACTERS)
    const [ss_select, setss_select] = useState<number|undefined>(undefined)

    const JSX_ARR = ss_arr.map((item,index)=>{
        return <div key={index}>
            <Str_to_h opt_name={item.name}/>
            <Obj_self 
            arr = {{ss:ss_arr, setss:setss_arr}}
            this_item={index}
            ss_select={{ss:ss_select, setss:setss_select}}
            jsx_additional={<>
            <Obj_bool
                name={"rule64" as a.name}
                arr={{ss:ss_arr, setss:setss_arr}}
                this_item={index}
                attr={"is_male"}
                ui_mode={"checkbox"}
            />
            <Obj_str
                opt_name={item.name as a.opt_name}
                arr={{ss:ss_arr, setss:setss_arr}}
                this_item={index}
                attrs={["skill"]}
                is_undo={false}
            />
            </>}
            /></div>
    })
    return <>
    {JSX_ARR}
    </>
}

export function Test_obj_str(){
    const [ss_arr, setss_arr] = useState<character_t[]>(CHARACTERS)
    const JSX_ELEMENTS:JSX.Element[] = ss_arr.map((item,index)=>{
        return <div key={index}>
            <Obj_str
                opt_name={item.name as a.opt_name}
                arr={{ss:ss_arr,setss:setss_arr}}
                this_item={index}
                attrs={["skill"]}
                is_undo={false}
                />
        </div>
    })
    return <>
    <Button_click
        name={"delete" as a.name}
        func_event={(()=>{func_delete_arr({ss:ss_arr, setss:setss_arr})}) as a.func_event}
    />
    <Button_click
        name={"create" as a.name}
        func_event={(()=>{func_create_arr({ss:ss_arr, setss:setss_arr})}) as a.func_event}
    />
    <Panel jsx_element={<>
        {JSX_ELEMENTS}
    </>}/>
    </>
}

export function Test_obj_str_01(){
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
    <Button_click
        name={"delete" as a.name}
        func_event={(()=>{func_delete_arr({ss:ss_arr, setss:setss_arr})}) as a.func_event}
    />
    <Button_click
        name={"create" as a.name}
        func_event={(()=>{func_create_arr({ss:ss_arr, setss:setss_arr})}) as a.func_event}
    />
    <Panel jsx_element={<>
        {JSX_ELEMENTS}
    </>}/>
    </>
}

export function Test_obj_bool(){
    const [ss_arr, setss_arr] = useState<character_t[]>(CHARACTERS)
    const JSX_ARR = ss_arr.map((item, index)=>{
        return <div key={index}>
        <h1>Name: {item.name}</h1>
        <h1>Gander: {item.is_male ? "Male" : "Female"}</h1>
        <Obj_bool
            name={"rule64" as a.name}
            arr={{ss:ss_arr, setss:setss_arr}}
            this_item={index}
            attr={"is_male"}
            ui_mode={"checkbox"}
            />
        </div>
    })
    return <>
    <Button_click
        name={"delete" as a.name}
        func_event={(()=>{func_delete_arr({ss:ss_arr, setss:setss_arr})}) as a.func_event}
    />
    <Button_click
        name={"create" as a.name}
        func_event={(()=>{func_create_arr({ss:ss_arr, setss:setss_arr})}) as a.func_event}
    />
    <Panel jsx_element={<>
        {JSX_ARR}
    </>}/>
    </>
}
