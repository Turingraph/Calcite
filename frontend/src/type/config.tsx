import { input_combine_uit } from "../components/input/input_combine"
import { opt_input_uit } from "../components/opt/type"
import * as a from "./alias"

export type config_img_t = {
    remove_noice:boolean,
    thin_font:boolean,
    think_font:boolean,
    invert_img:boolean,
    dilate:input_combine_uit,
    erode:input_combine_uit,
    opening:input_combine_uit,
    canny:input_combine_uit,
    filter:input_combine_uit,
    threshold:input_combine_uit,
    threshold_adp:input_combine_uit,
    blur:input_combine_uit,
    list:input_combine_uit,
    list_arr:number[]
}

export type config_ocr_t = {
    psm: string[],
    languages:string[]|opt_input_uit[],
    oem:string[],
    timeout:a.use_state_uit<number>,
    white_or_black_list:string[],
    search_characters:string
}