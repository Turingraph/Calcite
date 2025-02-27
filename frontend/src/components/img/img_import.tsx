import {useLayoutEffect, useState, useRef, useCallback} from "react";
import * as a from "../../type/alias";
import PANEL from "../asset/panel";
import OPT_EXIST_ARR from "../opt/opt_exist_arr";
import { useDropzone } from "react-dropzone/.";

// https://www.geeksforgeeks.org/
// how-to-upload-image-and-preview-it-using-reactjs/

// https://developer.mozilla.org/en-US/docs/
// Web/HTML/Element/input/file

// https://www.geeksforgeeks.org/
// reading-image-opencv-using-python/

const FILE_FORMAT = ".jpg,.jpeg,.bmp,.dib,.png,.webp,.sr,.ras,.tiff,.tif"

export default function IMG_IMPORT({
    img_arr
}:{
    img_arr:a.use_state_t<File[]|null>
}){
    const handle_event = (e:React.FormEvent<HTMLInputElement>)=>{
        const TARGET = e.target as HTMLInputElement
        const CONST_FILE_READER = new FileReader
        if (typeof TARGET.files === "undefined")
        CONST_FILE_READER.readAsDataURL(TARGET.files)
        console.log(TARGET.files)
        img_arr.setss(TARGET.files as unknown as File[])
    }
    return <>
        <input
        type = "file"
        accept={FILE_FORMAT}
        multiple={true}
        name="import_image"
        onChange={(e)=>{handle_event(e)}}
        />
    </>
}