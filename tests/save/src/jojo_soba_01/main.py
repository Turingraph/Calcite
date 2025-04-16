###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
parent = os.path.dirname(parent)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from basic_ocr.basic_ocr import get_ocr, get_table_img, get_threshold_img

path = parent + "/tests/save/src/jojo_soba_01/img.jpeg"
path_rel = "../../"
path_abs = parent + "/tests/save/"
path_target = "output/jojo_soba_01/"

###############################################################################################################

img = get_threshold_img(
    image=path,
    scale=1.35,
    save_path=None
)
img.thick_font()
img_box = get_table_img(
    image=img.img,
    min_w=1000,
    max_h=50
)
img_box.sort_box(method=1)
img_box.row_box(is_double=True)
img_box.filter_half()
img_arr = img_box.as_ocr_box_reader().get_many_imgs()

get_ocr(
    image=img_arr[3],
    lang="eng+tha",
    save_path_img=path_rel+path_target+"img_rel.jpg",
    save_path_ocr=path_rel+path_target+"text_rel.txt",
    psm=11,
    column=[1510,691]
)

get_ocr(
    image=img_arr[3],
    lang="eng+tha",
    save_path_img=path_abs+path_target+ "img_abs.jpg",
    save_path_ocr=path_abs+path_target+"text_abs.txt",
    absolute_path_img=True,
    absolute_path_ocr=True,
    psm=11,
    column=[1510,691]
)
