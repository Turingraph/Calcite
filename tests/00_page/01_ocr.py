###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from ocr.save_text import save_text
from ocr.img_to_str import img_to_str
from include.img_process_rgb import img_process_rgb
from include.ocr import ocr

path = [
    "/tests/00_page/img/img.jpg",
    "/tests/00_page/img_out/img_out.jpg",
]

name = ["origin", "modified"]

###############################################################################################################

for i in range(len(path)):
    img = img_process_rgb(img = (parent + path[i])).img
    text = img_to_str(img = img, lang='eng')
    save_text(text=text, path=name[i])

###############################################################################################################

ocr_setting = ocr(
    lang = 'eng'
)
for i in range(len(path)):
    img = img_process_rgb(img = (parent + path[i])).img
    ocr_setting.img_to_str(img=img)
    ocr_setting.save_text(path = ["str_out_oop", name[i]])

###############################################################################################################
