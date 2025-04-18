###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from img_process_class.img_process_gray import img_process_gray

path = "img/img.jpg"

img = img_process_gray(img=path,abs_path=False)
img.zoom(scale=1.23)
img.rotate()
img.threshold()
img.save_img(path="img/thresh.jpg")
img.thick_font()
img.save_img(path="img/thick.jpg")
