This folder have 2 subfolders.
1.  `img/`
-   Contains : image input files for checking if our code can process image based on relative path.
2.  `output/`
-   Contain : image and text output files.
3.  `src/`
-   Contain : image input and Python files.
4.  `compare_output.py`
-   Purpose : Check if `<file_name>_00/text_rel.txt`, `<file_name>_00/text_abs.txt`, `<file_name>_01/text_rel.txt` and `<file_name>_01/text_abs.txt` are the same, because `_01` means the version that use `basic_ocr/`. Both `<file_name>_00/` and `<file_name>_01/` should produce same output and `text_rel.txt` and `text_abs.txt` should be the same.
5.  `compare_save_examples.py`
-   Purpose : Check if the same code from `examples/` and `save/src/` produce the same output as expected.
6.  `delete_output.sh`
-   Purpose : Delete `output/`
7.  `main.sh`
-   Purpose : running all Python and Bash files in this directory to check if every files in current directory works as expected. 
8.  `tests_src.sh`
-   Purpose : Check if all Python files inside `src/` works as expected.

Warning : Don't use `bash ../python3_tests_subfolder.sh` because the Python files will produce output in wrong folders.
