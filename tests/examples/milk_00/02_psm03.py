###############################################################################################################

import os
import sys

import numpy as np

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from ocr_box.ocr_box_editor import ocr_box_editor
from img_process_class.img_process_gray import img_process_gray

path = "/tests/examples/milk_00/img/img.jpg"

img_thresh = img_process_gray(img = parent+path,abs_path=True)
img_thresh.threshold()
img = ocr_box_editor(img = img_thresh.img)
img.get_ocr(
    lang = 'eng+tha',
    psm=3,
)
img.as_ocr_box_reader().save_img(path="img/psm03.jpg")
img.save_text(path = "text/psm03.txt")

###############################################################################################################
