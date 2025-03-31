###############################################################################################################

import os
import sys

import numpy as np

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from img_process_class.img_process_rgb import img_process_rgb
from ocr_box.ocr_box_editor import ocr_box_editor

path = "/tests/jojo_soba_00/img/"
name = "thresh"
format = ".jpg"

img = ocr_box_editor(img = (parent + path + name + format))
img.update_bbox(kernel=np.ones((13, 23)))
img.select_box(min_w=1000,max_h=50)
img.row_box()
img.as_ocr_box_reader().show_img(rgb=[
    [255,0,0],
    [0,255,0],
    [0,0,255]
])
ocr = ocr_box_editor(img=img.as_ocr_box_reader().get_many_imgs()[3])
ocr.get_ocr(
    column=[1510,691],
    lang = 'eng+tha',
    psm=11,
    
)
ocr.save_text(path = ["table",name])
