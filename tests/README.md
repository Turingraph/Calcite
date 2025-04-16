The purpose of this folder is to check if `img_process_class/`, `ocr_box/` 
and `basic_ocr/` works as expected.

Note that `thai_osm_00/` and `thai_osm_01/` are the only 2 unfinished testing files
because we don't finish the feature that allow us to filter all box that intersect 
with text yet.

This folder contains
1.  `hello_world/`
-   Purpose : checking if we import file correctly.
2.  `check_run_all/` 
-   Purpose : checking if `python3_tests_subfolder.sh` works as expected.
3.  `compared_imgs.py`
-   Purpose : checking if pair of images a same image.
4.  `python3_tests_subfolder.sh`
-   Purpose : run all Python files in alphabet order in the sub directory of `tests/` folder.
-   Note : use `cd <selected_folder>` then `bash ../python3_tests_subfolder.sh`
5.  `python3_tests.sh`
-   Purpose : run all Python files in alphabet order in the `tests/` folder.
6.  `trash_py_to_txt.sh`
-   Purpose : convert all Python files as Txt file in `trash` folder recursively.
