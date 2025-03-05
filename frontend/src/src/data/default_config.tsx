import * as a from "../type/alias"

// https://youtu.be/6M9aZzm-kEc?si=8wFqvYF_idrCxkVx

export const DEFAULT_IMG = {
    thresh:[
       {name:"px" as a.name,        value: 1},
       {name:"is_otsu" as a.name,   value:  0},
       {name:"mode" as a.name,      value:     0},
       {name:"maxval" as a.name,    value:   255}
    ] as a.attr_value<number>[],
    thresh_adp:[
       {name:"is_otsu" as a.name, value: 0},
       {name:"ksize" as a.name, value: 11},
       {name:"constant" as a.name, value: 2},
       {name:"mode" as a.name, value: 0},
       {name:"gauss_mode" as a.name, value: 0},
       {name:"maxval" as a.name, value: 255}
    ] as a.attr_value<number>[],
    erode:[     {name:"r" as a.name, value: 1},{name:"c" as a.name, value: 1},] as a.attr_value<number>[],
    opening:[   {name:"r" as a.name, value: 1},{name:"c" as a.name, value: 1},] as a.attr_value<number>[],
    canny:[     {name:"r" as a.name, value: 1},{name:"c" as a.name, value: 1},] as a.attr_value<number>[],
    dilate:[    {name:"r" as a.name, value: 1},{name:"c" as a.name, value: 1},] as a.attr_value<number>[],
    blur:[
       {name:"c0" as a.name, value: 15},
       {name:"c1" as a.name, value: 15},
       {name:"opt" as a.name, value: 0}
       ] as a.attr_value<number>[],
    rotate:0,
    crop:[
       {name:"x_00" as a.name, value: 0},
       {name:"x_01" as a.name, value: 0},
       {name:"x_02" as a.name, value: -1},
       {name:"x_03" as a.name, value: -1},
       ] as a.attr_value<number>[]
}// as const

export const DEFAULT_OCR = [
  {name:"psm" as a.name, value:1},
  {name:"oem" as a.name, value:3},
  {name:"time_out" as a.name, value:0},
  {name:"filter_mode" as a.name, value:0},
  {name:"filter_char" as a.name, value:""},
  {name:"languages" as a.name, value: [1]}
] as (a.attr_value<string>|a.attr_value<number>|a.attr_value<number[]>)[]
// as const

export const DEFAULT_BOX = {
    rect:[
       {name:"min_w" as a.name, value:0},
       {name:"max_w" as a.name, value:-1},
       {name:"min_h" as a.name, value:0},
       {name:"max_h" as a.name, value:-1},
       {name:"min_x" as a.name, value:0},
       {name:"max_x" as a.name, value:-1},
       {name:"min_y" as a.name, value:0},
       {name:"max_y" as a.name, value:-1},
    ] as a.attr_value<number>[],
    sort_mode:0,
    box_around_text:[
        {name:"search_text" as a.name,value:""},
        {name:"mode" as a.name,value:0},
        ] as (a.attr_value<string>|a.attr_value<number>)[],
    box_around_char:[
        {name:"search_char" as a.name,value:""},
        {name:"mode" as a.name,value:0}
        ] as (a.attr_value<string>|a.attr_value<number>)[],
    color_00:[
       {name:"r" as a.name, value:0  },
       {name:"g" as a.name, value:0  },
       {name:"b" as a.name, value:255}
       ] as a.attr_value<number>[],
    color_01:[
       {name:"r" as a.name, value:255},
       {name:"g" as a.name, value:0  },
       {name:"b" as a.name, value:0}
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