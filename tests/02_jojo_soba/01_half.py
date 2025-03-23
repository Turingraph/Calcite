###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

# from box.box_manage import box_manage
# from box.img_view import img_output
import numpy as np

from box.img_dilate import img_dilate

path = parent + "/tests/02_jojo_soba/img/thinn.jpg"
img = img_dilate(img = path, kernel=np.ones((13, 23)))
img.select_box(min_w = 1000, max_h=50)
img.get_img_output().show_img(rgb=[255,0,0], title="origin")
img.get_img_output().save_img(rgb=[255,0,0], path = ["img_01_half","origin"])

box_arr = img.get_box_manage()
box_arr.row_half(1)
img.box = box_arr.get_box()

img.get_img_output().show_img(rgb=[255,0,0], title="half")
img.get_img_output().save_img(rgb=[255,0,0], path=["img_01_half","half"])
img.get_img_output().save_multiple_imgs(rgb=[255,0,0], path=["img_01_half", "subhalf"])
