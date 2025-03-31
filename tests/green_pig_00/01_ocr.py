###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from ocr_box.ocr_box_editor import ocr_box_editor

path = "/tests/green_pig_00/img/"
name = "thresh"

img = ocr_box_editor(img = (parent + path + name + ".jpg"))
img.get_ocr(conf=50, lang="eng+tha", psm=11)
img.as_ocr_box_reader().save_img(path= "mark")
print(len(img.get_box())) 
img.save_text()
print(img.get_osd())
"""
303
Page number: 0
Orientation in degrees: 0
Rotate: 0
Orientation confidence: 12.80
Script: Thai
Script confidence: 3.19
"""
