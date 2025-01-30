###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

# https://www.geeksforgeeks.org/python-import-from-parent-directory/
# https://www.geeksforgeeks.org/python-sys-module/

from include.hello_world import *

hello_world()
print()
print_path()
