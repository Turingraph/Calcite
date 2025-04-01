# Description

The project name is `open_close_rider`. It is an Python OCR library based on Tesseract OCR model and Open CV.

It is intended for allow user to get text data from image of text e.g. book, bills etc based on 
user customized format.

This project can be used for
1.  Transform image (`np.ndarray` or string path) input with `img_process_gray` and 
    `img_process_rgb` Open CV based classes.
2.  Transform image (`np.ndarray` or string path) input as `img_process_gray` with 
    `get_threshold_img()`
3.  Get OCR result with `get_ocr()` base on `np.ndarray` or string path input
4.  Get multiple OCR results with `get_many_ocrs()` base on `ocr_box_editor` input
5.  Get image type `ocr_box_editor` with `get_table_img()` and user customized text 
    format.
6.  Allow user to define the text format of the image (`np.ndarray` or string path) input
    with `ocr_box_editor`
7.  Allow user to get text and image output of `ocr_box_editor` with `ocr_box_reader`

# How to use `open_close_rider/` ? (Quick Tutorial)

Read this (https://github.com/Turingraph/open_close_rider_lib_tutorial.git) for more details.

# Future Features

This is the following expected useful feature that our library are currently lack
1.  Get only box that does not intersect with text with `get_ocr_table()` with sweep line algorithm with `O(n * log(n))` time and `O(n)` space.
2.  Get OCR table data by set `get_ocr(column = [...])` automatically.
3.  Deal with blur and dark image include `white_pig_00/` and `green_pig_00/`
4.  Find more example.
5.  User friendly Tutorial documentation and video.
6.  Evaluating OCR accuracy.
7.  Spelling checking
8.  More user friendly script.
9.  Hand writing text.
10. Allow user to save output in any directory inside user's computer automatically based on user input.
11.	Check the language of the Tesseract OCR output.
12.	Convert image of mathematical notation in Latex e.g. ratio, integration, vector etc to Latex representation.

# How to Set up our project ?

1.  Click `<> Code` green button.
2.  Copy URL or `Download Zip`
3.  Install Python and pip
4.  `pip install -r requirements.txt`
5.  Install Tesseract OCR

Read this for more detail.
1.  How to install Tesseract OCR ?
-   https://tesseract-ocr.github.io/tessdoc/Installation.html
2.  How to install Python ?
-   https://www.python.org/downloads/
3.  How to install pip ?
-   https://pip.pypa.io/en/stable/installation/
4.  How to use Git ?
-   https://youtu.be/hwP7WQkmECE?si=3dpwnxaAztigW7x-
-   https://colab.research.google.com/drive/1ERz9tNhId3gBNsxGpvRWnqfY6x0LJFs-?usp=sharing
-   https://youtu.be/tRZGeaHPoaw?si=qNfziX2r9p-XARow

# How to help developing this project

For anyone who want to contribute our project in MVP version, you can
1.  create additional OCR coding example in `tests/` using the code from `img_process_class/`, `box/` and `basic_ocr/` 
2.  Add new feature in `Future Features` section of this `README.md`
3.  Design UXUI for our Desktop based OCR App, and submit in `doc/` directory of 
    `open_close_rider_app` (https://github.com/Turingraph/open_close_rider_app).
4.  Improve user tutorial documentation in `open_close_rider_lib_tutorial`
    (https://github.com/Turingraph/open_close_rider_lib_tutorial.git) or this `README.md`

Thank you for your contribution.

# Folder Structure

Expected Feature
1.  `basic_ocr/`
-   Purpose: The purpose of this folder is to allow user to use our code easily.
2.  `doc/`
-   Contains : Additional Documentation about our project.
3.  `doc_tutorial/`
-   Contains : Additional Documentation about how to use Pytesseract, Python virtual environment, 
    Git and related useful technology.
4.  `img_process/`
-	Purpose: Processing Image e.g. Threshold, Blur, Convolution, Orientation etc.
5.  `img_process_class/`
-	Purpose: The interface of `img_process/`
6.  `ocr_box/`
-   Purpose: get OCR output of the image with complicated format e.g. bills, Table of contents etc.
7.  `tests/`
-	Purpose: Check if `img_process_class/`, `box/` and `basic_ocr/` works as expected.
8.  `trash/`
-	Purpose: Contains useless file that might be useful later, it is ignored by `.gitignore`
9.  `utility/`
-	Purpose: Contains other Python utility files.

# Other related Repository

1.  `open_close_rider_app`
-   URL : https://github.com/Turingraph/open_close_rider_app
-   Purpose : Electron-React based user friendly OCR Desktop app that based on this project.
2.  `open_close_rider_art`
-   URL : https://github.com/Turingraph/open_close_rider_art.git
-   Purpose : Concept Art design, soundtrack and story for entertainment purpose, UXUI based story telling,
    and make the OCR related tutorial much more interesting, but this must be balance with OCR practical usefulness.
3.  `open_close_rider_lib_tutorial`
-   URL : https://github.com/Turingraph/open_close_rider_lib_tutorial.git
-   Purpose : Teach user how to use our library in Python.
4.  `open_close_rider_scp` (scp means Secure Contain Platform)
-   URL : None (It is not created yet. Might be created in future)
-   Purpose : Allow users to collect OCR training data to improve Tesseract OCR, both publically and anonymously.
    We add anonymous feature because we want to learn how to create privacy focused data collection app.
5.  `open_close_rider_ml` (ml means Machine Learning model)
-   URL : None (It is not created yet. Might be created in future)
-   Purpose : For educational purpose, analyzing the AI transparency and/or Tesseract OCR model replacement 
    in some specific usecase.
6.  `open_close_rider_dsa` (dsa means Data Structure and Algorithm)
-   URL : None (It is not created yet. Might be created in future)
-   Purpose : Collection of educational documentation and simulation about interesting Data structure and
    algorithm that are used in `open_close_rider` or other related repositories directly e.g. LSTM neural networks, Sweep Line Algorithm, FFT, Canny Algorithm, Otsu Algorithm etc. We also use the art from 
    `open_close_rider_art` as the story telling components of this tutorial.

# Additional Information

-	Read `doc/` for more additional information about our project.
