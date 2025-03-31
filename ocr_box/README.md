The purpose of this folder is to get OCR output of the image with complicated 
format e.g. bills, Table of contents etc by drawing the box around the group of 
text.

This folder contains
1.  `get_row.py`
-	Purpose : Get row/column of the box for `ocr_box_editor.py`.
2.  `ocr_box_editor.py`
-	Purpose : Get the box and OCR data based on the image and user customized text format.
3.  `ocr_box_reader.py`
-   Purpose : Display and save the `__img` and `__box` attributes of class `ocr_box_editor` from `ocr_box_editor.py`.
4.  `ocr.py`
-   Purpose : Compute and save OCR output.
5.  `update_box.py`
-	Purpose : Update `__all_box` and `__box` attributes of class `ocr_box_editor` from `ocr_box_editor.py`
    on the image and user customized text format.
6.  `warning.py`
-   Purpose : Show that user use invalid input mode.

We use `deque` for `self.__box` and `self.__all_box` attributes of `ocr_box_editor` and `ocr_box_reader` 
instead of `list` because we rarely access the i-th item outside forloop, but we append new item frequency.
