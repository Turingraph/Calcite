import * as a from "../type/alias"

// https://youtu.be/6M9aZzm-kEc?si=8wFqvYF_idrCxkVx

export const DEFAULT_IMG = {
    thresh:[
       {attr:"px" as a.attr,        value: 1},
       {attr:"is_otsu" as a.attr,   value:  0},
       {attr:"mode" as a.attr,      value:     0},
       {attr:"maxval" as a.attr,    value:   255}
    ] as a.attr_value<number>[],
    thresh_adp:[
       {attr:"is_otsu" as a.attr, value: 0},
       {attr:"ksize" as a.attr, value: 11},
       {attr:"constant" as a.attr, value: 2},
       {attr:"mode" as a.attr, value: 0},
       {attr:"gauss_mode" as a.attr, value: 0},
       {attr:"maxval" as a.attr, value: 255}
    ] as a.attr_value<number>[],
    erode:[     {attr:"r" as a.attr, value: 1},{attr:"c" as a.attr, value: 1},] as a.attr_value<number>[],
    opening:[   {attr:"r" as a.attr, value: 1},{attr:"c" as a.attr, value: 1},] as a.attr_value<number>[],
    canny:[     {attr:"r" as a.attr, value: 1},{attr:"c" as a.attr, value: 1},] as a.attr_value<number>[],
    dilate:[    {attr:"r" as a.attr, value: 1},{attr:"c" as a.attr, value: 1},] as a.attr_value<number>[],
    blur:[
       {attr:"c0" as a.attr, value: 15},
       {attr:"c1" as a.attr, value: 15},
       {attr:"opt" as a.attr, value: 0}
       ] as a.attr_value<number>[],
    rotate:0,
    crop:[
       {attr:"x_00" as a.attr, value: 0},
       {attr:"x_01" as a.attr, value: 0},
       {attr:"x_02" as a.attr, value: -1},
       {attr:"x_03" as a.attr, value: -1},
       ] as a.attr_value<number>[]
}// as const

export const DEFAULT_OCR = [
  {attr:"psm" as a.attr, value:1},
  {attr:"oem" as a.attr, value:3},
  {attr:"time_out" as a.attr, value:0},
  {attr:"filter_mode" as a.attr, value:0},
  {attr:"filter_char" as a.attr, value:""},
  {attr:"languages" as a.attr, value: [1]}
] as (a.attr_value<string>|a.attr_value<number>|a.attr_value<number[]>)[]
// as const

export const DEFAULT_BOX = {
    rect:[
       {attr:"min_w" as a.attr, value:0},
       {attr:"max_w" as a.attr, value:-1},
       {attr:"min_h" as a.attr, value:0},
       {attr:"max_h" as a.attr, value:-1},
       {attr:"min_x" as a.attr, value:0},
       {attr:"max_x" as a.attr, value:-1},
       {attr:"min_y" as a.attr, value:0},
       {attr:"max_y" as a.attr, value:-1},
    ] as a.attr_value<number>[],
    sort_mode:0,
    box_around_text:[
        {attr:"search_text" as a.attr,value:""},
        {attr:"mode" as a.attr,value:0},
        ] as (a.attr_value<string>|a.attr_value<number>)[],
    box_around_char:[
        {attr:"search_char" as a.attr,value:""},
        {attr:"mode" as a.attr,value:0}
        ] as (a.attr_value<string>|a.attr_value<number>)[],
    color_00:[
       {attr:"r" as a.attr, value:0  },
       {attr:"g" as a.attr, value:0  },
       {attr:"b" as a.attr, value:255}
       ] as a.attr_value<number>[],
    color_01:[
       {attr:"r" as a.attr, value:255},
       {attr:"g" as a.attr, value:0  },
       {attr:"b" as a.attr, value:0}
       ] as a.attr_value<number>[]
}
// as const

/*
export const DEFAULT_IMG = {
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
    canny:{c0:1,c1:1},
    dilate:{r:1,c:1},
    blur:{
        c0:15,
        c1:15,
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
} as const

export const DEFAULT_OCR = {
    psm:1,
    oem:3,
    languages:[1],
    time_out:0,
    filter_char:"",
    filter_mode:0
} as const

export const DEFAULT_BOX = {
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
} as const
 */