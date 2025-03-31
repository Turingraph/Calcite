###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from basic_ocr.basic_ocr import (
    get_box_img, 
    get_ocr,
    get_transform_img
)
from img_process_class.img_process_gray import img_process_gray

path = parent + "/tests_basic_ocr/02_jojo_soba/img/img.jpeg"

img = get_transform_img(
    image=path,
    scale=1.35,
    save_path="thresh"
)

img_box = get_box_img(
    image=img.img,
    min_w=1000,
    max_h=50
)
img_box.row_box()

"""
Even if it takes O(n) time to access i-th item of deque.
The deque output after row_box() is usually have less 
than 15 item.

So it is worth using deque over list for faster append.
"""

img_arr = img_box.get_box_read().get_imgarr()

for i in img_arr:
    img_process_gray(img=i).show()

get_ocr(
    image=img_arr[2],
    lang="eng+tha",
    save_path_img="date",
    save_path_ocr="date",
)

get_ocr(
    image=img_arr[3],
    lang="eng+tha",
    save_path_img="table",
    save_path_ocr="table",
    psm=11,
    column=[1510,691]
)
