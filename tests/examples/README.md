The purpose of all sub folders inside this forder is for checking if `img_process_class/`, `ocr_box/` 
and `basic_ocr/` works as expected with various image inputs.

This folder has 2 bash scripts
1.  `compare_text_00_01.py`
-   Purpose : Note that all subfolders inside this folder have 2 version, the `_00` which is normal version and `_01` which is the version that use `basic_ocr/` (`basic_ocr/` is the default version of our library). Both versions suppose to produce the same OCR `text/text.txt` output. This file is used for checking this behavior.
2.  `delete_text_output.sh`
-   Purpose : Delete all `text/` (which contains OCR output files) recursively for testing.
3.  `tests_all_examples.sh`
-   Purpose : running all Python files in this directory. 

Warning : Don't use `bash ../python3_tests_subfolder.sh` because the Python files will produce output in wrong folders.

