import React, { JSX } from "react";
import { num_to_rgb } from "../../convert/num";
import "./index.css";

export default function COLOR_UI({
    jsx_element,
    rgb = 255
}:{
    jsx_element:JSX.Element,
    rgb?:number|number[]
}){
    return <div style={{backgroundColor:num_to_rgb(rgb)}}>{jsx_element}</div>
}

/*
src/src/components/asset/color_ui.tsx
  Line 1:1:  Run autofix to sort these imports!  simple-import-sort/imports

  // What is wrong with my code ?
*/