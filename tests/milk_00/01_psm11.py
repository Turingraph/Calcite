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

path = "/tests/milk_00/img/"
name = "thresh"
format = ".jpg"

img = ocr_box_editor(img = parent+path+name+format)
img.get_ocr(
    lang = 'eng+tha',
    psm=11,
)
img.as_ocr_box_reader().save_img(path="img/psm11.jpg")
img.as_ocr_box_reader().save_img(
    path="/home/pc/Desktop/open_close_rider/tests/save_target/vegan/spoil_milk.jpg",
    absolute=True)
img.save_text(path = "text/psm11.txt")

###############################################################################################################
