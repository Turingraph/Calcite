import {useState} from "react";
import FILE_EXPORT from "../../components/file/file_export";
import FILE_IMPORT from "../../components/file/file_import";
import { box_t, img_t } from "../../type/obj";

export function TEST_FILE_IMPORT(){
    const [ss_imgs, setss_imgs] = useState<img_t[]>([])
    return <>
    <FILE_IMPORT
        imgs={{ss:ss_imgs, setss:setss_imgs}}
    />
    </>
}

export function TEST_FILE_EXPORT(){
    const [ss_boxs, setss_boxs] = useState<box_t[]>([])
    return <>
    <FILE_EXPORT/>
    </>
}