###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
parent = os.path.dirname(parent)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from img_process_class.img_process_gray import img_process_gray
from ocr_box.ocr_box_editor import ocr_box_editor

path = parent + "/tests/save/src/green_pig_00/img.jpg"
path_rel = "../../"
path_abs = parent +"/save/"
path_target = "output/green_pig_00/"

###############################################################################################################

img = img_process_gray(img=path)
img.zoom(scale=1)
img.rotate()
img.threshold()

# It is not recommended to save jpeg and compute the OCR result, because jpeg file is compressed which make the
# OCR result less reliable.
img = ocr_box_editor(img = img.img)
img.get_ocr(conf=50, lang="eng+tha", psm=11)
img.as_ocr_box_reader().save_img(
    path= path_rel + path_target + "img_rel.jpg"
)
img.as_ocr_box_reader().save_img(
    path= path_abs + path_target + "img_abs.jpg",
    absolute=True
)
img.save_text(
    path= path_rel + path_target + "text_rel.txt"
)
img.save_text(
    path= path_abs + path_target + "text_abs.txt",
    absolute=True
)
