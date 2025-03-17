# Description

The project name is "Calcite OCR". It is an OCR app based on Tesseract OCR model.

It is intended for 
1.	Allowing user without coding background to be able to use Tesseract OCR much more easily for extract text data from image or multiple images of text.
2.	Allowing user to collect text data set (if they want to) for improving
-	OCR model
-	Spelling checking language model
-	Text Language detection model
-   other ML Model

# How to install Tesseract OCR

Read this for more detail.
-   https://tesseract-ocr.github.io/tessdoc/Installation.html

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
2.  `doc_user/`
-	Purpose: user tutorial.
-   Status: Empty
3.	`frontend/`
-	Purpose: User Friendly UI Frontend based on React and Typescript. This is the only coding folder that does not contains Python files.
-   Status: In Development process.
4.	`img_process/`
-	Purpose: Processing Image e.g. Threshold, Blur, Convolution, Orientation etc.
-   Status: Finish
5.  `include/`
-	Purpose: The Python Interface for enhancing open closed principle and use OCR, image processing and drawing box around the text.
-   Status: Finish
6.	`ocr/`
-	Purpose: converting Image to text output using Tesseract OCR model and Pytesseract Python library.
-   Status: Finish
7.  `tests/`
-	Purpose: Check if Python files works as expected.
-   Status: In Development process. We will develop this folder after code `backend/`.
8.  `trash/`
-	Purpose: Contains useless file that might be useful later, it is ignored by `.gitignore`
9.  `utility/`
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

# How to use Calcite OCR ? (Quick Tutorial)

The project is unfinished. You can support our project by add the missing feature of our app.
Thank you for your contribution.

# Additional Information

-	Read `doc/README.md` and `doc/` to read additional information about our project.
