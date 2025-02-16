import { combine_input_uit } from "../components/input/combine_input"
import { input_opt_uit } from "../components/search/type"
import * as a from "./alias"

export type config_img_t = {
    remove_noice:boolean,
    thin_font:boolean,
    think_font:boolean,
    invert_img:boolean,
    dilate:combine_input_uit,
    erode:combine_input_uit,
    opening:combine_input_uit,
    canny:combine_input_uit,
    filter:combine_input_uit,
    threshold:combine_input_uit,
    threshold_adp:combine_input_uit,
    blur:combine_input_uit,
    list:combine_input_uit,
    list_arr:number[]
}

export type config_ocr_t = {
    psm: string[],
    languages:string[]|input_opt_uit[],
    oem:string[],
    timeout:a.use_state_uit<number>,
    white_or_black_list:string[],
    search_characters:string
}