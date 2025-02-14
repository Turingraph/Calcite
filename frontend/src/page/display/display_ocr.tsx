import React, {useEffect, useState} from 'react'
import * as a from '../../type/alias'
import Text_area from '../../components/input/text_area'
import { Str_to_h } from '../../utils/convert'
import Panel from '../../components/asset/panel'

export default function Display_ocr({
    //
}:{
    //
}){
    const [ss_osd_orient, setss_osd_orient] = useState<number>(0)
    const [ss_osd_rotate, setss_osd_rotate] = useState<number>(0)
    const [ss_osd_orient_conf, setss_osd_orient_conf] = useState<number>(0)
    const [ss_osd_script, setss_osd_script] = useState<number>(0)
    const [ss_osd_script_conf, setss_osd_script_conf] = useState<number>(0)
    const [ss_ocr, setss_ocr] = useState<string>("")
    const JSX_OSD = <>
        <Str_to_h opt_name={"Orientation and Script report" as a.opt_name}/>
        <Str_to_h opt_name={"Orient: " + ss_osd_orient as a.opt_name} />
        <Str_to_h opt_name={"Rotate: " + ss_osd_rotate as a.opt_name} />
        <Str_to_h opt_name={"Orient Score: " + ss_osd_orient_conf as a.opt_name} />
        <Str_to_h opt_name={"Script: " + ss_osd_script as a.opt_name} />
        <Str_to_h opt_name={"Script Score: " + ss_osd_script_conf as a.opt_name} />
    </>
    const JSX_OCR = <>
        <Panel jsx_element={<Text_area
            opt_name={"OCR output" as a.opt_name}
            input={{ss:ss_ocr, setss:setss_ocr}}
        />}/>
    </>
    return <>{JSX_OSD}{JSX_OCR}</>
}