import multi_ui_t from "../ui/multi_ui_t"

type setting_img_t = {
    remove_noice:boolean,
    thin_font:boolean,
    think_font:boolean,
    invert_img:boolean,
    dilate:multi_ui_t,
    erode:multi_ui_t,
    opening:multi_ui_t,
    canny:multi_ui_t,
    filter:multi_ui_t,
    threshold:multi_ui_t,
    threshold_adp:multi_ui_t,
    blur:multi_ui_t,
    list:multi_ui_t,
    list_arr:number[]
}

export default setting_img_t