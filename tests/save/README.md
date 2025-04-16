This folder have 2 subfolders.
1.  `output/`
-   Contain : image and text output files.
2.  `src/`
-   Contain : image input and Python files.
3.  `compare_output.py`
-   Purpose : Check if `<file_name>_00/text_rel.txt`, `<file_name>_00/text_abs.txt`, `<file_name>_01/text_rel.txt` and `<file_name>_01/text_abs.txt` are the same, because `_01` means the version that use `basic_ocr/`. Both `<file_name>_00/` and `<file_name>_01/` should produce same output and `text_rel.txt` and `text_abs.txt` should be the same.
4.  `delete_output.sh`
-   Purpose : Delete `output/`
5.  `tests_src.sh`
-   Purpose : Check if all Python files inside `src/` works as expected.

Warning : Don't use `bash ../python3_tests_subfolder.sh` because the Python files will produce output in wrong folders.
