###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from basic_ocr.basic_ocr import (
    # get_box_img, 
    get_ocr,
    get_transform_img
)

path = parent + "/tests/00_page/img/img.jpg"
img = get_transform_img(
    image=path,
    scale=1.23,
    save_path="thresh"
)
get_ocr(
    image=img.img,
    conf=50,
    save_path_img=["img_text", "thresh"],
    save_path_ocr="thresh"
)
