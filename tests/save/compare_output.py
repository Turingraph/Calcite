###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)
parent = parent + "/tests/save/output/"

###############################################################################################################

from contextlib import chdir
from utility.debug import are_2_text_files_same

# https://stackoverflow.com/questions/2690324/
# list-directories-and-get-the-name-of-the-directory

# https://stackoverflow.com/questions/431684/
# how-do-i-change-the-working-directory-in-python

text_abs = "text_abs.txt"
text_rel = "text_rel.txt"

with chdir(parent):
    print("-----------------------------------------------------------")
    all_folders = [name for name in os.listdir(".") if os.path.isdir(name)]
    all_folders = sorted(all_folders)
    folder_pair = []
    i = 0
    while i < len(all_folders):
        folder_pair.append(all_folders[i][:-3])
        i += 2
    print("len(folder_pair)",len(folder_pair))
    i = 0
    for name in folder_pair:
        path_00 = parent + name + "_00/" + text_abs
        path_01 = parent + name + "_01/" + text_rel
        path_02 = parent + name + "_01/" + text_abs
        if are_2_text_files_same(path_00=path_00, path_01=path_01) and are_2_text_files_same(path_00=path_00, path_01=path_02):
            print(i,"Correct")
        else:
            print(i,"Incorrect\t"+name)
        i += 1
    print("-----------------------------------------------------------")
