import numpy as np
import pytesseract
from pytesseract import Output

from img_process.contour import get_contours
from img_process.utility import get_size
from img_process_class.img_process_gray import img_process_gray


def update_area_box(
                img:np.ndarray,             
                thresh_px: int = 0,
                kernel: np.ndarray = np.ones(shape=(2, 30)),
                ksize: int = 9) -> None:
        img:img_process_gray = img_process_gray(img=img)
        img.contour_img(
            thresh_px=thresh_px,
            kernel=kernel,
            ksize=ksize)
        return [
            get_contours(img=img.img),
            img.img
        ]

def select_box(
            w:int,
            h:int,
            all_box:list[list[int]],
            min_x:int = 0,
            max_x:int|None = None,
            min_y:int = 0,
            max_y:int|None = None,
            min_w:int = 0,
            max_w:int|None = None,
            min_h:int = 0,
            max_h:int|None = None,
            ) -> None:

    min_x = get_size(size=min_x, maxval=w)
    min_y = get_size(size=min_y, maxval=h)
    max_x = get_size(size=max_x, maxval=w,default_size=w)
    max_y = get_size(size=max_y, maxval=h,default_size=h)

    min_w = get_size(size=min_w, maxval=w)
    min_h = get_size(size=min_h, maxval=h)
    max_w = get_size(size=max_w, maxval=w,default_size=w)
    max_h = get_size(size=max_h, maxval=h,default_size=h)

    box = []
    for i in all_box:
        if (
            (i[0] > min_x and i[0] < max_x) and 
            (i[1] > min_y and i[1] < max_y) and 
            (i[2] > min_w and i[2] < max_w) and 
            (i[3] > min_h and i[3] < max_h)
            ):
            box.append(i)
    return box 

def get_ocr(
            img:np.ndarray,
            lang:str = "eng",
            config:str = '',
            timeout:int = 0,
            conf:int = 60, 
            search:str="", 
            is_space:bool = True,
            column:list[int] = []
        ):
        # https://nanonets.com/blog/ocr-with-tesseract/
        col = []
        for i in column:
            if i > 0 and i < img.shape[1]:
                 col.append(i)
        col.sort()

        output_box = []

        d = pytesseract.image_to_data(
            img, 
            output_type=Output.DICT,
            lang=lang,
            config=config,
            timeout=timeout
        )
        output_text = ""
        col_index = 0
        for i in range(len(d['text'])):
            if (
                int(d['conf'][i]) > conf and 
                (search == "" or (search != "" and search in d['text'][i]))):

                    if len(col) > col_index:
                        if d['left'][i] > col[col_index]:
                            output_text += ", "
                            col_index += 1

                    output_box.append((d['left'][i], d['top'][i], d['width'][i], d['height'][i]))
                    if len(output_box) > 1:
                        if d['left'][i] <= output_box[-2][0]:
                            output_text += "\n"
                            col_index = 0
                    output_text += d['text'][i]

                    if is_space == True:
                        output_text += " "
        return [
             output_box,
             output_text
        ]
