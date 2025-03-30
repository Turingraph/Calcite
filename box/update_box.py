
import re

import cv2
import numpy as np
import pytesseract
from pytesseract import Output

from img_process.contour import get_contours
from img_process.utility import get_size
from img_process_class.img_process_gray import img_process_gray
from img_process_class.img_process_rgb import img_process_rgb

# check if box_00 intersect with box_01
# this does not check if box_01 in box_00
def boundary_checking(
        x_00:int,
        y_00:int,
        w_00:int,
        h_00:int,
        x_01:int,
        y_01:int,
        w_01:int,
        h_01:int,
        ):
    if (((
        (x_00 >= x_01) and 
        (x_00 <= x_01 + w_01)
        ) or (
        (x_00 + w_00 >= x_01) and 
        (x_00 + w_00 <= x_01 + w_01)
        )) and ((
        (y_00 >= y_01) and 
        (y_00 <= y_01 + h_01)
        ) or (
        (y_00 + h_00 >= y_01) and 
        (y_00 + h_00 <= y_01 + h_01)
        )
        )
        ):
        return True
    return False

def update_area_box(
            img:np.ndarray,             
            thresh_px: int = 0,
            kernel: np.ndarray = np.ones(shape=(2, 30)),
            ksize: int = 9,
            show_result:list[int]|int|None|bool = None
            ) -> list:
        img:img_process_gray = img_process_gray(img=img)
        img.contour_img(
            thresh_px=thresh_px,
            kernel=kernel,
            ksize=ksize)
        if isinstance(show_result, (list[int], int)):
            box = get_contours(img.img)
            for b in box:
                img.rectangle(rgb=show_result, x=b[0], y=b[1], w=b[2], h=b[3])
        if show_result not in [None, False]:
            img.show()
        return img.img

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

def update_line(
        img:np.ndarray,
        ksize_w:int = 5,
        ksize_h:int = 5,
        low_thresh = 50,
        high_thresh= 150,
        thresh:int = 100,       # all line that less than thresh will be eliminated.
        min_line_len:int = 100, # all line that is shorter than this will be eliminated.
        max_line_gap:int = 20,  # all line that have more gap than this will be eliminated.
        show_result:list[int]|int|None|bool = None
    ):
    # https://stackoverflow.com/questions/45322630/
    # how-to-detect-lines-in-opencv
    img:img_process_gray = img_process_gray(img=img)
    img.gauss_blur(ksize_w=ksize_w,ksize_h=ksize_h)
    img.canny(low_thresh=low_thresh, high_thresh=high_thresh)
    box = []
    lines = cv2.HoughLinesP(
         image=img.img, 
         rho=1, 
         theta=np.pi/180, 
         threshold=thresh, 
         minLineLength=min_line_len, 
         maxLineGap=max_line_gap)
    rgb_img = img_process_rgb(img = img.img)
    for line in lines:
        x_00, y_00, x_01, y_01 = line[0]
        if isinstance(show_result, (list, int)):
            rgb_img.line(rgb=show_result, x_00=x_00, y_00=y_00, x_01=x_01, y_01=y_01)
        x = x_00
        y = y_00
        w = x_01 - x_00
        h = y_01 - y_00
        if x_01 < x_00:
            x = x_01 
            w = x_00 - x_01
        if y_01 < y_00:
            y = y_01 
            h = y_00 - y_01
        box.append((x, y, w, h))
    if show_result not in [None, False]:
        rgb_img.show()
    return [box, rgb_img]

def select_line(
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
            ((i[2] > min_w and i[2] < max_w) or 
            (i[3] > min_h and i[3] < max_h))
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
            column:list[int] = [],
            csv_separator:str = ", ",
            first_row:int = 0,
            last_row:int|None = None
        ):
        # https://nanonets.com/blog/ocr-with-tesseract/
        # https://stackoverflow.com/questions/6676675/
        # in-python-how-do-i-check-if-a-string-has-alphabets-or-numbers
        col = []
        for i in column:
            if i > 0 and i < img.shape[1]:
                 col.append(i)
        col.sort()
        first_row = get_size(size=first_row, maxval=img.shape[1])
        last_row  = get_size(size=last_row, maxval=img.shape[1], default_size=img.shape[1])

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
                (search == "" or (search != "" and search in d['text'][i])) and 
                (d['text'][i] != " ")
                ):
                    if len(col) > col_index and d['top'][i] > first_row and d['top'][i] < last_row:
                        if d['left'][i] > col[col_index]:
                            output_text += csv_separator
                            col_index += 1

                    output_box.append((d['left'][i], d['top'][i], d['width'][i], d['height'][i]))
                    if len(output_box) > 1:
                        if d['left'][i] <= output_box[-2][0]:
                            output_text += "\n"
                            col_index = 0

                    output_text += str(d['text'][i]).replace(" ", "")
                    if len(output_text) > 0:
                        if bool(re.match('[A-Za-z0-9]',output_text[-1])) or output_text[-1] in "!@#$%^&*()_-+=[]:;\"\'<>?~`":
                            output_text += " "
        return [
             output_box,
             output_text
        ]
