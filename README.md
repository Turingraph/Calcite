# Description

The project name is `open_close_rider`. It is an OCR app based on Tesseract OCR model.

It is intended for 
1.	Allowing user without coding background to be able to use Tesseract OCR much more easily for extract text data from image or multiple images of text.
2.	Allowing user to collect text data set (if they want to) for improving
-	OCR model
-	Spelling checking language model
-	Text Language detection model
-   other ML Model

# How to Set up our project ?

1.  Click `<> Code` button
2.  Copy URL or `Download Zip`
3.  Install Python, pip, npm, Typescript and React
4.  `pip install -r requirements.txt`
5.  Install Tesseract OCR

Read this for more detail.
1.  How to install Tesseract OCR ?
-   https://tesseract-ocr.github.io/tessdoc/Installation.html
2.  How to install Python ?
-   https://www.python.org/downloads/
3.  How to install pip ?
-   https://pip.pypa.io/en/stable/installation/
4.  How to install npm ?
-   https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
5.  How to install React and Typescript ? (it is recommended to install npm first)
-   https://create-react-app.dev/docs/adding-typescript/
6.  How to use Git ?
-   https://youtu.be/hwP7WQkmECE?si=3dpwnxaAztigW7x-
-   https://colab.research.google.com/drive/1ERz9tNhId3gBNsxGpvRWnqfY6x0LJFs-?usp=sharing
-   https://youtu.be/tRZGeaHPoaw?si=qNfziX2r9p-XARow

# Status

This project is in the MVP development process. For anyone who want to contribute our project in MVP version, you can
1.  create additional OCR coding example in `tests/` using the class from `include/`
2.  submit your UXUI design in `doc/` and user tutorial in `doc_user/`
3.  help us develop `frontend/` and connect `frontend/` with `backend/`
4.  write how to deploy our project as Desktop app in `doc/`
5.  add the feature that allow user to submit OCR and NLP training data publicly or anonymously (if they want to) in `get_data`

Thank you for your contribution.

# MVP (Minimum Viable Product)

Expected Feature
1.  `backend/`
-	Purpose: Connect `include/` with `frontend/`
-   Status: Empty
2.  `basic_ocr`
-   Purpose: The purpose of this folder is to allow user to use our code easily.
2.  `box/`
-   Purpose: get OCR output of the image with complicated 
format e.g. bills, Table of contents etc by drawing the box around the group of 
text.
-   Status: Finish
3.  `doc_user/`
-	Purpose: user tutorial.
-   Status: Empty
4.	`img_process/`
-	Purpose: Processing Image e.g. Threshold, Blur, Convolution, Orientation etc.
-   Status: Finish
5.  `img_process_class/`
-	Purpose: The interface of `img_process/`
-   Status: Finish
6.  `tests/`
-	Purpose: Check if Python files works as expected.
-   Status: In Development process. We will develop this folder after code `backend/`.
7.  `trash/`
-	Purpose: Contains useless file that might be useful later, it is ignored by `.gitignore`
8.  `utility/`
-	Purpose: Contains other Python utility files.

Ignore Advanced Feature
1.	`get_data/`
-	Purpose: Get and clean data for training AI model.
2.	`spell/`
-	Purpose: Check and correct Tesseract OCR output automatically.
3.	`language/`
-	Purpose: Check the language of the Tesseract OCR output.
4.	`latex/`
-	Purpose: Convert image of mathematical notation e.g. ratio, integration, vector etc to Latex representation. (OCR mathematical notation)

Note that the `open_close_rider_app` (https://github.com/Turingraph/open_close_rider_app) 
is used as the Electron-React based user friendly OCR Desktop app that based on this project.

# How to use `open_close_rider` ? (Quick Tutorial)

The `frontend/` is not finished yet. However user can use our code by
1.  Download our code, except `doc/` (which only contains Mark Down documentation) and `frontend/` (which only contains React Typescript frontend part). Watch this following URL to learn about Git.
-   https://youtu.be/hwP7WQkmECE?si=3dpwnxaAztigW7x-
-   https://colab.research.google.com/drive/1ERz9tNhId3gBNsxGpvRWnqfY6x0LJFs-?usp=sharing
-   https://youtu.be/tRZGeaHPoaw?si=qNfziX2r9p-XARow
2.  Download Pip and Python3
-   https://www.python.org/downloads/
-   https://pip.pypa.io/en/stable/installation/
3.  Use command line
    1.  `python3 -m venv .venv`
    2.  `source .venv/bin/activate` 
    3.  `.venv/bin/pip3 install -r requirements.txt`
    4.  If facing any issue, read `doc/python_virtual_environment.md`
4.  See some example about how to use our code in `tests/`
5.  Import our file from `include/` to apply with your image input.

# Additional Information

-	Read `doc/README.md` and `doc/` to read additional information about our project.
