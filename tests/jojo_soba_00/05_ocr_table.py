###############################################################################################################

import os
import sys

import numpy as np

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from ocr_box.ocr_box_editor import ocr_box_editor

path = "/tests/02_jojo_soba/img/"

names= [
    "eroth",
    "thinn",
    "thresh",
]

for name in names:
    img = ocr_box_editor(img = (parent + path + name + ".jpg"))
    img.update_bbox(kernel=np.ones((13, 23)))
    img.select_box(min_w=1000,max_h=50)
    img.row_box()
    select_img = ocr_box_editor(img = img.as_ocr_box_reader().get_many_imgs()[2])
    select_img.get_ocr(column=[1510,691], lang="eng+tha",psm=11,)
    select_img.as_ocr_box_reader().show_img()
    select_img.save_text(path = ["table",name])

###############################################################################################################
