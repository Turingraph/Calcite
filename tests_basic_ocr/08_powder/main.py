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
    get_ocr,
    get_box_img,
)

path = parent + "/tests_basic_ocr/08_powder/img/img.jpg"

img = get_transform_img(
    image=path,
    # save_path="thresh"
)

img_box = get_box_img(
    image=img.img,
    min_x=300,
    min_h=500,
    max_h=1000,
)

img_box.add_width(area=75, index=0)
img_box.add_x(area=-10, index=0)
img_box.col_half(index=0, is_double=True)

img_box.get_box_read().show_img()

target = img_box.get_box_read().get_imgarr()[1]

get_ocr(
    image=target,
    psm=11,
    save_path_img = "mark",
    lang="eng+tha",
)
