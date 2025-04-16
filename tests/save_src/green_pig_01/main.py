###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from basic_ocr.basic_ocr import get_ocr, get_threshold_img

path = parent + "/tests/save_src/green_pig_01/img.jpg"
path_rel = "../../"
path_abs = parent + "/tests/"
path_target = "save_output/green_pig_01/"

###############################################################################################################

img = get_threshold_img(
    image=path,
    save_path=None
)

ocr_data = get_ocr(
    image=img.img,
    lang="eng+tha",
    save_path_img=path_rel+path_target+"img_rel.jpg",
    save_path_ocr=path_rel+path_target+"text_rel.txt",
    # Set conf = 50, when the image is not processed properly.
    conf=50,
    psm=11
)

ocr_data = get_ocr(
    image=img.img,
    lang="eng+tha",
    save_path_img=path_abs+path_target+"img_abs.jpg",
    save_path_ocr=path_abs+path_target+"text_abs.txt",
    absolute_path_img=True,
    absolute_path_ocr=True,
    # Set conf = 50, when the image is not processed properly.
    conf=50,
    psm=11
)
