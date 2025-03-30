import numpy as np
from box.box_edit import box_edit
from img_process_class.img_process_gray import img_process_gray
from utility.utility import handle_default

def get_transform_img(
        image:np.ndarray|str,
        scale:int = 1,
        save_path:list[str]|str|bool|None = False,
        thick_font:bool = False
    ):
    img = img_process_gray(img=image)
    img.zoom(scale=scale)
    img.rotate()
    img.threshold()
    if thick_font == True:
        img.thick_font()
    if save_path != False:
        img.save_img(
            path=handle_default(
                p=save_path,
                d=["img", "img_out", "jpg"]))
    return img

def get_ocr(
    image:np.ndarray|str,
    save_path_ocr:list[str]|str|bool|None = None,
    save_path_img:list[str]|str|bool|None = False,
    conf:int = 60,
    lang:str = "eng",
    psm:int = 3,
    search:str = "",
    column:list[int] = [],
    csv_separator: str = ", ",
    first_row: int = 0,
    last_row: int | None = None,
    timeout: int = 0,
):
    img = box_edit(img = image)
    img.get_ocr(
        conf=conf,
        lang=lang,
        psm=psm,
        search=search,
        column=column,
        csv_separator=csv_separator,
        first_row=first_row,
        last_row=last_row,
        timeout=timeout
        )
    if save_path_img != False:
        img.get_box_read().save_img(
            path=handle_default(
                p=save_path_img,
                d=["img", "img_out", "jpg"]))
    if save_path_ocr != False:
        img.save_text(path=handle_default(
                p=save_path_ocr,
                d=["text", "text", "txt"]))
    return img

def get_box_img(
        image:np.ndarray|str,
        kernel=np.ones((13, 23)),
        min_x:int = 0,
        max_x:int|None = None,
        min_y:int = 0,
        max_y:int|None = None,
        min_w:int = 0,
        max_w:int|None = None,
        min_h:int = 0,
        max_h:int|None = None,
        save_path_mark:list[str]|str|bool|None = None,
        save_path_dilate:list[str]|str|bool|None = False,
        rgb: list[tuple[int]] | tuple[int] | int | None = [
            [255, 0, 0], 
            [0, 255, 0], 
            [0, 0, 255]
        ]
    ):
    img = box_edit(img = image)
    dilate_img = img.update_area_box(kernel=kernel)
    img.select_box(
        min_h=min_h,
        min_w=min_w,
        min_x=min_x,
        min_y=min_y,
        max_h=max_h,
        max_w=max_w,
        max_x=max_x,
        max_y=max_y,
    )
    if save_path_dilate != False:
        dilate_img.save_img(path=handle_default(
                p=save_path_dilate,
                d=["img", "img_out", "jpg"]))
    img.sort_box(method=0)
    if save_path_mark != False:
        img.get_box_read().save_imgarr(rgb=rgb,path=handle_default(
                p=save_path_mark,
                d=["img", "img_out", "jpg"]))
    return img
