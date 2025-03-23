###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from include.boxes_dilate import boxes_dilate
from include.boxes_manage import boxes_manage
from include.boxes_view import boxes_view
import numpy as np

path = parent + "/tests/01_index/img/img.jpeg"
img = boxes_dilate(img = path, kernel=np.ones((13, 3)))
img.select_boxes(min_w=20,min_h=200)

dilate_img = img.dilate_img
dilate_img.save_img(path="dilate_img13x3")

sorted_box = boxes_manage(boxes = img.boxes)
sorted_box.sort_boxes(method=0)

img_view = boxes_view(img = img.get_img(), boxes = sorted_box.get_boxes())
img_view.save_boxes(path = "boxes_img")
