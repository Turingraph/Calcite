import {useState} from "react";
// import * as a from '../../type/alias'
// import IMG_ARR from "../../components/img/img_arr";
// import IMG_CANVAS from "../../components/img/img_canvas";
import IMG_IMPORT from "../../components/img/img_import";
import { img_t } from "../../type/obj";

export function TEST_IMG_ARR(){
    return <>
    </>
}

export function TEST_IMG_CANVAS(){
    return <>
    </>
}

export function TEST_IMG_IMPORT(){
    const [ss_imgs, setss_imgs] = useState<img_t[]>([])
    return <>
    <IMG_IMPORT
        imgs={{ss:ss_imgs, setss:setss_imgs}}
    />
    </>
}
