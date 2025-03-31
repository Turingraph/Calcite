###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from basic_ocr.basic_ocr import (
    get_ocr,
    get_transform_img
)
from img_process_class.img_process_gray import img_process_gray

path = parent + "/user_tutorial/00_page/img/img.jpg"
img:img_process_gray = get_transform_img(
    image=path,
    scale=1.23,
    save_path="thresh"
)
get_ocr(
    image=img.img,
    save_path_img="mark",
    save_path_ocr="text"
)
