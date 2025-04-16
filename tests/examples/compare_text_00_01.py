###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)
parent = parent + "/tests/examples/"

###############################################################################################################

from utility.debug import are_2_text_files_same

# https://stackoverflow.com/questions/2690324/
# list-directories-and-get-the-name-of-the-directory

all_folders = [name for name in os.listdir(".") if os.path.isdir(name)]
all_folders = sorted(all_folders)
folder_pair = []
i = 0
while i < len(all_folders):
    folder_pair.append(all_folders[i][:-3])
    i += 2

text_file = "text/text.txt"
print("len(folder_pair)",len(folder_pair))
i = 0
for name in folder_pair:
    path_00 = parent + name + "_00/" + text_file
    path_01 = parent + name + "_01/" + text_file
    if are_2_text_files_same(path_00=path_00, path_01=path_01):
        print(i,"Correct")
    else:
        print(i,"Incorrect\t"+name)
    i += 1
