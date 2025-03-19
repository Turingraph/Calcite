###############################################################################################################

import os
import sys

import cv2

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from include.img_process_rgb import img_process_rgb
from include.ocr_config import ocr_config

path = "/tests/02_jojo_soba/img_02_row/row_01.jpg"

name = "thinn"
ocr_setting = ocr_config(
    lang = 'eng+tha'
)
img = img_process_rgb(img = (parent + path)).img
ocr_setting.img_to_str(img=img)
ocr_setting.save_text(path = ["date",name])

###############################################################################################################
