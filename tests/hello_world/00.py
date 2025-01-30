###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

j = 0
for i in sys.path:
    print(j, "\t" + i)
    j += 1

# 0       /home/pc/Desktop/Project/JOCR_SOBA/Examples/01_Page
# 1       /usr/lib/python312.zip
# 2       /usr/lib/python3.12
# 3       /usr/lib/python3.12/lib-dynload
# 4       /home/pc/Desktop/Project/JOCR_SOBA/.venv/lib/python3.12/site-packages
# 5       /home/pc/Desktop/Project/JOCR_SOBA
