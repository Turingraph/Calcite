import * as ui from "./input_ui"

export type config_img_t = {
    remove_noice:boolean,
    thin_font:boolean,
    think_font:boolean,
    invert_img:boolean,
    dilate:ui.combine_input_uit,
    erode:ui.combine_input_uit,
    opening:ui.combine_input_uit,
    canny:ui.combine_input_uit,
    filter:ui.combine_input_uit,
    threshold:ui.combine_input_uit,
    threshold_adp:ui.combine_input_uit,
    blur:ui.combine_input_uit,
    list:ui.combine_input_uit,
    list_arr:number[]
}

export type config_ocr_t = {
    psm: string[],
    languages:string[]|ui.input_opt_uit[],
    oem:string[],
    timeout:ui.input_uit<number>,
    white_or_black_list:string[],
    search_characters:string
}