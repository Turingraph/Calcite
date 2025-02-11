import React, { useEffect, useState } from "react";
import * as a from '../../type/alias'
import { default_box } from "../../data/config";
import Combine_input from "../../components/input/combine_input";
import { combine_input_t } from "../../type/input";
import { Int_to_255 } from "../../utils/convert";
import { Opt_to_jsx_arr } from "../../utils/convert";

export default function Config_boxes({
    //
}:{
    //
}){
    const [ss_min_w, setss_min_w] = useState<number>(default_box.rect.min_w)
    const [ss_min_h, setss_min_h] = useState<number>(default_box.rect.min_h)
    const [ss_min_x, setss_min_x] = useState<number>(default_box.rect.min_x)
    const [ss_min_y, setss_min_y] = useState<number>(default_box.rect.min_y)
    const [ss_max_w, setss_max_w] = useState<number|undefined>(default_box.rect.max_w)
    const [ss_max_h, setss_max_h] = useState<number|undefined>(default_box.rect.max_h)
    const [ss_max_x, setss_max_x] = useState<number|undefined>(default_box.rect.max_x)
    const [ss_max_y, setss_max_y] = useState<number|undefined>(default_box.rect.max_y)

    const [ss_sort_mode, setss_sort_mode] = useState<number>(default_box.sort_mode)

    const [ss_search_text, setss_search_text] = useState<string>(default_box.box_around_text.search_text)
    const [ss_search_text_mode, setss_search_text_mode] = useState<number>(default_box.box_around_text.mode)

    const [ss_search_char, setss_search_char] = useState<string>(default_box.box_around_char.search_char)
    const [ss_search_char_mode, setss_search_char_mode] = useState<number>(default_box.box_around_char.mode)

    const [ss_r_00, setss_r_00] = useState<number>(Int_to_255(default_box.color_00.r))
    const [ss_g_00, setss_g_00] = useState<number>(Int_to_255(default_box.color_00.g))
    const [ss_b_00, setss_b_00] = useState<number>(Int_to_255(default_box.color_00.b))
    const [ss_r_01, setss_r_01] = useState<number>(Int_to_255(default_box.color_01.r))
    const [ss_g_01, setss_g_01] = useState<number>(Int_to_255(default_box.color_01.g))
    const [ss_b_01, setss_b_01] = useState<number>(Int_to_255(default_box.color_01.b))

    useEffect(()=>{
        setss_r_00(Int_to_255(ss_r_00))
        setss_g_00(Int_to_255(ss_g_00))
        setss_b_00(Int_to_255(ss_b_00))
        setss_r_01(Int_to_255(ss_r_01))
        setss_g_01(Int_to_255(ss_g_01))
        setss_b_01(Int_to_255(ss_b_01))
    },[
        ss_r_00,
        ss_g_00,
        ss_b_00,
        ss_r_01,
        ss_g_01,
        ss_b_01,
    ])
    let interface_rect:combine_input_t = {
        opt_name:"Create Box with this condition" as a.opt_name,
        input_str:[
            {
                opt_name:"min width" as a.opt_name,
                input:{ss:ss_min_w, setss:setss_min_w} as a.use_state_t<string|number>,
                default_input:default_box.rect.min_w
            },
            {
                opt_name:"max width" as a.opt_name,
                input:{ss:ss_max_w, setss:setss_max_w} as a.use_state_t<string|number>,
                default_input:default_box.rect.max_w
            },
            {
                opt_name:"min height" as a.opt_name,
                input:{ss:ss_min_h, setss:setss_min_h} as a.use_state_t<string|number>,
                default_input:default_box.rect.min_h
            },
            {
                opt_name:"max height" as a.opt_name,
                input:{ss:ss_max_h, setss:setss_max_h} as a.use_state_t<string|number>,
                default_input:default_box.rect.max_h
            },
            {
                opt_name:"min x" as a.opt_name,
                input:{ss:ss_min_x, setss:setss_min_x} as a.use_state_t<string|number>,
                default_input:default_box.rect.min_x
            },
            {
                opt_name:"max x" as a.opt_name,
                input:{ss:ss_max_x, setss:setss_max_x} as a.use_state_t<string|number>,
                default_input:default_box.rect.max_x
            },
            {
                opt_name:"min y" as a.opt_name,
                input:{ss:ss_min_y, setss:setss_min_y} as a.use_state_t<string|number>,
                default_input:default_box.rect.min_y
            },
            {
                opt_name:"max y" as a.opt_name,
                input:{ss:ss_max_y, setss:setss_max_y} as a.use_state_t<string|number>,
                default_input:default_box.rect.max_y
            },
        ],
        input_opt:undefined
    }
    let interface_sort_mode:combine_input_t = {
        opt_name:undefined as a.opt_name,
        input_str:[{
            opt_name:"Box Sorting Mode" as a.opt_name,
            input:{ss:ss_sort_mode, setss:setss_sort_mode} as a.use_state_t<string|number>,
            default_input:default_box.sort_mode
        }]
    }
    let interface_search_text:combine_input_t = {
        opt_name:"Filte Text" as a.opt_name,
        input_str:[{
            opt_name:"selected text" as a.opt_name,
            input:{ss:ss_search_text, setss:setss_search_text} as a.use_state_t<string|number>,
            default_input:default_box.box_around_text.search_text
        }],
        input_opt:[{
            opt_name:"mode" as a.opt_name,
            available_opts:["select those text", "avoid those text"],
            ss_mode:{ss:ss_search_text_mode, setss:setss_search_text_mode},
            is_search_bar:false
        }]
    }
    let interface_search_char:combine_input_t = {
        opt_name:"Filte char" as a.opt_name,
        input_str:[{
            opt_name:"selected character" as a.opt_name,
            input:{ss:ss_search_char, setss:setss_search_char} as a.use_state_t<string|number>,
            default_input:default_box.box_around_char.search_char
        }],
        input_opt:[{
            opt_name:"mode" as a.opt_name,
            available_opts:["select those char", "avoid those char"],
            ss_mode:{ss:ss_search_char_mode, setss:setss_search_char_mode},
            is_search_bar:false
        }]
    }
    let interface_color_00:combine_input_t = {
        opt_name:"Color of First Rectangle" as a.opt_name,
        input_str:[
            {
                opt_name:"r" as a.opt_name,
                input:{
                    ss:ss_r_00, setss:setss_r_00
                } as a.use_state_t<string|number>,
                default_input:default_box.color_00.r
            },
            {
                opt_name:"g" as a.opt_name,
                input:{
                    ss:ss_g_00, setss:setss_g_00
                } as a.use_state_t<string|number>,
                default_input:default_box.color_00.g
            },
            {
                opt_name:"b" as a.opt_name,
                input:{
                    ss:ss_b_00, setss:setss_b_00
                } as a.use_state_t<string|number>,
                default_input:default_box.color_00.b
            }
        ],
        input_opt:undefined
    }
    let interface_color_01:combine_input_t = {
        opt_name:"Color of Last Rectangle" as a.opt_name,
        input_str:[
            {
                opt_name:"r" as a.opt_name,
                input:{
                    ss:ss_r_01, setss:setss_r_01
                } as a.use_state_t<string|number>,
                default_input:default_box.color_01.r
            },
            {
                opt_name:"g" as a.opt_name,
                input:{
                    ss:ss_g_01, setss:setss_g_01
                } as a.use_state_t<string|number>,
                default_input:default_box.color_01.g
            },
            {
                opt_name:"b" as a.opt_name,
                input:{
                    ss:ss_b_01, setss:setss_b_01
                } as a.use_state_t<string|number>,
                default_input:default_box.color_01.b
            }
        ],
        input_opt:undefined
    }
    let jsx_arr = Opt_to_jsx_arr({arr:[
        interface_rect,
        interface_sort_mode,
        interface_search_text,
        interface_search_char,
        interface_color_00,
        interface_color_01
    ],jsx_element:Combine_input})
    return <>{jsx_arr}</>
}