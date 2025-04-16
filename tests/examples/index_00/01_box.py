###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

import numpy as np
from ocr_box.ocr_box_editor import ocr_box_editor

path = parent + "/examples/index_00/img/img.jpeg"
img = ocr_box_editor(img = path)
dilate_img = img.update_bbox(kernel=np.ones((13, 3)))
img.select_box(min_w=20,min_h=200)
dilate_img.save_img(path="img/dilate_img13x3.jpg")
img.sort_box(method=0)
img.as_ocr_box_reader().save_many_imgs(path = "img/box_img.jpg")
