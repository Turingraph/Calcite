###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from ocr_box.ocr_box_editor import ocr_box_editor

path = "/tests/00_page/img/"
names = [
    "thick",    # len(img.get_box()) = 267
    "thresh"    # len(img.get_box()) = 268
]

for name in names:
    img = ocr_box_editor(img = (parent + path + name + ".jpg"))
    img.get_ocr(conf=50)
    img.as_ocr_box_reader().save_img(path=["img_text", name])
    print(len(img.get_box()))
    img.save_text(path=name)

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
