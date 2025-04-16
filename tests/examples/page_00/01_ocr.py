###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from img_process_class.img_process_gray import img_process_gray
from ocr_box.ocr_box_editor import ocr_box_editor

path = parent + "/examples/page_00/img/img.jpg"
img_thresh = img_process_gray(img = path)
img_thresh.zoom(scale=1.23)
img_thresh.rotate()
img_thresh.threshold()
img_thresh.save_img(path="img/thresh.jpg")

img_thresh.save_img(path="img/thresh.jpg")
img = ocr_box_editor(img = img_thresh.img)
img.get_ocr()
img.as_ocr_box_reader().save_img(path="img/mark.jpg")
img.save_text(path="text/text.txt")
print(img.get_osd())

"""
Page number: 0
Orientation in degrees: 0
Rotate: 0
Orientation confidence: 12.15
Script: Latin
Script confidence: 3.68
"""

###############################################################################################################
