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

names= [
    "eroth",
    "thinn",
    "thresh",
]

ocr_00 = ocr_config(
    lang = 'eng+tha',
    psm=11,
    is_space=False
)

for name in names:
    img = boxes_img(
        img = (parent + path + name + ".jpg"), 
        kernel=np.ones((13, 23)))
    img.select_boxes(min_w=1000,max_h=50)
    img.row_boxes()
    ocr_00.img_to_str(img=img_process_rgb(img.get_imgs()[2]).img)
    ocr_00.save_text(path = ["table",name])

###############################################################################################################

    # Get the right most number of the input image. 
    # But it is easier to use psm 11 instead.

    """
    # img = boxes_img(
    #     img = img_process_rgb(img.get_imgs()[2]).get_rgb_img(), 
    #     kernel=np.ones((100, 13)))
    # img.select_boxes(min_w=100)

    # img.col_boxes()
    # img.col_half(1)
    # img.show_boxes(rgb=[255,0,0])

    # if len(img.boxes) > 0:
    #     img = img.get_imgs()[-1]
    #     img_process_rgb(img = img).show()
    #     ocr_01.img_to_str(img=img)
    #     print(ocr_01.output)
    #     ocr_00.output += "\n---------------\n" + ocr_01.output
    #     ocr_00.save_text(path = ["table",name])
    """

###############################################################################################################
