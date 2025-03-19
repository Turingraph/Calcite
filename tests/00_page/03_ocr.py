###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from include.img_process_rgb import img_process_rgb
from include.ocr_config import ocr_config

path = "/tests/00_page/img/img_out.jpg"

name = "single"
ocr_setting = ocr_config(
    lang = 'eng'
)
img = img_process_rgb(img = (parent + path)).img
ocr_setting.img_to_str(img=img)
ocr_setting.save_text(path = ["text_oop", name])

###############################################################################################################
