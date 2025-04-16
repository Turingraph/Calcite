###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)
parent_exam = parent + "/tests/examples/"
parent_save = parent + "/tests/save/output/"

###############################################################################################################

from contextlib import chdir
from utility.debug import are_2_text_files_same

text_txt = "text/text.txt"
text_rel = "text_rel.txt"

with chdir(parent_save):
    print("-----------------------------------------------------------")
    all_folders = [name for name in os.listdir(".") if os.path.isdir(name)]
    all_folders = sorted(all_folders)
    folder_pair = []
    i = 0
    while i < len(all_folders):
        folder_pair.append(all_folders[i][:-3])
        i += 2
    i = 0
    for name in folder_pair:
        path_00 = parent_exam + name + "_00/" + text_txt
        path_01 = parent_save + name + "_00/" + text_rel
        if are_2_text_files_same(path_00=path_00, path_01=path_01):
            print(i,"Correct")
        else:
            print(i,"Incorrect\t"+name)
        i += 1
    print("-----------------------------------------------------------")
