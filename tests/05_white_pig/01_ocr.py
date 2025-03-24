###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from box.box_edit import box_edit

path = "/tests/05_white_pig/img/"
name = "thresh"

img = box_edit(img = (parent + path + name + ".jpg"))
img.get_ocr(conf=50, lang="eng+tha", is_space=False)
img.get_box_read().save_img(path= "mark")
print(len(img.get_box())) 
# 380
img.save_text()

print(img.get_osd())
"""
Page number: 0
Orientation in degrees: 0
Rotate: 0
Orientation confidence: 12.80
Script: Thai
Script confidence: 3.19
"""
