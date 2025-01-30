###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from include.img_process_gray import img_process_gray
from include.img_process_rgb import img_process_rgb

path = parent + "/tests/__fft/img/jojo_meme.jpg"
img = img_process_rgb(img=path)
img.show(title="color")
# img = img_process_gray(img=img.img)
# img.show(title="b&w")
# img.fft_sharp(row=100, col=100)
# img.show("sharp")
# img.save("fft_sharp")

"""
python3 img.py
"""
