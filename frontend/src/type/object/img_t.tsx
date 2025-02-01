import linked_list_t from "../utility/linked_list_t"

// https://stackoverflow.com/questions/41791933/
// in-typescript-what-is-the-type-of-image

type img_t = {
    title?:undefined|string,
    select?:undefined|boolean,
    img?:undefined|File,
    original?:undefined|File,
    dilate?:undefined|File,
    history?:undefined|linked_list_t<File>,
    ocr_text?:undefined| string,
    osd?:undefined| string
}

export default img_t;