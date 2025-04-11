# What is the best and the simplies image processing configuration in most case ?

*   It is recommended to use `img.threshold()` because it is simple and reliable compare to alternative in most case.

# Folder structure

1.  `img/`
-   Contains: original image input `img.jpeg` and output of `00_img.py`
2.  `img_01_half/`
-   Contains: output of `01_half.py`
3.  `img_02_row/`
-   Contains: output of `02_row.py`
4.  `img_03_dilate/`
-   Contains: output of `03_dilate.py`
5.  `img_04_row_double/`
-   Contains: output of `04_row_double.py`
6.  `text/`
-   Contains: output of `05_ocr.py`
7.  `00_img.py`
8.  `01_half.py`
9.  `02_row.py`
10. `03_dilate.py`
11. `04_row_double.py`
12. `05_ocr.py`
-   Note that : `get_ocr(lang="eng+tha")` produce differ output from `get_ocr(lang="tha+eng")` because it bias toward creating English over Thai output and vice versa

# Additional Learning Resource

*   https://youtu.be/9FCw1xo_s0I?si=p5_igTL5jUrwfvUh
*   https://github.com/Turingraph/Calcite/tree/main/include
