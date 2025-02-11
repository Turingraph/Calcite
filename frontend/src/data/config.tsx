import { language_opts } from "./constant"

export const default_img = {
    thresh:{
        px:1,
        is_otsu:0,
        mode:0,
        maxval:255
    },
    thresh_adp:{
        is_otsu:0,
        ksize:11,
        constant:2,
        mode:0,
        gauss_mode:0,
        maxval:255
    },
    erode:{r:1,c:1},
    opening:{r:1,c:1},
    canny:{c1:1,c2:1},
    dilate:{r:1,c:1},
    blur:{
        ksize:15,
        effect:75,
        opt:0
    },
    rotate:0,
    crop:{
        x_00:0,
        x_01:0,
        x_02:undefined,
        x_03:undefined,
    },
    zoom:1
}

export const default_ocr = {
    psm:1,
    oem:3,
    languages:[1],
    time_out:0,
    filter_char:"",
    filter_mode:0
}

export const default_box = {
    rect:{
        min_w:0,
        max_w:undefined,
        min_h:0,
        max_h:undefined,
        min_x:0,
        max_x:undefined,
        min_y:0,
        max_y:undefined,
    },
    sort_mode:0,
    box_around_text:{
        search_text:"",
        mode:0,
    },
    box_around_char:{
        search_char:"",
        mode:0
    },
    color_00:{
        r:0,
        g:0,
        b:255
    },
    color_01:{
        r:255,
        g:0,
        b:0
    }
}