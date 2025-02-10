import * as ui from "./input"

export type config_img_t = {
    remove_noice:boolean,
    thin_font:boolean,
    think_font:boolean,
    invert_img:boolean,
    dilate:ui.combine_input_t,
    erode:ui.combine_input_t,
    opening:ui.combine_input_t,
    canny:ui.combine_input_t,
    filter:ui.combine_input_t,
    threshold:ui.combine_input_t,
    threshold_adp:ui.combine_input_t,
    blur:ui.combine_input_t,
    list:ui.combine_input_t,
    list_arr:number[]
}

export type config_ocr_t = {
    psm: string[],
    languages:string[]|ui.input_opt_t[],
    oem:string[],
    timeout:ui.input_t<number>,
    white_or_black_list:string[],
    search_characters:string
}