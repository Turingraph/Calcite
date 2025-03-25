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

path = "/tests/07_milk/img/"
name = "thresh"
format = ".jpg"

img = box_edit(img = parent+path+name+format)
img.get_ocr(
    lang = 'eng+tha',
    psm=11,
    is_space=False
)
img.get_box_read().save_img(path="psm11")
img.save_text(path = "psm11")

###############################################################################################################
