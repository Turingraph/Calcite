/* eslint-disable */
import React from "react";
import * as a from "../../type/alias"
import OBJ_SELF from "../../components/obj/obj_self";
import { DEFAULT_IMG } from "../../data/default_edit";
import { useReducer } from "react";
import act_arrobj from "../../array/act_arrobj";
import { use_arrobj_t } from "../../array/act_arrobj";
import INPUT_COMBINE from "../../components/input/input_combine";

export default function IMG_EDIT(
//     {
//     // complicated attr_value[]
//     ss_thresh       = undefined,
//     ss_thresh_adp   = undefined,
//     ss_blur         = undefined,
//     ss_crop         = undefined,
//     // simple attr_value[] with "r" and "c"
//     ss_erode        = undefined,
//     ss_opening      = undefined,
//     ss_canny        = undefined,
//     ss_dilate       = undefined,
//     // useState
//     ss_rotate       = undefined,
//     // Update input images
//     func_activate   = undefined
// }:{
//     // complicated attr_value[]
//     ss_thresh?:     undefined|use_arrobj_t<a.attr_value<number>[]>
//     ss_thresh_adp?: undefined|use_arrobj_t<a.attr_value<number>[]>
//     ss_blur?:       undefined|use_arrobj_t<a.attr_value<number>[]>
//     ss_crop?:       undefined|use_arrobj_t<a.attr_value<number>[]>
//     // simple attr_value[] with "r" and "c"
//     ss_erode?:      undefined|use_arrobj_t<a.attr_value<number>[]>
//     ss_opening?:    undefined|use_arrobj_t<a.attr_value<number>[]>
//     ss_canny?:      undefined|use_arrobj_t<a.attr_value<number>[]>
//     ss_dilate?:     undefined|use_arrobj_t<a.attr_value<number>[]>
//     // useState
//     ss_rotate?:     undefined|a.use_state_t<number>
//     // Update input images
//     func_activate?: undefined|a.func_event
// }
){
    return <>
    {/* {ss_thresh 
        ? <INPUT_COMBINE
            opt_name={"Threshold" as a.opt_name}
            input_str={ss_thresh as use_arrobj_t<a.attr_value<string | number>[]>}
            input_opt={[]}
        />
        :<></>} */}
    </>
}
/*
export default function IMG_EDIT(){
    const [ss_thresh_px, setss_thresh_px] = useState<number>(Num_to_255(DEFAULT_IMG.thresh.px))
    const [ss_thresh_is_otsu, setss_thresh_is_otsu] = useState<number>(DEFAULT_IMG.thresh.is_otsu)
    const [ss_thresh_mode, setss_thresh_mode] = useState<number>(DEFAULT_IMG.thresh.mode)
    const [ss_thresh_maxval, setss_thresh_maxval] = useState<number>(Num_to_255(DEFAULT_IMG.thresh.maxval))

    const [ss_thresh_adp_is_otsu, setss_thresh_adp_is_otsu] = useState<number>(DEFAULT_IMG.thresh_adp.is_otsu)
    const [ss_thresh_adp_ksize, setss_thresh_adp_ksize] = useState<number>(DEFAULT_IMG.thresh_adp.ksize)
    const [ss_thresh_adp_constant, setss_thresh_adp_constant] = useState<number>(DEFAULT_IMG.thresh_adp.constant)
    const [ss_thresh_adp_mode, setss_thresh_adp_mode] = useState<number>(DEFAULT_IMG.thresh_adp.mode)
    const [ss_thresh_gauss_mode, setss_thresh_gauss_mode] = useState<number>(DEFAULT_IMG.thresh_adp.gauss_mode)
    const [ss_thresh_adp_maxval, setss_thresh_adp_maxval] = useState<number>(Num_to_255(DEFAULT_IMG.thresh_adp.maxval))

    const [ss_erode_row, setss_erode_row] = useState<number>(DEFAULT_IMG.erode.r)
    const [ss_erode_col, setss_erode_col] = useState<number>(DEFAULT_IMG.erode.c)

    const [ss_opening_row, setss_opening_row] = useState<number>(DEFAULT_IMG.opening.r)
    const [ss_opening_col, setss_opening_col] = useState<number>(DEFAULT_IMG.opening.c)

    const [ss_canny_c0, setss_canny_c0] = useState<number>(DEFAULT_IMG.canny.c0)
    const [ss_canny_c1, setss_canny_c1] = useState<number>(DEFAULT_IMG.canny.c1)

    const [ss_dilate_row, setss_dilate_row] = useState<number>(DEFAULT_IMG.dilate.r)
    const [ss_dilate_col, setss_dilate_col] = useState<number>(DEFAULT_IMG.dilate.c)

    const [ss_blur_c0, setss_blur_c0] = useState<number>(DEFAULT_IMG.blur.c0)
    const [ss_blur_c1, setss_blur_c1] = useState<number>(DEFAULT_IMG.blur.c1)
    const [ss_blur_opt, setss_blur_opt] = useState<number>(DEFAULT_IMG.blur.opt)

    const [ss_rotate, setss_rotate] = useState<number>(DEFAULT_IMG.rotate)
    const [ss_crop_00, setss_crop_00] = useState<number>(DEFAULT_IMG.crop.x_00)
    const [ss_crop_01, setss_crop_01] = useState<number>(DEFAULT_IMG.crop.x_01)
    const [ss_crop_02, setss_crop_02] = useState<number|undefined>(DEFAULT_IMG.crop.x_02)
    const [ss_crop_03, setss_crop_03] = useState<number|undefined>(DEFAULT_IMG.crop.x_03)

    const [ss_reset, setss_reset] = useState<boolean>(false)

    useEffect(()=>{
        setss_reset(false)
    },[ss_reset])

    useEffect(()=>{
        setss_thresh_px(Num_to_255(ss_thresh_px))
        setss_thresh_maxval(Num_to_255(ss_thresh_maxval))
        setss_thresh_adp_maxval(Num_to_255(ss_thresh_adp_maxval))
    },[
        ss_thresh_px,
        ss_thresh_maxval,
        ss_thresh_adp_maxval
    ])

    useEffect(()=>{
        setss_thresh_adp_ksize(Num_to_ksize(ss_thresh_adp_ksize))
        setss_blur_c0(Num_to_ksize(ss_blur_c0))
        setss_blur_c1(Num_to_ksize(ss_blur_c1))
        setss_dilate_col (Num_to_ksize(ss_dilate_col )) 
        setss_dilate_row (Num_to_ksize(ss_dilate_row ))
        setss_erode_col  (Num_to_ksize(ss_erode_col  ))
        setss_erode_row  (Num_to_ksize(ss_erode_row  ))
        setss_opening_col(Num_to_ksize(ss_opening_col))
        setss_opening_row(Num_to_ksize(ss_opening_row))
    },[
        ss_thresh_adp_ksize,
        ss_blur_c0,
        ss_blur_c1,
        ss_dilate_col,
        ss_dilate_row,
        ss_erode_col,
        ss_erode_row,
        ss_opening_col,
        ss_opening_row
    ])

    const INTERFACE_THRESH:input_combine_uit = {
        opt_name:"threshold" as a.opt_name,
        input_str:[
            {
                opt_name:"pixel value" as a.opt_name,
                    ss:ss_thresh_px,
                    setss:setss_thresh_px
                } as a.use_state_uit<number|string>,
            {
                opt_name:"maximum pixel value" as a.opt_name,
                    ss:ss_thresh_maxval,
                    setss:setss_thresh_maxval
                } as a.use_state_uit<number|string>,
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
    const INTERFACE_THRESH_ADP:input_combine_uit = {
        opt_name:"adaptive threshold" as a.opt_name,
        input_str:[
            {
                opt_name:"Size of Kernel" as a.opt_name,
                    ss:ss_thresh_adp_ksize,
                    setss:setss_thresh_adp_ksize
                } as a.use_state_uit<number|string>,
            {
                opt_name:"Constant" as a.opt_name,
                    ss:ss_thresh_adp_constant,
                    setss:setss_thresh_adp_constant
                } as a.use_state_uit<number|string>,
            {
                opt_name:"maximum pixel value" as a.opt_name,

                    ss:ss_thresh_adp_maxval,
                    setss:setss_thresh_adp_maxval
                } as a.use_state_uit<number|string>,
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
    const INTERFACE_ERODE:input_combine_uit = {
        opt_name:"erode" as a.opt_name,
        input_str:[
            {
                opt_name:"row" as a.opt_name,

                    ss:ss_erode_row,
                    setss:setss_erode_row
                } as a.use_state_uit<number|string>,
            {
                opt_name:"col" as a.opt_name,

                    ss:ss_erode_col,
                    setss:setss_erode_col
                } as a.use_state_uit<number|string>,
        ],
        input_opt:undefined
    }
    const INTERFACE_OPENING:input_combine_uit = {
        opt_name:"opening" as a.opt_name,
        input_str:[
            {
                opt_name:"row" as a.opt_name,

                    ss:ss_opening_row,
                    setss:setss_opening_row
                } as a.use_state_uit<number|string>,
            {
                opt_name:"col" as a.opt_name,

                    ss:ss_opening_col,
                    setss:setss_opening_col
                } as a.use_state_uit<number|string>,
        ],
        input_opt:undefined
    }
    const INTERFACE_CANNY:input_combine_uit = {
        opt_name:"canny" as a.opt_name,
        input_str:[
            {
                opt_name:"first constant" as a.opt_name,

                    ss:ss_canny_c0,
                    setss:setss_canny_c0
                } as a.use_state_uit<number|string>,
            {
                opt_name:"second constant" as a.opt_name,

                    ss:ss_canny_c1,
                    setss:setss_canny_c1
                } as a.use_state_uit<number|string>,
        ],
        input_opt:undefined
    }
    const INTERFACE_DILATE:input_combine_uit = {
        opt_name:"dilate" as a.opt_name,
        input_str:[
            {
                opt_name:"row" as a.opt_name,

                    ss:ss_dilate_row,
                    setss:setss_dilate_row
                } as a.use_state_uit<number|string>,
            {
                opt_name:"col" as a.opt_name,

                    ss:ss_dilate_col,
                    setss:setss_dilate_col
                } as a.use_state_uit<number|string>,
        ],
        input_opt:undefined
    }
    const INTERFACE_BLUR:input_combine_uit = {
        opt_name:"blur" as a.opt_name,
        input_str:[
            {
                opt_name:(() => {
                    if (ss_blur_opt === 2){
                        return "Size of Kernel"
                    }
                    return "Width of Kernel"
                }) as unknown as a.opt_name,

                    ss:ss_blur_c0,
                    setss:setss_blur_c0
                } as a.use_state_uit<number|string>,
            {
                opt_name:(() => {
                    if (ss_blur_opt === 2){
                        return "Effect"
                    }
                    return "Height of Kernel"
                }) as unknown as a.opt_name,

                    ss:ss_blur_c1,
                    setss:setss_blur_c1
                } as a.use_state_uit<number|string>,
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
    const INTERFACE_ROTATE:input_combine_uit = {
        opt_name:undefined as a.opt_name,
        input_str:[{
            opt_name:"rotate" as a.opt_name,

                ss:ss_rotate,
                setss:setss_rotate
            } as a.use_state_uit<number|string>,
            ],
        input_opt:undefined
    }
    const INTERFACE_CROP:input_combine_uit = {
        opt_name:"crop" as a.opt_name,
        input_str:[
            {
                opt_name:"x_00" as a.opt_name,

                    ss:ss_crop_00,
                    setss:setss_crop_00
                } as a.use_state_uit<string|number>,
            {
                opt_name:"x_01" as a.opt_name,

                    ss:ss_crop_01,
                    setss:setss_crop_01
                } as a.use_state_uit<string|number>,
            {
                opt_name:"x_02" as a.opt_name,

                    ss:ss_crop_02,
                    setss:setss_crop_02
                } as a.use_state_uit<string|number>,

            {
                opt_name:"x_03" as a.opt_name,

                    ss:ss_crop_03,
                    setss:setss_crop_03
                } as a.use_state_uit<string|number>,
        ]
    }
    const INTERFACE_BUTTON_ARR:button_click_t[]=[
        {
            name:"reset image" as a.name,
            func_event:(()=>{setss_reset(true)}) as a.func_event
        },
        {
            name:"gray image" as a.name,
            func_event:(()=>undefined) as a.func_event
        },
        {
            name:"remove noice" as a.name,
            func_event:(()=>undefined) as a.func_event
        },
        {
            name:"thin font" as a.name,
            func_event:(()=>undefined) as a.func_event
        },
        {
            name:"thick font" as a.name,
            func_event:(()=>undefined) as a.func_event
        },
    ]
    
    const JSX_INPUT_ARR = Opt_to_jsx_arr({arr:[
        INTERFACE_ROTATE,
        INTERFACE_THRESH,
        INTERFACE_THRESH_ADP,
        INTERFACE_ERODE,
        INTERFACE_OPENING,
        INTERFACE_CANNY,
        INTERFACE_DILATE,
        INTERFACE_BLUR,
        INTERFACE_CROP
    ],jsx_element:Input_combine})

    const JSX_BUTTON_ARR = Opt_to_jsx_arr({
        arr:INTERFACE_BUTTON_ARR,
        jsx_element:Button_click
    })
    
    return <>{JSX_INPUT_ARR}{JSX_BUTTON_ARR}</>
}
    */