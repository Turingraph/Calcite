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

name = "thresh"

ocr_00 = ocr_config(
    lang = 'eng+tha',
    psm=11
)

img = boxes_img(
    img = (parent + path + name + ".jpg"), 
    kernel=np.ones((13, 23)))
img.select_boxes(min_w=1000,max_h=50)
img.row_boxes()
img.show_boxes(rgb=[
    [255,0,0],
    [0,255,0],
    [0,0,255]
])
ocr_00.img_to_str(img=img_process_rgb(img.get_imgs()[3]).img)
ocr_00.save_text(path = ["table",name])
