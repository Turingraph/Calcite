export type output_file_format_t = {
    img:img_file_format_t|undefined|"zip",
    ocr:text_file_format_t|undefined|"zip",
}

export type text_file_format_t = "txt"|"csv"|"json"|"pdf"

export type img_file_format_t = "jpg"|
    "jpeg"|"bmp"|"dib"|"png"|"webp"|
    "sr"|"ras"|"tiff"|"tif"

export type file_format_t = "zip"|text_file_format_t|img_file_format_t
