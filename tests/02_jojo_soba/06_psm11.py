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

path = "/tests/02_jojo_soba/img/"

names= [
    "eroth",
    "thinn",
    "thresh",
]

for name in names:
    img = box_edit(img = parent+path+name+".jpg")
    img.get_ocr(
        lang = 'eng+tha',
        psm=11,
        is_space=False
    )
    img.save_text(path = ["psm11",name])

###############################################################################################################
