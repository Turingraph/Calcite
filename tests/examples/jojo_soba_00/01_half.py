###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

import numpy as np

from ocr_box.ocr_box_editor import ocr_box_editor

path = "img/thinn.jpg"
img = ocr_box_editor(img = path, abs_path=False)
img.update_bbox(kernel=np.ones((13,23)))
img.select_box(min_w = 1000, max_h=50)
# img.as_ocr_box_reader().show_img(rgb=[255,0,0], title="origin")
img.as_ocr_box_reader().save_img(rgb=[255,0,0], path = "img_01_half/origin.jpg")
img.row_half(1)
# img.as_ocr_box_reader().show_img(rgb=[255,0,0], title="half")
img.as_ocr_box_reader().save_img(rgb=[255,0,0], path="img_01_half/half.jpg")
img.as_ocr_box_reader().save_many_imgs(rgb=[255,0,0], path="img_01_half/subhalf.jpg")
