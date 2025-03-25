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

###############################################################################################################

path = "/tests/02_jojo_soba/img/"

names= [
    "eroth",
    "thinn",
    "thresh",
]

for name in names:
    img = box_edit(img = (parent + path + name + ".jpg"))
    img.update_area_box(kernel=np.ones((13, 23)))
    img.select_box(min_w=1000,max_h=50)
    img.row_box()
    select_img = box_edit(img = img.get_box_read().get_imgarr()[1])
    select_img.get_ocr(lang = 'eng+tha', )
    select_img.get_box_read().show_img()
    select_img.save_text(path = ["date",name])

###############################################################################################################
