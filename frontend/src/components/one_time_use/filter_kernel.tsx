import React, {useEffect, useState} from "react";
import Button_click from "../button/button_click";
import * as a from "../../type/alias"
import Panel from "../asset/panel";
import Input_form from "../input/input_form";
import {Str_to_h} from "../../utils/convert";
import { method_update_item } from "../../utils/arr_method";
import Opt_input from "../opt/opt_input";

// img_process/kernel_2d.py/def sharp_kernel_2d

export function func_sharp_center(arr:number[]){
    let center_coef = 1
    let center_px = 0
    for(let i = 0; i < arr.length; i++){
        let j = arr.length - i - 1
        center_coef += 2
        center_px += (center_coef * 2 + (center_coef - 2) * 2) * arr[j]
    }
    center_px *= -1
    center_px += 1
    return center_px
}

export function np_one(w:number,h:number){
    let kernel:number[][] = [[]]
    for(let i = 0; i < h; i++){
        let vec:number[] = []
        for(let j = 0; j < w; j++){
            vec.push(1)
        }
        kernel.push(vec)
    }
    return kernel
}

export function s_times_vector(s:number,vec:number[]){
    for(let i = 0; i < vec.length; i++){
        vec[i] *= s
    }
}

export function func_rect_kernel(arr:number[], center_px:number){
    const KSIZE = arr.length * 2 + 1
    const KERNEL = np_one(KSIZE, KSIZE)
    for(let i = 0; i < arr.length; i++){
        let j = KSIZE - i - 1
        s_times_vector(arr[i],KERNEL[i])
        s_times_vector(arr[i],KERNEL[j])
        for(let q = 0; q < i; q++){
            let p = KSIZE - q - 1
            KERNEL[i][q] = arr[q]
            KERNEL[i][p] = arr[q]
            KERNEL[j][q] = arr[q]
            KERNEL[j][p] = arr[q]
        }
    }
    for(let i = 0; i < arr.length; i++){
        let j = KSIZE - i - 1
        KERNEL[arr.length][i] = arr[i]
        KERNEL[arr.length][j] = arr[i]
    }
    KERNEL[arr.length][arr.length] = center_px
    return KERNEL
}

export function func_line_kernel(arr:number[], is_x:boolean, center_px:number){
    let KSIZE = arr.length * 2 + 1
    let KERNEL = np_one(KSIZE, KSIZE)
    for(let i = 0; i < arr.length; i++){
        for(let q = 0; q < i; q++){
            is_x ? KERNEL[i][q] = arr[i] : KERNEL[q][i] = arr[i]
        }
    }
    KERNEL[arr.length][arr.length] = center_px
    return KERNEL
}


export default function Filter_kernel({
    ss_list,
    ss_mode,
    ss_kernel
}:{
    ss_list:a.use_state_uit<number[]>
    ss_mode:a.use_state_t<number>
    ss_kernel:a.use_state_t<number[][]>
}){
    const [ss_first, setss_first] = useState<number>(1)
    const [ss_second, setss_second] = useState<number>(0)
    const [ss_last, setss_last] = useState<number>(0)
    const [ss_len, setss_len] = useState<number>(1)
    const [ss_scalar, setss_scalar] = useState<number>(1)
    useEffect(()=>{
        const UPDATE_ARR:number[] = []
        for(let i = 1; i <= ss_len; i++){
            UPDATE_ARR.push(ss_second + (ss_last - ss_second) * (i/ss_len))
        }
        ss_list.setss(UPDATE_ARR.map((item)=>{return ss_scalar * item}))
    },[
        ss_first,
        ss_second,
        ss_last,
        ss_len,
        ss_scalar
    ])
    useEffect(()=>{
        ss_mode.ss === 1 ? setss_first(func_sharp_center(ss_list.ss)) : (()=>undefined)
    },[ss_kernel.ss])
    const LET_ARR:a.use_state_uit<number>[] = [
        {
            opt_name:"first item" as a.opt_name,
            ss:ss_first,
            setss:setss_first
        },
        {
            opt_name:"second item" as a.opt_name,
            ss:ss_second,
            setss:setss_second
        },
        {
            opt_name:"last item" as a.opt_name,
            ss:ss_last,
            setss:setss_last
        },
        {
            opt_name:"length of list" as a.opt_name,
            ss:ss_len,
            setss:setss_len
        },
        {
            opt_name:"scalar" as a.opt_name,
            ss:ss_scalar,
            setss:setss_scalar
        },
    ] 
    const JSX_LISTS = <Input_form
    opt_name={"Modify Filter Kernel List Manually" as a.opt_name}
    arr={(ss_list.ss.map((item,index)=>{
        return {
            opt_name:ss_list.opt_name,
            ss:ss_list.ss,
            setss:((e:number)=>{method_update_item<number>(
                index,
                {ss:ss_list.ss, setss:ss_list.setss},
                e)})
        }
    })) as unknown as a.use_state_uit<string|number>[]}
/>
    function func_set_kernel(){
        if (ss_mode.ss ===0){
            ss_kernel.setss(func_rect_kernel(ss_list.ss, ss_first))
        }
        if (ss_mode.ss ===1){
            ss_kernel.setss(func_rect_kernel(ss_list.ss, func_sharp_center(ss_list.ss)))
        }
        if (ss_mode.ss ===2){
            ss_kernel.setss(func_line_kernel(ss_list.ss, true, ss_first))
        }
        if (ss_mode.ss ===3){
            ss_kernel.setss(func_line_kernel(ss_list.ss, false, ss_first))
        }
    }
    return <>
        <Str_to_h opt_name={"Filter Kernel" as a.opt_name}/>
        <Input_form
            opt_name={"Create Filter Kernel List" as a.opt_name}
            arr={LET_ARR as unknown as a.use_state_uit<number|string>[]}
        />
        <Panel jsx_element={JSX_LISTS}/>
        <Opt_input
            opt_name={"Kernel Mode" as a.opt_name}
            available_opts={[
                "rectangle",
                "sharp rectangle",
                "horizontal",
                "vertical",
                "diamond"
            ]}
            ss_mode={ss_mode}
            is_search_bar={false}
        />
        <Button_click
            name={"Apply Kernel" as a.name}
            func_event={(()=>{func_set_kernel}) as a.func_event}
        />
    </>
}