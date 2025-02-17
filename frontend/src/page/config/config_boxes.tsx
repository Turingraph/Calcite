import React, { useEffect, useState } from "react";
import * as a from '../../type/alias'
import { DEFAULT_BOX } from "../../data/default_config";
import Input_combine from "../../components/input/input_combine";
import { input_combine_uit } from "../../components/input/input_combine";
import { Num_to_255, Num_to_size } from "../../utils/convert";
import { Opt_to_jsx_arr } from "../../utils/convert";

export default function Config_boxes(){
    const [ss_min_w, setss_min_w] = useState<number>(DEFAULT_BOX.rect.min_w)
    const [ss_min_h, setss_min_h] = useState<number>(DEFAULT_BOX.rect.min_h)
    const [ss_min_x, setss_min_x] = useState<number>(DEFAULT_BOX.rect.min_x)
    const [ss_min_y, setss_min_y] = useState<number>(DEFAULT_BOX.rect.min_y)
    const [ss_max_w, setss_max_w] = useState<number>(Num_to_size(DEFAULT_BOX.rect.max_w, 1000))
    const [ss_max_h, setss_max_h] = useState<number>(Num_to_size(DEFAULT_BOX.rect.max_h, 1000))
    const [ss_max_x, setss_max_x] = useState<number>(Num_to_size(DEFAULT_BOX.rect.max_x, 1000))
    const [ss_max_y, setss_max_y] = useState<number>(Num_to_size(DEFAULT_BOX.rect.max_y, 1000))

    const [ss_sort_mode, setss_sort_mode] = useState<number>(DEFAULT_BOX.sort_mode)

    const [ss_search_text, setss_search_text] = useState<string>(DEFAULT_BOX.box_around_text.search_text)
    const [ss_search_text_mode, setss_search_text_mode] = useState<number>(DEFAULT_BOX.box_around_text.mode)

    const [ss_search_char, setss_search_char] = useState<string>(DEFAULT_BOX.box_around_char.search_char)
    const [ss_search_char_mode, setss_search_char_mode] = useState<number>(DEFAULT_BOX.box_around_char.mode)

    const [ss_r_00, setss_r_00] = useState<number>(Num_to_255(DEFAULT_BOX.color_00.r))
    const [ss_g_00, setss_g_00] = useState<number>(Num_to_255(DEFAULT_BOX.color_00.g))
    const [ss_b_00, setss_b_00] = useState<number>(Num_to_255(DEFAULT_BOX.color_00.b))
    const [ss_r_01, setss_r_01] = useState<number>(Num_to_255(DEFAULT_BOX.color_01.r))
    const [ss_g_01, setss_g_01] = useState<number>(Num_to_255(DEFAULT_BOX.color_01.g))
    const [ss_b_01, setss_b_01] = useState<number>(Num_to_255(DEFAULT_BOX.color_01.b))

    useEffect(()=>{
        setss_r_00(Num_to_255(ss_r_00))
        setss_g_00(Num_to_255(ss_g_00))
        setss_b_00(Num_to_255(ss_b_00))
        setss_r_01(Num_to_255(ss_r_01))
        setss_g_01(Num_to_255(ss_g_01))
        setss_b_01(Num_to_255(ss_b_01))
        setss_max_w(Num_to_size(ss_max_w, 1000))
        setss_max_h(Num_to_size(ss_max_h, 1000))
        setss_max_x(Num_to_size(ss_max_x, 1000))
        setss_max_y(Num_to_size(ss_max_y, 1000))
    },[
        ss_r_00,
        ss_g_00,
        ss_b_00,
        ss_r_01,
        ss_g_01,
        ss_b_01,
        ss_max_w,
        ss_max_h,
        ss_max_x,
        ss_max_y,
    ])
    const INTERFACE_RECT:input_combine_uit = {
        opt_name:"Create Box with this condition" as a.opt_name,
        input_str:[
            {
                opt_name:"min width" as a.opt_name,
                ss:ss_min_w,
                setss:setss_min_w
            } as a.use_state_uit<string|number>,
            {
                opt_name:"max width" as a.opt_name,
                ss:ss_max_w, 
                setss:setss_max_w
            } as a.use_state_uit<string|number>,
            {
                opt_name:"min height" as a.opt_name,
                ss:ss_min_h,
                setss:setss_min_h
            } as a.use_state_uit<string|number>,
            {
                opt_name:"max height" as a.opt_name,
                ss:ss_max_h, 
                setss:setss_max_h
            } as a.use_state_uit<string|number>,
            {
                opt_name:"min x" as a.opt_name,
                ss:ss_min_x,
                setss:setss_min_x
            } as a.use_state_uit<string|number>,
            {
                opt_name:"max x" as a.opt_name,
                ss:ss_max_x, 
                setss:setss_max_x
            } as a.use_state_uit<string|number>,
            {
                opt_name:"min y" as a.opt_name,
                ss:ss_min_y, 
                setss:setss_min_y
            } as a.use_state_uit<string|number>,
            {
                opt_name:"max y" as a.opt_name,
                ss:ss_max_y, 
                setss:setss_max_y
            } as a.use_state_uit<string|number>,
        ],
        input_opt:undefined
    }
    const INTERFACE_SORT_MODE:input_combine_uit = {
        opt_name:undefined as a.opt_name,
        input_str:[{
            opt_name:"Box Sorting Mode" as a.opt_name,
            ss:ss_sort_mode, setss:setss_sort_mode} as a.use_state_uit<string|number>,
        ]
    }
    const INTERFACE_SEARCH_TEXT:input_combine_uit = {
        opt_name:"Filte Text" as a.opt_name,
        input_str:[{
            opt_name:"selected text" as a.opt_name,
            ss:ss_search_text, setss:setss_search_text} as a.use_state_uit<string|number>],
        input_opt:[{
            opt_name:"mode" as a.opt_name,
            available_opts:["select those text", "avoid those text"],
            ss_mode:{ss:ss_search_text_mode, setss:setss_search_text_mode},
            is_search_bar:false
        }]
    }
    const INTERFACE_SEARCH_CHAR:input_combine_uit = {
        opt_name:"Filte char" as a.opt_name,
        input_str:[{
            opt_name:"selected character" as a.opt_name,
            ss:ss_search_char, setss:setss_search_char} as a.use_state_uit<string|number>,
            ],
        input_opt:[{
            opt_name:"mode" as a.opt_name,
            available_opts:["select those char", "avoid those char"],
            ss_mode:{ss:ss_search_char_mode, setss:setss_search_char_mode},
            is_search_bar:false
        }]
    }
    const INTERFACE_COLOR_00:input_combine_uit = {
        opt_name:"Color of First Rectangle" as a.opt_name,
        input_str:[
            {
                opt_name:"r" as a.opt_name,
                    ss:ss_r_00, setss:setss_r_00
                } as a.use_state_uit<string|number>,
            {
                opt_name:"g" as a.opt_name,
                    ss:ss_g_00, setss:setss_g_00
                } as a.use_state_uit<string|number>,
            {
                opt_name:"b" as a.opt_name,
                    ss:ss_b_00, setss:setss_b_00
                } as a.use_state_uit<string|number>
        ],
        input_opt:undefined
    }
    const INTERFACE_COLOR_01:input_combine_uit = {
        opt_name:"Color of Last Rectangle" as a.opt_name,
        input_str:[
            {
                opt_name:"r" as a.opt_name,
                    ss:ss_r_01, setss:setss_r_01
                } as a.use_state_uit<string|number>,
            {
                opt_name:"g" as a.opt_name,
                    ss:ss_g_01, setss:setss_g_01
                } as a.use_state_uit<string|number>,
            {
                opt_name:"b" as a.opt_name,
                    ss:ss_b_01, setss:setss_b_01
                } as a.use_state_uit<string|number>,
        ],
        input_opt:undefined
    }
    const JSX_ARR = Opt_to_jsx_arr({arr:[
        INTERFACE_RECT,
        INTERFACE_SORT_MODE,
        INTERFACE_SEARCH_TEXT,
        INTERFACE_SEARCH_CHAR,
        INTERFACE_COLOR_00,
        INTERFACE_COLOR_01
    ],jsx_element:Input_combine})
    return <>{JSX_ARR}</>
}