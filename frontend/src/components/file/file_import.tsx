import * as a from "../../type/alias";
import { img_t } from "../../type/obj";

const FILE_FORMAT = ".jpg,.jpeg,.bmp,.dib,.png,.webp,.sr,.ras,.tiff,.tif"

export default function FILE_IMPORT({
    imgs
}:{
    imgs:a.use_state_t<img_t[]>
}){
    const handle_event = (e:React.FormEvent<HTMLInputElement>)=>{
        const TARGET = e.target as HTMLInputElement
        const INPUT = TARGET.files ? Array.from(TARGET.files).map((item)=>{
            return {
                name: item.name as a.name,
                img: item,
                origin:item,
                ocr:"",
                osd:""
            } as img_t
        })
         : []
        imgs.setss(INPUT)
    }
    return <>
        <input
        type="file"
        multiple={true}
        // accept is not working on our Linux Firefox browser 
        accept={FILE_FORMAT}
        onChange={(e)=>{handle_event(e)}}
        />
    </>
}