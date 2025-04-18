import numpy as np

from img_process_class.img_process_gray import img_process_gray
from ocr_box.ocr_box_editor import ocr_box_editor
from ocr_box.ocr_box_reader import ocr_box_reader
from utility.save import get_valid_ith_path


def get_threshold_img(
        image:np.ndarray|str,
        scale:int = 1,
        save_path:str|None = "img/img_out.jpg",
        abs_path_input:bool = False,
        abs_path_output:bool = False,
        thick_font:bool = False
    ) -> img_process_gray:
    # time : O(n) depending on the size of image regardless of how Open CV works
    # space: O(n)
    img = img_process_gray(img=image, abs_path=abs_path_input)
    img.zoom(scale=scale)
    img.rotate()
    img.threshold()
    if thick_font == True:
        img.thick_font()
    if save_path != None:
        img.save_img(
            path=save_path,
            abs_path=abs_path_output
        )
    return img

def get_ocr(
    image:np.ndarray|str,
    save_path_ocr:str|None = "text/text.txt",
    save_path_img:str|None = None,
    abs_path_output_ocr:bool = False,
    abs_path_output_img:bool = False,
    abs_path_input:bool = False,
    config: str = "-c preserve_interword_spaces=0",
    conf:int = 0,
    lang:str = "eng",
    psm:int = 3,
    oem:int = 3,
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
) -> ocr_box_editor:
    # time : O(n)
    # space: O(n)
    img = ocr_box_editor(img = image, abs_path=abs_path_input)
    img.get_ocr(
        conf=conf,
        lang=lang,
        psm=psm,
        oem=oem,
        config=config,
        search=search,
        column=column,
        csv_separator=csv_separator,
        first_row=first_row,
        last_row=last_row,
        timeout=timeout
        )
    img.as_ocr_box_reader().color_img(rgb=rgb)
    if save_path_img != None:
        img.as_ocr_box_reader().save_img(
            rgb=rgb,
            path=save_path_img,
            abs_path=abs_path_output_img)
    if save_path_ocr != None:
        img.save_text(
            path=save_path_ocr,
            abs_path=abs_path_output_ocr)
    return img

def get_many_ocrs(
    image:ocr_box_editor,
    save_path_many_ocrs:str|None = "text/text.txt",
    save_path_many_imgs:str|None = None,
    abs_path_output_ocrs:bool = False,
    abs_path_output_imgs:bool = False,
    abs_path_input:bool = False,
    conf:int = 0,
    lang:str = "eng",
    psm:int = 3,
    oem:int = 3,
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
) -> list[ocr_box_editor]:
    # time : O(n) regarding to shape of image.get_img()
    # space: O(n)
    index = 0
    output_arr = []
    for img in image.as_ocr_box_reader().get_many_imgs():
        sub_save_path_img = None
        if save_path_many_imgs != None:
            sub_save_path_img = get_valid_ith_path(
            path = save_path_many_imgs,
            index = index
        )
        sub_save_path_ocr = None
        if save_path_many_ocrs != None:
            sub_save_path_ocr = get_valid_ith_path(
            path = save_path_many_ocrs,
            index = index
        )
        output = get_ocr(
            image=img,
            save_path_img=sub_save_path_img,
            save_path_ocr=sub_save_path_ocr,
            abs_path_output_img=abs_path_output_imgs,
            abs_path_output_ocr=abs_path_output_ocrs,
            abs_path_input=abs_path_input,
            conf=conf,
            lang=lang,
            psm=psm,
            oem=oem,
            search=search,
            column=column,
            csv_separator=csv_separator,
            first_row=first_row,
            last_row=last_row,
            timeout=timeout,
            rgb=rgb
        )
        output_arr.append(output)
        index += 1
    return output_arr

def get_table_img(
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
        save_path_many_imgs:str|None = None,
        save_path_dilate:str|None = None,
        abs_path_output_imgs:  bool=False,
        abs_path_output_dilate:bool=False,
        abs_path_input:bool = False,
        rgb: list[tuple[int]] | tuple[int] | int | None = [
            [255, 0, 0], 
            [0, 255, 0], 
            [0, 0, 255]
        ]
    ) -> ocr_box_editor:
    # time : O(n) + O(n log(n))
    # space: O(n)
    img = ocr_box_editor(img = image, abs_path=abs_path_input)
    dilate_img = img.update_bbox(kernel=kernel)
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
    dilate_img = ocr_box_reader(
        img=dilate_img.img,
        box=img.get_box()
    )
    if save_path_dilate != None:
        dilate_img.save_img(
            rgb=rgb,
            path=save_path_dilate,
            abs_path=abs_path_output_dilate)
    img.sort_box(method=0)
    if save_path_many_imgs != None:
        img.as_ocr_box_reader().save_many_imgs(
            rgb=rgb,
            path=save_path_many_imgs,
            abs_path=abs_path_output_imgs)
    return img
