###############################################################################################################

import os
import sys

import numpy as np

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from include.boxes_img import boxes_img
from include.img_process_rgb import img_process_rgb
from include.ocr_config import ocr_config

path = "/tests/02_jojo_soba/img/"

names= [
    "eroth",
    "thinn",
    "thresh",
]

ocr_setting = ocr_config(
    lang = 'eng+tha',
    psm=11
)

for name in names:
    ocr_setting.img_to_str(img=parent+path+name+".jpg")
    ocr_setting.save_text(path = ["psm11",name])

###############################################################################################################
