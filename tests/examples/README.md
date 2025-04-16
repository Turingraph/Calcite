The purpose of all sub folders inside this forder is for checking if `img_process_class/`, `ocr_box/` 
and `basic_ocr/` works as expected with various image inputs.

This folder has 2 bash scripts
1.  `delete_output.sh`
-   Purpose : Delete all `text/` (which contains OCR output files) recursively for testing.
2.  `tests_all_examples.sh`
-   Purpose : running all Python files in this directory. 

Warning : Don't use `bash ../python3_tests_subfolder.sh` because the Python files will produce output in wrong folders.

