# What is Open Closed Principle ?

* It is the coding guidance concept where it is recommended to code, such that programmer can
  add new feature to the code without modifying the existing code, 
  in order to avoid wasting time on rewrite the code and make unexpected bugs.
* The likely consequences of poor Open Closed code are Shotgun Surgery smell and Divergent Change smells.

You can learn more about Open Closed Principle and related concepts in this URL list.
1. Open Closed Principle
* https://www.freecodecamp.org/news/open-closed-principle-solid-architecture-concept-explained/
2. Shotgun Surgery
* https://refactoring.guru/smells/shotgun-surgery
3. Divergent Change 
* https://refactoring.guru/smells/divergent-change

# What is the purpose of `include/` ?

This directory contains only Python files in OOP paradigm. 

The purpose of include directory is to help developers add new feature by 
1.  Creating new files `a.py` in other directory.
2.  Import those file inside this directory and combine it as Python OOP class `a` in `include/a.py`. 
3.  Git Add, Git commit 
4.  Code testing by import class inside `tests/` directory.
5.  Check the coding mistake, refactor the code if needed and Git commit.
*   Read this https://refactoring.guru/refactoring/smells to learn more about coding mistake.

This help developer maintains Open Closed Principle in our coding project and 
abstract low level irrelevant detail which help us use our code much more easily.

Note that every Python file in this directory except `hello_world.py` have the class with the same file name.

# Python File in `include/` directory.

`include/` contains
1.  `hello_world.py`
-   Purpose : Check if we import coding file from `include/` to `tests/` correctly.
2.  `img_process_gray.py`
-   Purpose : Allow user to editing the gray image with `img_process` methods and additional image processing related methods for helping the Tesseract OCR model get more accurate result and get the column of text e.g. table of contents, bill etc.
3.  `img_process_rgb.py`
-   Purpose : Allow user to editing the colorful image with `img_process` methods.
4. `img_process.py`
-   Purpose : Parent class of `img_process_rgb` and `img_process_gray`, for editing the image with basic image processing method.
-   Contains: Basic image processing command e.g. `show`, `save_img`, `shape`, `zoom` and `rectangle` etc.
-   Warning : It is not recommended to use `img_process` class because the Constructor of `img_process` does not check if `img` argument valid or not.
-   Note : `img_process` is the only class with 2 inherited child classes, `img_process_rgb` and `img_process_gray`. Both child classes do not overwrite any `img_process`'s methods.
5.  `ocr_config_arr.txt`
-   Purpose : Get data from image with complicated format e.g. table of content, bills etc. It is not used at all because `ocr_config.py` can be used instead of `ocr_config_arr.py`.
-   Reference: https://youtu.be/9FCw1xo_s0I?si=p5_igTL5jUrwfvUh
6.  `ocr_config.py`
-   Purpose : 
    1.  `img_to_str`: Convert image to OCR text output
    2.  `osd`       : Get OSD (Orientation and Script Detection) data from the input img image
    3.  `save_text` : save the OCR text output `self.out` as text file

# Bonus tips: Avoid using Inheritance.

Avoid using inheritance unless there is a clear reason to do so 
and parent class has a few unextended child class (child class that does not has another child class)
because every child classes are depending on parent class, which sometimes make adding new feature 
without modify the existing code becomes harder (violate Open Closed Principle). The clear exception are
* `img_process_gray` and `img_process_img` are only 2 children of `img_process` parent class.

Watch this to learn the cons of Inheritance ( https://youtu.be/hxGOiiR9ZKg?si=ZqfJ1mjv8rNT22hC )
