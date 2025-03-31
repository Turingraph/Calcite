###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

import numpy as np
from basic_ocr.basic_ocr import (
    get_box_img, 
    get_ocr_arr,
    get_transform_img
)

path = parent + "/tests_basic_ocr/01_index/img/img.jpeg"
img = get_transform_img(
    image=path,
    save_path="thresh"
)
img_arr = get_box_img(
    image=img.img,
    kernel=np.ones((13, 3)),
    min_w=20,
    min_h=200,
    save_path_dilate="dilate",
    save_path_mark="mark_box"
)
get_ocr_arr(
    image=img_arr,
    save_path_img="mark_text",
    save_path_ocr="text"
)
