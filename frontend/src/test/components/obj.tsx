import React, {useState, JSX} from "react";
import * as a from '../../type/alias'
import Obj_self from "../../components/obj/obj_self";
import Opt_exist_arr from "../../components/opt/opt_exist_arr";
import Obj_str, { obj_str_uit } from "../../components/obj/obj_str";
import Obj_bool from "../../components/obj/obj_bool";
import { character_t } from "../constant";
import { CHARACTERS } from "../constant";
import Panel from "../../components/asset/panel";
import { Str_to_h } from "../../utils/convert";
import Test_usestate from "../../tutorial/utils/test_usestate";
import Opt_input from "../../components/opt/opt_input";
import { Test_opt_input } from "./opt";
import { OPT_NAME } from "../constant";
import Button_click from "../../components/button/button_click";
import { method_delete_item, method_push_arr } from "../../utils/arr_method";
import { Test_opt_exist_arr } from "./opt";
import {Obj_str_ctrl_00, Obj_str_ctrl_01, Obj_str_err} from "../../tutorial/err/obj_str_err";

// export function Test_obj_self(){
//     const [ss_arr, setss_arr] = useState<character_t[]>(CHARACTERS)
//     const [ss_select, setss_select] = useState<number|undefined>(undefined)
//     const JSX_ARR = ss_arr.map((item,index)=>{
//         return <div key={index}>
//             <Str_to_h opt_name={item.name}/>
//             <Obj_self 
//             arr = {{ss:ss_arr, setss:setss_arr}}
//             this_item={index}
//             ss_select={{ss:ss_select, setss:setss_select}}
//             jsx_additional={<>
//             <Obj_bool
//                 name={"rule64" as a.name}
//                 arr={{ss:ss_arr, setss:setss_arr}}
//                 this_item={index}
//                 attr={"is_male"}
//                 ui_mode={"checkbox"}
//             />
//             </>}
//             /></div>
//     })
//     return <>
//     {JSX_ARR}
//     </>
// }


export function Test_obj_self(){
    const [ss_arr, setss_arr] = useState<character_t[]>(CHARACTERS)
    const [ss_select, setss_select] = useState<number|undefined>(undefined)
    const [ss_name, setss_name] = useState<number>(0)
    const [ss_arrn, setss_arrn] = useState<number[]>([0])
    const AVAILABLE_OPTS = CHARACTERS.map((item)=>{return item.name}) as string[]

    const INTERFACE_USE_STATE:a.use_state_t<character_t[]> = {
        ss:ss_arr,
        setss:setss_arr
    }
    const JSX_ARR = ss_arr.map((item,index)=>{
        const INTERFACE_OBJ_STR:obj_str_uit<character_t> = {
            opt_name:item.name as a.opt_name,
            arr:INTERFACE_USE_STATE,
            this_item:index,
            attrs:["skill"],
            is_undo:false
        }
        return <div key={index}>
            <Str_to_h opt_name={item.name}/>
            <Obj_self 
            arr = {{ss:ss_arr, setss:setss_arr}}
            this_item={index}
            ss_select={{ss:ss_select, setss:setss_select}}
            jsx_additional={<>
            {/* <Opt_input
                opt_name={"Your name is " + OPT_NAME[ss_name] as a.opt_name}
                available_opts={OPT_NAME}
                ss_mode={{ss:ss_name, setss:setss_name}}
                is_search_bar = {true}
            /> */}
            {/* <Obj_bool
                name={"rule64" as a.name}
                arr={{ss:ss_arr, setss:setss_arr}}
                this_item={index}
                attr={"is_male"}
                ui_mode={"checkbox"}
            /> */}
            {/* {Obj_str(INTERFACE_OBJ_STR)} */}
            {/* <Opt_exist_arr 
                    opt_name={"List" as a.opt_name}
                    exist_opts={{ss:ss_arrn, setss:setss_arrn}}
                    available_opts={AVAILABLE_OPTS}
                    /> */}
            {/* <Obj_str_ctrl arr={ss_arr}/> */}
            </>}
            /></div>
    })
    return <>
    {JSX_ARR}
    </>
}

export function Test_obj_str(){
    const [ss_arr, setss_arr] = useState<character_t[]>(CHARACTERS)
    function func_delete_arr(){
        if(ss_arr.length > 1){
            method_delete_item(0, {ss:ss_arr, setss:setss_arr})
        }
    }
    function func_create_arr(){
        if(ss_arr.length > 0){
            method_push_arr(
                ss_arr[0], 
                {ss:ss_arr, setss:setss_arr})
        }
    }
    const INTERFACE_USE_STATE:a.use_state_t<character_t[]> = {
        ss:ss_arr,
        setss:setss_arr
    }
    const JSX_ELEMENTS:JSX.Element[] = ss_arr.map((item,index)=>{
        return <div key={index}>
            <Obj_str
                opt_name={item.name as a.opt_name}
                arr={INTERFACE_USE_STATE}
                this_item={index}
                attrs={["skill"]}
                is_undo={false}
                />
        </div>
    })
    return <>
    <Button_click
        name={"delete" as a.name}
        func_event={(()=>{func_delete_arr()}) as a.func_event}
    />
    <Button_click
        name={"create" as a.name}
        func_event={(()=>{func_create_arr()}) as a.func_event}
    />
    <Panel jsx_element={<>
        {JSX_ELEMENTS}
    </>}/>
    </>
}

export function Test_obj_str_01(){
    const [ss_arr, setss_arr] = useState<character_t[]>(CHARACTERS)
    function func_delete_arr(){
        if(ss_arr.length > 1){
            method_delete_item(0, {ss:ss_arr, setss:setss_arr})
        }
    }
    function func_create_arr(){
        if(ss_arr.length > 1){
            method_push_arr(
                ss_arr[0], 
                {ss:ss_arr, setss:setss_arr})
        }
    }
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
        func_event={(()=>{func_delete_arr()}) as a.func_event}
    />
    <Button_click
        name={"create" as a.name}
        func_event={(()=>{func_create_arr()}) as a.func_event}
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
        func_event={(()=>{method_delete_item(0, {ss:ss_arr, setss:setss_arr})}) as a.func_event}
    />
    <Button_click
        name={"create" as a.name}
        func_event={(()=>{method_push_arr(
            ss_arr[0], 
            {ss:ss_arr, setss:setss_arr})}) as a.func_event}
    />
    <Panel jsx_element={<>
        {JSX_ARR}
    </>}/>
    </>
}
