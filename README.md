# Description

The project name is "JOCR". It is OCR app based on Tesseract OCR model.

It is intended for 
1.	Allowing user without coding background to be able to use Tesseract OCR much more easily for extract text data from image of text.
2.	Allowing user to collect text data set (if they want to) for improving
-	OCR model
-	Spelling checking language model
-	Text Language detection model
-   other NLP Model

# Status

This project is in the MVP development process. For anyone who want to contribute our project in MVP version, you can read `doc/issue.md`. Thank you.

# MVP (Minimum Viable Product)

Expected Feature
1.	`img_process/`, `include/img_process.py`, `include/img_process_rgb.py`, `include/img_process_gray.py`
-	Purpose: Processing Image e.g. Threshold, Blur, Convolution, Orientation etc.
2.	`ocr/`, `include/ocr.py`
-	Purpose: converting Image to text output using Tesseract OCR model and Pytesseract Python library.
3.	`include/boxes_img.py`
-	Purpose: separating the image in to smaller images based on the groups of text.
4.	`frontend/`
-	Purpose: User Friendly UI Frontend
5.	`frontend_img/`
-	Purpose: User Friendly UI Frontend design
6.  `tests/`
-	Purpose: check if the code work as expected and demonstrate how to use our code.
7.  `include/`
-	Purpose: The Interface for enhance open closed principle.
8.  `get_data/`
-	Purpose: Get OCR data as txt, csv or pdf file.

Ignore Advanced Feature
1.	`get_data/`
-	Purpose: Get data for training AI model.
2.	`img_observe/`
-	Purpose: Analyzing the image's Pixel values in order to process image automatically.
3.	`spell/`
-	Purpose: Check and correct Tesseract OCR output automatically.
4.	`language/`
-	Purpose: Check the language of the Tesseract OCR output.
5.	`latex/`
-	Purpose: Convert image of mathematical notation e.g. ratio, integration, vector etc to Latex representation. (OCR mathematical notation)

# Additional Information

-	Read `doc/README.md` to read additional information about our project.

# How to use JOCR ? (Quick Tutorial)

`doc/__tesseract_ocr_installation.md` and `__doc_user/README.md` are under the development. 

For anyone who want to contribute our project, you can
1.	Explain how to install Tesseract OCR model and Pytesseract Python library in `doc/tesseract_ocr_installation.md` 
2.	Explain how to use our project in `doc_user/README.md`
3.	Explain how to use our project in `README.md` in "How to use JOCR ? (Quick Tutorial)" section.

Thank you for your contribution.
