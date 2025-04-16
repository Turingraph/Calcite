###############################################################################################################

import os
import sys

import numpy as np

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from img_process_class.img_process_gray import img_process_gray
from ocr_box.ocr_box_editor import ocr_box_editor

path = parent + "/examples/powder_00/img/img.jpg"

img_thresh = img_process_gray(img=path)
img_thresh.zoom(scale=1)
img_thresh.rotate()
img_thresh.threshold()
img_thresh.save_img(path="img/thresh.jpg")

###############################################################################################################

img_box = ocr_box_editor(img = img_thresh.img)
img_box.update_bbox()
img_box.select_box(min_x=300, min_h=500, max_h=1000)
img_box.add_width(area=75, index=0)
img_box.add_x(area=-10, index=0)
img_box.col_half(index=0, is_double=True)
img_middle = img_box.as_ocr_box_reader().get_many_imgs()[1]
img_box.as_ocr_box_reader().show_img()
img_box.as_ocr_box_reader().save_ith_img(rgb=None, index = 1, path = "img/middle.jpg")

###############################################################################################################

img_target = ocr_box_editor(img = img_middle)
img_target.get_ocr(lang="eng+tha", psm=11)
img_target.save_text()
img_target.as_ocr_box_reader().save_img(path="img/mark.jpg")
