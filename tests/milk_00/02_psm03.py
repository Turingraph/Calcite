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
    psm=3,
    
)
img.as_ocr_box_reader().save_img(path="img/psm03.jpg")
img.save_text(path = "text/psm03.txt")

###############################################################################################################
