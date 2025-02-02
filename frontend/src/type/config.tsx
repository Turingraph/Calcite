import * as ui from "./input"

export type config_img_t = {
    remove_noice:boolean,
    thin_font:boolean,
    think_font:boolean,
    invert_img:boolean,
    dilate:ui.input_multi_t,
    erode:ui.input_multi_t,
    opening:ui.input_multi_t,
    canny:ui.input_multi_t,
    filter:ui.input_multi_t,
    threshold:ui.input_multi_t,
    threshold_adp:ui.input_multi_t,
    blur:ui.input_multi_t,
    list:ui.input_multi_t,
    list_arr:number[]
}

export type config_ocr_t = {
    psm: ui.input_option_t,
    languages:ui.input_option_t[],
    oem:ui.input_option_t,
    timeout:ui.input_num_t,
    white_or_black_list:ui.input_option_t,
    search_characters:string
}