import React, {useState} from 'react'
import * as a from '../type/alias'
import { img_process_button_name } from '../data/constant'
import Combine_input from '../components/input/combine_input'
import { combine_input_t } from '../type/input'
import { Opt_to_jsx_arr } from '../utils/convert'

export default function Config_img({
    //
}:{
    //
}){
    const [ss_thresh_px, setss_thresh_px] = useState<number>(1)
    const [ss_thresh_is_otsu, setss_thresh_is_otsu] = useState<number>(0)
    const [ss_thresh_mode, setss_thresh_mode] = useState<number>(0)
    const [ss_thresh_maxval, setss_thresh_maxval] = useState<number>(255)

    const [ss_thresh_adp_is_otsu, setss_thresh_adp_is_otsu] = useState<number>(0)
    const [ss_thresh_adp_ksize, setss_thresh_adp_ksize] = useState<number>(11)
    const [ss_thresh_adp_constant, setss_thresh_adp_constant] = useState<number>(2)
    const [ss_thresh_adp_mode, setss_thresh_adp_mode] = useState<number>(0)
    const [ss_thresh_gauss_mode, setss_thresh_gauss_mode] = useState<number>(0)
    const [ss_thresh_adp_maxval, setss_thresh_adp_maxval] = useState<number>(255)

    const [ss_erode_row, setss_erode_row] = useState<number>(1)
    const [ss_erode_col, setss_erode_col] = useState<number>(1)

    const [ss_opening_row, setss_opening_row] = useState<number>(1)
    const [ss_opening_col, setss_opening_col] = useState<number>(1)

    const [ss_canny_c1, setss_canny_c1] = useState<number>(1)
    const [ss_canny_c2, setss_canny_c2] = useState<number>(1)

    const [ss_dilate_row, setss_dilate_row] = useState<number>(1)
    const [ss_dilate_col, setss_dilate_col] = useState<number>(1)

    const [ss_blur_ksize, setss_blur_ksize] = useState<number>(15)
    const [ss_blur_effect, setss_blur_effect] = useState<number>(75)
    const [ss_blur_opt, setss_blur_opt] = useState<number>(0)

    let config_thresh:combine_input_t = {
        opt_name:"threshold" as a.opt_name,
        input_str:[
            {
                opt_name:"pixel value" as a.opt_name,
                input:{
                    ss:ss_thresh_px,
                    setss:setss_thresh_px
                } as a.use_state_t<number|string>,
                default_input:1
            },
            {
                opt_name:"maximum pixel value" as a.opt_name,
                input:{
                    ss:ss_thresh_maxval,
                    setss:setss_thresh_maxval
                } as a.use_state_t<number|string>,
                default_input:255
            }
        ],
        input_opt:[
            {
                opt_name: "mode" as a.opt_name,
                available_opts: [
                    "cv2.THRESH_BINARY      ",
                    "cv2.THRESH_BINARY_INV  ",
                    "cv2.THRESH_TRUNC       ",
                    "cv2.THRESH_TOZERO      ",
                    "cv2.THRESH_TOZERO_INV  ",
                ],
                ss_mode: {
                    ss: ss_thresh_mode,
                    setss: setss_thresh_mode
                },
                is_search_bar:false
            },
            {
                opt_name: "activate Otsu algorithm" as a.opt_name,
                available_opts: [
                    "yes", 
                    "no"
                ],
                ss_mode: {
                    ss: ss_thresh_is_otsu,
                    setss: setss_thresh_is_otsu
                },
                is_search_bar:false
            }
        ]
    }
    let config_thresh_adp:combine_input_t = {
        opt_name:"adaptive threshold" as a.opt_name,
        input_str:[
            {
                opt_name:"Size of Kernel" as a.opt_name,
                input:{
                    ss:ss_thresh_adp_ksize,
                    setss:setss_thresh_adp_ksize
                } as a.use_state_t<number|string>,
                default_input:11
            },
            {
                opt_name:"Constant" as a.opt_name,
                input:{
                    ss:ss_thresh_adp_constant,
                    setss:setss_thresh_adp_constant
                } as a.use_state_t<number|string>,
                default_input:2
            },
            {
                opt_name:"maximum pixel value" as a.opt_name,
                input:{
                    ss:ss_thresh_adp_maxval,
                    setss:setss_thresh_adp_maxval
                } as a.use_state_t<number|string>,
                default_input:255
            }
        ],
        input_opt:[
            {
                opt_name: "mode" as a.opt_name,
                available_opts: [
                    "cv2.THRESH_BINARY      ",
                    "cv2.THRESH_BINARY_INV  ",
                    "cv2.THRESH_TRUNC       ",
                    "cv2.THRESH_TOZERO      ",
                    "cv2.THRESH_TOZERO_INV  ",
                ],
                ss_mode: {
                    ss: ss_thresh_adp_mode,
                    setss: setss_thresh_adp_mode
                },
                is_search_bar:false
            },
            {
                opt_name: "activate Otsu algorithm" as a.opt_name,
                available_opts: [
                    "yes", 
                    "no"
                ],
                ss_mode: {
                    ss: ss_thresh_adp_is_otsu,
                    setss: setss_thresh_adp_is_otsu
                },
                is_search_bar:false
            },
            {
                opt_name: "adaptive threshold mode" as a.opt_name,
                available_opts:[
                    "cv2.ADAPTIVE_THRESH_MEAN_C",
                    "cv2.ADAPTIVE_THRESH_GAUSSIAN_C"
                ],
                ss_mode:{
                    ss: ss_thresh_gauss_mode,
                    setss: setss_thresh_gauss_mode
                },
                is_search_bar:false
            }
        ]
    }
    let config_erode:combine_input_t = {
        opt_name:"erode" as a.opt_name,
        input_str:[
            {
                opt_name:"row" as a.opt_name,
                input:{
                    ss:ss_erode_row,
                    setss:setss_erode_row
                } as a.use_state_t<number|string>,
                default_input:1
            },
            {
                opt_name:"col" as a.opt_name,
                input:{
                    ss:ss_erode_col,
                    setss:setss_erode_col
                } as a.use_state_t<number|string>,
                default_input:1
            }
        ],
        input_opt:undefined
    }
    let config_opening:combine_input_t = {
        opt_name:"opening" as a.opt_name,
        input_str:[
            {
                opt_name:"row" as a.opt_name,
                input:{
                    ss:ss_opening_row,
                    setss:setss_opening_row
                } as a.use_state_t<number|string>,
                default_input:1
            },
            {
                opt_name:"col" as a.opt_name,
                input:{
                    ss:ss_opening_col,
                    setss:setss_opening_col
                } as a.use_state_t<number|string>,
                default_input:1
            }
        ],
        input_opt:undefined
    }
    let config_canny:combine_input_t = {
        opt_name:"canny" as a.opt_name,
        input_str:[
            {
                opt_name:"row" as a.opt_name,
                input:{
                    ss:ss_canny_c1,
                    setss:setss_canny_c1
                } as a.use_state_t<number|string>,
                default_input:1
            },
            {
                opt_name:"col" as a.opt_name,
                input:{
                    ss:ss_canny_c2,
                    setss:setss_canny_c2
                } as a.use_state_t<number|string>,
                default_input:1
            }
        ],
        input_opt:undefined
    }
    let config_dilate:combine_input_t = {
        opt_name:"dilate" as a.opt_name,
        input_str:[
            {
                opt_name:"row" as a.opt_name,
                input:{
                    ss:ss_dilate_row,
                    setss:setss_dilate_row
                } as a.use_state_t<number|string>,
                default_input:1
            },
            {
                opt_name:"col" as a.opt_name,
                input:{
                    ss:ss_dilate_col,
                    setss:setss_dilate_col
                } as a.use_state_t<number|string>,
                default_input:1
            }
        ],
        input_opt:undefined
    }
    let config_blur:combine_input_t = {
        opt_name:"blur" as a.opt_name,
        input_str:[
            {
                opt_name:"Size of Kernel" as a.opt_name,
                input:{
                    ss:ss_blur_ksize,
                    setss:setss_blur_ksize
                } as a.use_state_t<number|string>,
                default_input:11
            },
            {
                opt_name:"effect" as a.opt_name,
                input:{
                    ss:ss_blur_effect,
                    setss:setss_blur_effect
                } as a.use_state_t<number|string>,
                default_input:2
            },
        ],
        input_opt:[
            {
                opt_name:"mode" as a.opt_name,
                available_opts:[
                    "mean blur",
                    "gauss blur",
                    "bilateral blur"
                ],
                ss_mode:{ss:ss_blur_opt, setss:setss_blur_opt},
                is_search_bar:false
            }
        ]
    }
    let jsx_arr = Opt_to_jsx_arr({arr:[
        config_thresh,
        config_thresh_adp,
        config_erode,
        config_opening,
        config_canny,
        config_dilate,
        config_blur
    ],jsx_element:Combine_input})
    
    return <>{jsx_arr}</>
}