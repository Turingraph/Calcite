from collections import deque
import numpy as np
from box.box_edit import box_edit
from img_process_class.img_process_gray import img_process_gray
from img_process.show import get_valid_path
from utility.utility import index_name

def get_transform_img(
        image:np.ndarray|str,
        scale:int = 1,
        save_path:list[str]|str|None = ["img", "img_out", "jpg"],
        thick_font:bool = None
    ) -> img_process_gray:
    # time : O(n) depending on the size of image regardless of how Open CV works
    # space: O(n)
    img = img_process_gray(img=image)
    img.zoom(scale=scale)
    img.rotate()
    img.threshold()
    if thick_font == True:
        img.thick_font()
    if save_path != None:
        img.save_img(path=save_path)
    return img

def get_ocr(
    image:np.ndarray|str,
    save_path_ocr:list[str]|str|None = ["text", "text", "txt"],
    save_path_img:list[str]|str|None = ["img", "img_mark", "jpg"],
    conf:int = 50,
    lang:str = "eng",
    psm:int = 3,
    search:str = "",
    column:list[int] = [],
    csv_separator: str = ", ",
    first_row: int = 0,
    last_row: int | None = None,
    timeout: int = 0,
    rgb: list[tuple[int]] | tuple[int] | int | None = [
            [255, 0, 0], 
            [0, 255, 0], 
            [0, 0, 255]
        ]
) -> box_edit:
    # time : O(n)
    # space: O(n)
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
    if save_path_img != None:
        img.get_box_read().save_img(rgb=rgb,path=save_path_img)
    if save_path_ocr != None:
        img.save_text(path=save_path_ocr)
    img.get_box_read().color_img(rgb=rgb)
    return img

def get_ocr_arr(
    image:box_edit,
    save_path_ocr:list[str]|str|None = ["text", "text", "txt"],
    save_path_img:list[str]|str|None = ["img", "img_mark", "jpg"],
    conf:int = 50,
    lang:str = "eng",
    psm:int = 3,
    search:str = "",
    column:list[int] = [],
    csv_separator: str = ", ",
    first_row: int = 0,
    last_row: int | None = None,
    timeout: int = 0,
    rgb: list[tuple[int]] | tuple[int] | int | None = [
            [255, 0, 0], 
            [0, 255, 0], 
            [0, 0, 255]
        ]
) -> deque[box_edit]:
    # time : O(n) redarding to shape of image.get_img()
    # space: O(n)
    count = 0
    output_arr = deque()
    for img in image.get_box():
        save_path_ocr = get_valid_path(save_path_ocr)
        save_path_img = get_valid_path(save_path_img)
        output = get_ocr(
            image=img,
            save_path_img=[save_path_img[0], save_path_ocr[1]+"_"+index_name(count), save_path_ocr[2]],
            save_path_ocr=[save_path_ocr[0], save_path_img[1]+"_"+index_name(count), save_path_img[2]],
            conf=conf,
            lang=lang,
            psm=psm,
            search=search,
            column=column,
            csv_separator=csv_separator,
            first_row=first_row,
            last_row=last_row,
            timeout=timeout,
            rgb=rgb
        )
        output_arr.append(output)
        count += 1
    return output_arr

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
        save_path_mark:list[str]|str|bool|None = ["img", "img_dilate", "jpg"],
        save_path_dilate:list[str]|str|bool|None = ["img", "img_mark", "jpg"],
        rgb: list[tuple[int]] | tuple[int] | int | None = [
            [255, 0, 0], 
            [0, 255, 0], 
            [0, 0, 255]
        ]
    ) -> box_edit:
    # time : O(n)
    # space: O(n)
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
    if save_path_dilate != None:
        dilate_img.save_img(path=save_path_dilate)
    img.sort_box(method=0)
    if save_path_mark != None:
        img.get_box_read().save_imgarr(rgb=rgb,path=save_path_mark)
    return img
