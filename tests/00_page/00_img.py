###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from include.img_process_gray import img_process_gray

path = parent + "/tests/00_page/img/img.jpg"

img = img_process_gray(img=path)
img.zoom(zooms=-1.23)
img.rotate()
img.threshold()
img.show()
img.save_img()
