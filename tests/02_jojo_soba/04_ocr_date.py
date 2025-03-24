###############################################################################################################

import os
import sys

import numpy as np

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from box.box_edit import box_edit
from include.ocr_config import ocr_config

###############################################################################################################

path = "/tests/02_jojo_soba/img/"

names= [
    "eroth",
    "thinn",
    "thresh",
]

ocr_setting = ocr_config(
    lang = 'eng+tha',
    is_space=False
)

for name in names:
    img = box_edit(img = (parent + path + name + ".jpg"))
    img.update_area_box(kernel=np.ones((13, 23)))
    img.select_box(min_w=1000,max_h=50)
    img.row_box()
    ocr_setting.img_to_str(img=img.get_img())
    ocr_setting.save_text(path = ["date",name])

###############################################################################################################
