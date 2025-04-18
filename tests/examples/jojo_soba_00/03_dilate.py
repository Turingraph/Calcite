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
dilate_img = img.update_bbox(kernel=np.ones((13, 23)))
dilate_img.save_img(path="img_03_dilate/dilate.jpg")
img.select_box(min_w=1000,max_h=50)
img.sort_box(method=1)

color_dilate_img = ocr_box_editor(img=dilate_img.img, box=img.get_box())
color_dilate_img.as_ocr_box_reader().save_img(path="img_03_dilate/box_dilate.jpg")
img.row_box()
img.as_ocr_box_reader().save_img(path="img_03_dilate/row_origin.jpg")
color_dilate_img = ocr_box_editor(img=dilate_img.img, box=img.get_box())
color_dilate_img.as_ocr_box_reader().save_img(path="img_03_dilate/row_dilate.jpg")
