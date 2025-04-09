###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from img_process_class.img_process_gray import img_process_gray
from ocr_box.ocr_box_editor import ocr_box_editor

path = parent + "/tests/green_pig_00/img/img.jpg"

img = img_process_gray(img=path)
img.zoom(scale=1)
img.rotate()
img.threshold()
img.save_img(path="img/thresh.jpg")
# It is not recommended to save jpeg and compute the OCR result, because jpeg file is compressed which make the
# OCR result less reliable.
img = ocr_box_editor(img = img.img)
img.get_ocr(conf=50, lang="eng+tha", psm=11)
img.as_ocr_box_reader().save_img(path= "img/mark.jpg")
img.save_text()
img.get_osd()
img.save_text(path="text/osd.txt")
