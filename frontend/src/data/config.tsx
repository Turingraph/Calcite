import { language_opts } from "./constant"

export const default_img_thresh = {
    px:1,
    is_otsu:0,
    mode:0,
    maxval:255
}

export const default_img_thresh_adp = {
    is_otsu:0,
    ksize:11,
    constant:2,
    mode:0,
    gauss_mode:0,
    maxval:255
}

export const default_img_erode = {r:1,c:1}
export const default_img_opening = {r:1,c:1}
export const default_img_canny = {c1:1,c2:1}
export const default_img_dilate = {r:1,c:1}
export const default_img_blur = {
    ksize:15,
    effect:75,
    opt:0
}

export const default_img_rotate = 0

export const default_img_crop_00:number = 0
export const default_img_crop_01:number = 0
export const default_img_crop_02:number|undefined = undefined
export const default_img_crop_03:number|undefined = undefined

export const default_img_zoom:number = 1

export const default_ocr = {
    psm:1,
    oem:3,
    languages:[1],
    time_out:0,
    filter_char:"",
    filter_mode:0
}