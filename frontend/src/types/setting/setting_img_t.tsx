import multi_input_t from "../input/multi_input_t";

type setting_img_t = {
    remove_noice:boolean,
    thin_font:boolean,
    think_font:boolean,
    invert_img:boolean,
    dilate:multi_input_t,
    erode:multi_input_t,
    opening:multi_input_t,
    canny:multi_input_t,
    filter:multi_input_t,
    threshold:multi_input_t,
    threshold_adp:multi_input_t,
    blur:multi_input_t,
    list:multi_input_t,
    list_arr:number[]
}

export default setting_img_t