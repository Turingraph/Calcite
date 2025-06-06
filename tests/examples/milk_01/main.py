###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from basic_ocr.basic_ocr import get_ocr, get_threshold_img

path = parent + "/tests/examples/milk_01/img/img.jpg"

img = get_threshold_img(
    image=path,
    save_path="img/thresh.jpg",
    abs_path_input=True
)

get_ocr(
    image=img.img,
    save_path_img = "img/mark.jpg",
    lang="eng+tha",
    psm=11
)