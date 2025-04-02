###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

import numpy as np

from basic_ocr.basic_ocr import get_many_ocrs, get_table_img, get_threshold_img

path = parent + "/tests/index_01/img/img.jpeg"
img = get_threshold_img(
    image=path,
    save_path="img/thresh.jpg"
)
img_arr = get_table_img(
    image=img.img,
    kernel=np.ones((13, 3)),
    min_w=20,
    min_h=200,
    save_path_dilate="img/dilate.jpg",
    save_path_mark="img/mark_box.jpg"
)
get_many_ocrs(
    image=img_arr,
    save_path_img="img/mark_text.jpg",
    save_path_ocr="text/text.txt"
)
