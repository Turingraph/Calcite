import React, {useState} from 'react'
import * as a from '../type/alias'
import { img_process_button_name } from '../data/constant'
import Combine_input from '../components/input/combine_input'
import { combine_input_t } from '../type/input'
import { Opt_to_jsx_arr } from '../utils/convert'
import { 
    default_img_blur,
    default_img_canny,
    default_img_dilate,
    default_img_erode,
    default_img_opening,
    default_img_thresh,
    default_img_thresh_adp,
    default_img_rotate,
    default_img_crop_00,
    default_img_crop_01,    
    default_img_crop_02,
    default_img_crop_03,    
} from '../data/config'
import { func_update_arr } from '../utils/handle'

export default function Config_img({
    //
}:{
    //
}){
    const [ss_thresh_px, setss_thresh_px] = useState<number>(default_img_thresh.px)
    const [ss_thresh_is_otsu, setss_thresh_is_otsu] = useState<number>(default_img_thresh.is_otsu)
    const [ss_thresh_mode, setss_thresh_mode] = useState<number>(default_img_thresh.mode)
    const [ss_thresh_maxval, setss_thresh_maxval] = useState<number>(default_img_thresh.maxval)

    const [ss_thresh_adp_is_otsu, setss_thresh_adp_is_otsu] = useState<number>(default_img_thresh_adp.is_otsu)
    const [ss_thresh_adp_ksize, setss_thresh_adp_ksize] = useState<number>(default_img_thresh_adp.ksize)
    const [ss_thresh_adp_constant, setss_thresh_adp_constant] = useState<number>(default_img_thresh_adp.constant)
    const [ss_thresh_adp_mode, setss_thresh_adp_mode] = useState<number>(default_img_thresh_adp.mode)
    const [ss_thresh_gauss_mode, setss_thresh_gauss_mode] = useState<number>(default_img_thresh_adp.gauss_mode)
    const [ss_thresh_adp_maxval, setss_thresh_adp_maxval] = useState<number>(default_img_thresh_adp.maxval)

    const [ss_erode_row, setss_erode_row] = useState<number>(default_img_erode.r)
    const [ss_erode_col, setss_erode_col] = useState<number>(default_img_erode.c)

    const [ss_opening_row, setss_opening_row] = useState<number>(default_img_opening.r)
    const [ss_opening_col, setss_opening_col] = useState<number>(default_img_opening.c)

    const [ss_canny_c1, setss_canny_c1] = useState<number>(default_img_canny.c1)
    const [ss_canny_c2, setss_canny_c2] = useState<number>(default_img_canny.c2)

    const [ss_dilate_row, setss_dilate_row] = useState<number>(default_img_dilate.r)
    const [ss_dilate_col, setss_dilate_col] = useState<number>(default_img_dilate.c)

    const [ss_blur_ksize, setss_blur_ksize] = useState<number>(default_img_blur.ksize)
    const [ss_blur_effect, setss_blur_effect] = useState<number>(default_img_blur.effect)
    const [ss_blur_opt, setss_blur_opt] = useState<number>(default_img_blur.opt)

    const [ss_rotate, setss_rotate] = useState<number>(default_img_rotate)
    const [ss_crop_00, setss_crop_00] = useState<number>(default_img_crop_00)
    const [ss_crop_01, setss_crop_01] = useState<number>(default_img_crop_01)
    const [ss_crop_02, setss_crop_02] = useState<number|undefined>(default_img_crop_02)
    const [ss_crop_03, setss_crop_03] = useState<number|undefined>(default_img_crop_03)
    let interface_thresh:combine_input_t = {
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
    let interface_thresh_adp:combine_input_t = {
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
    let interface_erode:combine_input_t = {
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
    let interface_opening:combine_input_t = {
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
    let interface_canny:combine_input_t = {
        opt_name:"canny" as a.opt_name,
        input_str:[
            {
                opt_name:"first constant" as a.opt_name,
                input:{
                    ss:ss_canny_c1,
                    setss:setss_canny_c1
                } as a.use_state_t<number|string>,
                default_input:1
            },
            {
                opt_name:"second constant" as a.opt_name,
                input:{
                    ss:ss_canny_c2,
                    setss:setss_canny_c2
                } as a.use_state_t<number|string>,
                default_input:1
            }
        ],
        input_opt:undefined
    }
    let interface_dilate:combine_input_t = {
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
    let interface_blur:combine_input_t = {
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
    let interface_rotate:combine_input_t = {
        opt_name:"rotate" as a.opt_name,
        input_str:[{
            opt_name:undefined as a.opt_name,
            input:{
                ss:ss_rotate,
                setss:setss_rotate
            } as a.use_state_t<number|string>,
            default_input:default_img_rotate
        }],
        input_opt:undefined
    }
    let interface_crop:combine_input_t = {
        opt_name:"crop" as a.opt_name,
        input_str:[
            {
                opt_name:"x_00" as a.opt_name,
                input:{
                    ss:ss_crop_00,
                    setss:setss_crop_00
                } as a.use_state_t<string|number>,
                default_input:default_img_crop_00
            },
            {
                opt_name:"x_01" as a.opt_name,
                input:{
                    ss:ss_crop_01,
                    setss:setss_crop_01
                } as a.use_state_t<string|number>,
                default_input:default_img_crop_01
            },
            {
                opt_name:"x_02" as a.opt_name,
                input:{
                    ss:ss_crop_02,
                    setss:setss_crop_02
                } as a.use_state_t<string|number>,
                default_input:default_img_crop_02
            },
            {
                opt_name:"x_03" as a.opt_name,
                input:{
                    ss:ss_crop_03,
                    setss:setss_crop_03
                } as a.use_state_t<string|number>,
                default_input:default_img_crop_03
            }
        ]
    }
    let jsx_arr = Opt_to_jsx_arr({arr:[
        interface_rotate,
        interface_thresh,
        interface_thresh_adp,
        interface_erode,
        interface_opening,
        interface_canny,
        interface_dilate,
        interface_blur
    ],jsx_element:Combine_input})
    
    return <>{jsx_arr}</>
}