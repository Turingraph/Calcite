###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

import numpy as np
from basic_ocr.basic_ocr import get_ocr, get_table_img, get_threshold_img

path = parent + "/tests/save_src/index_01/img.jpeg"
path_rel = "../../"
path_abs = parent + "/tests/"
path_target = "save_output/index_01/"

###############################################################################################################

img = get_threshold_img(
    image=path,
    save_path=None
)

img_arr = get_table_img(
    image=img.img,
    kernel=np.ones((13, 3)),
    min_w=20,
    min_h=200,
    save_path_dilate=None,
    save_path_many_imgs=None
)

item = img_arr.as_ocr_box_reader().get_many_imgs()[0]

ocr_data = get_ocr(
    image=item,
    save_path_img=path_rel+path_target+"img_rel.jpg",
    save_path_ocr=path_rel+path_target+"text_rel.txt"
)

ocr_data = get_ocr(
    image=item,
    save_path_img=path_abs+path_target+"img_rel.jpg",
    save_path_ocr=path_abs+path_target+"text_rel.txt",
    absolute_path_img=True,
    absolute_path_ocr=True
)
