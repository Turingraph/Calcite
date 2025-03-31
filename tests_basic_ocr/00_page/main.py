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

path = parent + "/tests_basic_ocr/00_page/img/img.jpg"
img = get_transform_img(
    image=path,
    scale=1.23,
    save_path="thresh"
)
get_ocr(
    image=img.img,
    save_path_img="mark",
    save_path_ocr="text"
)
