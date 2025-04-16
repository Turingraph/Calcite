This folder contains
1.  `hello_world/`
-   Purpose : checking if we import file correctly.
2.  `check_bash/` 
-   Purpose : checking if `python3_tests_subfolder.sh` works as expected.
3.  `save_output/`
-   Purpose : checking if our coding file save the image and text output as expected.
-   Contain : image and text output files.
4.  `save_src/`
-   Purpose : checking if our coding file save the image and text output as expected.
-   Contain : image input and Python files.
5.  `compared_imgs.py`
-   Purpose : checking if pair of images a same image.
6.  `python3_tests_subfolder.sh`
-   Purpose : run all Python files in alphabet order in the sub directory of `tests/` folder.
-   Note : use `cd <selected_folder>` then `bash ../python3_tests_subfolder.sh`
7.  `python3_tests.sh`
-   Purpose : run all Python files in alphabet order in the `tests/` folder.
8.  `trash_py_to_txt.sh`
-   Purpose : convert all Python files as Txt file in `trash` folder recursively.

The purpose of other sub folders is to check if `img_process_class/`, `ocr_box/` 
and `basic_ocr/` works as expected with various image inputs.

Note that `thai_osm_00/` and `thai_osm_01/` are the only 2 unfinished testing files
because we don't finish the feature that allow us to filter all box that intersect 
with text yet.
