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
    img = ocr_box_editor(img = parent+path+name+".jpg")
    img.get_ocr(
        lang = 'eng+tha',
        psm=11,
        
    )
    img.save_text(path = ["psm11",name])

###############################################################################################################
