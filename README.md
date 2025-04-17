# Description

The project name is `open_close_rider`. It is an Python OCR library based on Pytesseract and Open CV.

It is intended for allow user to get text data from image of text e.g. book, bills etc based on 
user customized format, focus on (but not limited to) Thai and English text data.

This project can be used for
1.  Transform image (`np.ndarray` or string path) such that there is the clear distinction between background and text.
2.  Get OCR result base on `np.ndarray` or string path input
3.  Get multiple images based on the group of multiple texts in one image and user customized text 
    format.
4.  Allow user to get text and image output from the original image input in both absolute and relative path.

# How to use `open_close_rider/` ? (Quick Tutorial)

This repository https://github.com/Turingraph/open_close_rider_tutorial.git is about the user tutorial for this project. However it is not developed because we have to finish making the stable version of MVP first.

# Development plan

## Status

This project is in MVP (Minimal Variable Product) development process and not release as version no.1.

## Core useful features that the current project is lack

The order from most to least important features. We might release the first version before finish all of this features based on user demand.

1.  Get image input from both relative or absolute path based on user input.
2.  Thai Open source Spelling checking AI model
3.  English Open source Spelling checking AI model
4.  Deal with blur and dark image include `white_pig_00/` and `green_pig_00/`
5.  Deal with image of text with watermark.
6.  Evaluating OCR accuracy.
7.  Get OCR table data by set `get_ocr(column = [...])` automatically.
8.  Get only box that does not intersect with text with `get_ocr_table()` with sweep line algorithm with `O(n * log(n))` time and `O(n)` space.

## Other advanced features beyond the scope of MVP

1.  Hand writing text.
2.	Check the language of the Tesseract OCR output.
3.	Convert image of mathematical notation in Latex e.g. ratio, integration, vector etc to Latex representation.
4.  Spelling checking in other languages.

## Things to do more.

1.  Find more image examples for checking if our project works as expected and as tutorial example.
2.  User friendly Tutorial documentation and video.
3.  More user friendly script.

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

# How to help developing this project ?

For anyone who want to contribute our project, you can
1.  create additional OCR coding example in `tests/examples/` using the code from `img_process_class/`, `ocr_box/` and `basic_ocr/` 
2.  Add new feature in `Development plan` section of this `README.md`
3.  Design UXUI for our Desktop based OCR App, and submit in `doc/` directory of 
    `open_close_rider_app` (https://github.com/Turingraph/open_close_rider_app).
5.  Contribute other related Repositories (see `Other related Repository` section)

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
2.  `open_close_rider_tutorial`
-   URL : https://github.com/Turingraph/open_close_rider_tutorial.git
-   Purpose : Teach user how to use our OCR library in Python.
3.  `open_close_rider_scp` (scp means Secure Contain Platform)
-   URL : None (It is not created yet. Might be created in future)
-   Purpose : Allow users to collect OCR training data to improve Tesseract OCR, both publically and anonymously.
    We add anonymous feature because we want to learn how to create privacy focused data collection app.
4.  `open_close_rider_ml` (ml means Machine Learning model)
-   URL : None (It is not created yet. Might be created in future)
-   Purpose : For educational purpose, analyzing the AI transparency and/or Tesseract OCR model replacement 
    in some specific usecase.

# Additional Information

-	Read `doc/` for more additional information about our project.
