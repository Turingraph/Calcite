###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from basic_ocr.basic_ocr import (
    get_transform_img,
    get_ocr
)

path = parent + "/tests_basic_ocr/05_white_pig/img/img.jpg"

img = get_transform_img(
    image=path,
    save_path="thresh"
)

get_ocr(
    image=img.img,
    save_path_img = "mark",
    lang="eng+tha",
    psm=11
)