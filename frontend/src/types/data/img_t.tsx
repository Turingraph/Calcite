import linked_list_t from "./linked_list_t";
import box_t from "./box_t";
// https://stackoverflow.com/questions/41791933/
// in-typescript-what-is-the-type-of-image

type img_t = {
    title?:undefined|string,
    select?:boolean,
    img?:File,
    original?:File,
    dilate?:File,
    history?:undefined|linked_list_t<File>,
    ocr_text?: string,
    osd?: string,
    boxes?:undefined|box_t|box_t[]
}

export default img_t;