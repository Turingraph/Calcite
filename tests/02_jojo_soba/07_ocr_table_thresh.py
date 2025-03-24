###############################################################################################################

import os
import sys

import numpy as np

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from box.box_edit import box_edit
from img_process_class.img_process_rgb import img_process_rgb

path = "/tests/02_jojo_soba/img/"
name = "thresh"
format = ".jpg"

img = box_edit(img = (parent + path + name + format))
img.update_area_box(kernel=np.ones((13, 23)))
img.select_box(min_w=1000,max_h=50)
img.row_box()
img.get_box_read().show_img(rgb=[
    [255,0,0],
    [0,255,0],
    [0,0,255]
])
ocr = box_edit(img=img.get_box_read().get_imgarr()[3])
ocr.get_ocr(
    column=[1510,691],
    lang = 'eng+tha',
    psm=11,
    is_space=False
)
ocr.save_text(path = ["table",name])
