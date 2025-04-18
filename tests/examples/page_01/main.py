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

path = "img/img.jpg"
img = get_threshold_img(
    image=path,
    scale=1.23,
    save_path="img/thresh.jpg",
    abs_path_input=False
)
get_ocr(
    image=img.img,
    # conf=50,
    save_path_img="img/mark.jpg",
    save_path_ocr="text/text.txt"
)
