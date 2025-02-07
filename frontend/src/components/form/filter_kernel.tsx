import React, {useEffect, useState} from "react";
import Click_button from "../ui_00/click_button";
import * as a from "../../type/alias"
import Panel from "../ui_00/panel";
import Input_form from "../ui_01/input_form";
import { input_t } from "../../type/input";
import Str_to_h from "../../utils/str_to_h";
import { func_set_input_arr } from "../../utils/handle";
import Input_opt from "../ui_01/input_opt";

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
    let ksize = arr.length * 2 + 1
    let kernel = np_one(ksize, ksize)
    for(let i = 0; i < arr.length; i++){
        let j = ksize - i - 1
        s_times_vector(arr[i],kernel[i])
        s_times_vector(arr[i],kernel[j])
        for(let q = 0; q < i; q++){
            let p = ksize - q - 1
            kernel[i][q] = arr[q]
            kernel[i][p] = arr[q]
            kernel[j][q] = arr[q]
            kernel[j][p] = arr[q]
        }
    }
    for(let i = 0; i < arr.length; i++){
        let j = ksize - i - 1
        kernel[arr.length][i] = arr[i]
        kernel[arr.length][j] = arr[i]
    }
    kernel[arr.length][arr.length] = center_px
    return kernel
}

export function func_line_kernel(arr:number[], is_x:boolean, center_px:number){
    let ksize = arr.length * 2 + 1
    let kernel = np_one(ksize, ksize)
    for(let i = 0; i < arr.length; i++){
        for(let q = 0; q < i; q++){
            is_x ? kernel[i][q] = arr[i] : kernel[q][i] = arr[i]
        }
    }
    kernel[arr.length][arr.length] = center_px
    return kernel
}


export default function Filter_kernel({
    ss_list,
    ss_mode,
    ss_kernel
}:{
    ss_list:input_t<number[]>
    ss_mode:a.use_state_t<number>
    ss_kernel:a.use_state_t<number[][]>
}){
    const [ss_first, setss_first] = useState<number>(1)
    const [ss_second, setss_second] = useState<number>(0)
    const [ss_last, setss_last] = useState<number>(0)
    const [ss_len, setss_len] = useState<number>(1)
    const [ss_scalar, setss_scalar] = useState<number>(1)
    useEffect(()=>{
        let update_arr:number[] = []
        for(let i = 1; i <= ss_len; i++){
            update_arr.push(ss_second + (ss_last - ss_second) * (i/ss_len))
        }
        ss_list.input.setss(update_arr.map((item)=>{return ss_scalar * item}))
    },[
        ss_first,
        ss_second,
        ss_last,
        ss_len,
        ss_scalar
    ])
    useEffect(()=>{
        ss_mode.ss === 1 ? setss_first(func_sharp_center(ss_list.input.ss)) : (()=>{})
    },[ss_kernel.ss])
    let let_arr:input_t<number>[] = [
        {
            opt_name:"first item" as a.opt_name,
            input:{
                ss:ss_first,
                setss:setss_first
            },
            default_input:1
        },
        {
            opt_name:"second item" as a.opt_name,
            input:{
                ss:ss_second,
                setss:setss_second
            },
            default_input:1
        },
        {
            opt_name:"last item" as a.opt_name,
            input:{
                ss:ss_last,
                setss:setss_last
            },
            default_input:1
        },
        {
            opt_name:"length of list" as a.opt_name,
            input:{
                ss:ss_len,
                setss:setss_len
            },
            default_input:1
        },
        {
            opt_name:"scalar" as a.opt_name,
            input:{
                ss:ss_scalar,
                setss:setss_scalar
            },
            default_input:1
        },
    ] 
    let jsx_lists = <Input_form
    opt_name={"Modify Filter Kernel List Manually" as a.opt_name}
    arr={(ss_list.input.ss.map((item,index)=>{
        return {
            opt_name:ss_list.opt_name,
            input:{
                ss:ss_list.input.ss,
                setss:((e:number)=>{func_set_input_arr<number>(index,ss_list.input,e)})
            },
            default_input:ss_list.default_input
        }
    })) as unknown as input_t<string|number>[]}
/>
    function func_set_kernel(){
        if (ss_mode.ss ===0){
            ss_kernel.setss(func_rect_kernel(ss_list.input.ss, ss_first))
        }
        if (ss_mode.ss ===1){
            ss_kernel.setss(func_rect_kernel(ss_list.input.ss, func_sharp_center(ss_list.input.ss)))
        }
        if (ss_mode.ss ===2){
            ss_kernel.setss(func_line_kernel(ss_list.input.ss, true, ss_first))
        }
        if (ss_mode.ss ===3){
            ss_kernel.setss(func_line_kernel(ss_list.input.ss, false, ss_first))
        }
    }
    return <>
        <Str_to_h opt_name={"Filter Kernel" as a.opt_name}/>
        <Input_form
            opt_name={"Create Filter Kernel List" as a.opt_name}
            arr={let_arr as unknown as input_t<number|string>[]}
        />
        <Panel jsx_element={jsx_lists}/>
        <Input_opt
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
        <Click_button
            name={"Apply Kernel" as a.name}
            func_event={(()=>{func_set_kernel}) as a.func_event}
        />
    </>
}