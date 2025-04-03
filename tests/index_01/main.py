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
    save_path_many_imgs="img/many.jpg"
)
ocr_data = get_many_ocrs(
    image=img_arr,
    save_path_many_imgs="img/many_text.jpg",
    save_path_many_ocrs="text/text.txt"
)

ocr_first = ocr_data[1]
ocr_first.as_ocr_box_reader().save_img(path="../save_target/index_relative.jpg")
ocr_first.get_osd()
ocr_first.save_text(
    path="/home/pc/Desktop/open_close_rider/tests/index_01/text/index_osd.txt", 
    absolute=True)
ocr_first.as_ocr_box_reader().save_img(
    path="/home/pc/Desktop/open_close_rider/tests/save_target/index_absolute.jpg",
    absolute=True)
