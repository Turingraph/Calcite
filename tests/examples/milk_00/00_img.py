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

path = parent + "/tests/examples/milk_00/img/img.jpg"

img = img_process_gray(img=path, abs_path=True)
img.zoom(scale=1)
img.rotate()
img.threshold()
img.save_img(path="img/thresh.jpg")
