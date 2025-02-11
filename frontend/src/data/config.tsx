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
        x_02:0,
        x_03:0,
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
