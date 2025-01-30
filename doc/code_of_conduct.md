# Introduction

This file describes about the coding convention of our project.

# Variable, Function, OOP CLass, File and Folder Naming Convention

Rule of naming file and folder in our project.
1.  Use `python3 -m black . -l80`
2.	Every file names should contain only lower case letter.
-	1st Correct Example: `my_folder/`
-	1st Wrong Example: `My_Folder/`, `my_Folder` etc.
-	2nd Correct Example: `hello_world.py`
-	2nd Wrong Example: `Hello_world.py/`, `Hello_World.py` etc.
-	3rd Correct Example: `path`
-	3rd Wrong Example: `Path` etc.
-	4th Correct Example: `def add(num_00: int, num_01: int) -> int:`
-	4th Wrong Example: `def Add(num_00: int, num_01: int) -> int:` etc.
3.	File names that have multiple words should separated by underscores (`_`)
-	1st Correct Example: `my_folder/`
-	1st Wrong Example: `my-folder/`, `my folder`, `myfolder` etc.
-	2nd Correct Example: `hello_world.py`
-	2nd Wrong Example: `hello-world.py`, `helloworld.py`, `hello world.py` etc.
-	3rd Correct Example: `rotate_matrix`
-	3rd Wrong Example: `rotatematrix` etc.
-	4th Correct Example: `def dot_product(vec_00: np.ndarray, vec_01: np.ndarray) -> np.ndarray:`
-	4th Wrong Example: `def dotproduct(vec_00: np.ndarray, vec_01: np.ndarray) -> np.ndarray:` etc.
4.	Don't use characters that is not English Alphabet and number (special characters) and underscores (`_`)
-	Examples of special characters: space (` `), slash (`/`), hyphens (`-`), dollar sign (`$`), ko (`ก`), ha (`๕`) etc.
5.	Use `_YYYYMMDD` as date format for the naming convention.
-	1st Correct Example: `my_folder_20241231/`
-	1st Wrong Example: `my_folder_2024_12_31/`, `my_folder_31122024`, `my_folder_31dec2024`, `my_folder_2024dec31` etc.
-	2nd Correct Example: `hello_world_20241231.py`
-	2nd Wrong Example: `hello_world_2024_12_31/`, `hello_world_31122024`, `hello_world_31dec2024`, `hello_world_2024dec31` etc.
6.	`README.md` is the only file that does not following 1st and 2nd rules.
7.  Every function, oop class, file and folder name that starts with `__`, means that it is unusable, and is in the development process.
-	1st Example: `__deployment.md` means that our deployment documentation is under the development process.
-	2nd Example: `__img_to_str.py` means that our OCR Python script (`img_to_str.py`) is under the development process.
8.  If the file is not the utility file and contains an OOP class, then both file and class have the same name.
-	1st Example: `img_process_img` class belong to `include/imgprocess_img.py`.
-	2nd Example: `table` class belong to `include/table.py`.
9.	The counting should always start with `_00`.
-	Correct Example: `vec_00`, `vec_01`, `vec_02`
-	Wrong Example: `vec00`, `vec01`, `vec02` etc.
-	Wrong Example: `vec_01`, `vec_02`, `vec_03` etc.
-	Wrong Example: `vec_0`, `vec_1`, `vec_2` etc.
-	Wrong Example: `vec01`, `vec02`, `vec03` etc.
10. The counting file and should always start with `_00`, `00_` or `00`.
-	Correct Example: `00.txt`, `01.txt`, `02.txt`
-	Correct Example: `00_img.py`, `01_str.py`, `02_lang.py`
-	Correct Example: `img_00.py`, `img_01.py`, `img_02.py`
-	Correct Example: `00_ocr/`, `01_ocr/`, `02_ocr/`
-	Wrong Example: `0.txt`, `1.txt`, `2.txt`
-	Wrong Example: `_00.txt`, `_01.txt`, `_02.txt`
-	Wrong Example: `00_.txt`, `01_.txt`, `02_.txt`
-	Wrong Example: `01_.txt`, `02_.txt`, `03_.txt`
-	Wrong Example: `01.txt`, `02.txt`, `03.txt`
-	Wrong Example: `img00.py`, `img01.py`, `img02.py`
-	Wrong Example: `img_01.py`, `img_02.py`, `img_03.py`
-	Wrong Example: `img_00_.py`, `img_01_.py`, `img_02_.py`
-	Wrong Example: `01_ocr/`, `02_ocr/`, `03_ocr/`
-	Wrong Example: `0_ocr/`, `1_ocr/`, `2_ocr/`
-	Wrong Example: `0_img.py`, `1_str.py`, `2_lang.py_`
-   Note that `00_img.py`, `01_str.py`, `02_lang.py` means the first, second and third testing files are about image, string and language in order.
11. Every variable that intended to not be modified, should only contains capital letter.
-	1st Correct Example: `PI = 3.14159`
-	1st Wrong Example: `pi = 3.14159`, `Pi = 3.14159`
-	2nd Correct Example: `EULER = 2.718`
-	2nd Wrong Example: `euler = 2.718`, `Euler = 2.718` etc.
-	3rd Correct Example: `GRAVITY = 9.81`
-	3rd Wrong Example: `gravity = 9.81`
-	4th Correct Example: `SPEED_OF_LIGHT = 299792458`
-	4th Wrong Example: `SPEEDoFlIGHT = 9.81`, `speed_of_light = 9.81`
12.	It is OK to use Library that does not follow our coding convention.
-	Example: `cv2.adaptiveThreshold`, `cv2.morphologyEx`, 
13.	All parameter inside the function following our naming convention rule.
-	Correct Example: `def dot_product(vec_00: np.ndarray, vec_01: np.ndarray) -> np.ndarray:`
-	Wrong Example: `def dot_product(vec_0: np.ndarray, vec_1: np.ndarray) -> np.ndarray:`
-	Wrong Example: `def dot_product(vec_1: np.ndarray, vec_2: np.ndarray) -> np.ndarray:`
-	Wrong Example: `def dot_product(vec_01: np.ndarray, vec_02: np.ndarray) -> np.ndarray:`
14.	Always specify the type of input parameter and output.
-	Correct Example: `def dot_product(vec_00: np.ndarray, vec_01: np.ndarray) -> np.ndarray:`
-	Wrong Example: `def dot_product(vec_00: np.ndarray, vec_01: np.ndarray):`
-	Wrong Example: `def dot_product(vec_00, vec_01) -> np.ndarray:`
-	Wrong Example: `def dot_product(vec_00, vec_01):`
15. You can use `############################` for separating the Python file as multiple sections depending on how you separate it.
16. Do not specify the output type of OOP constructure and the input type of parameter `self` in class.

-   Correct Example

```
class img_process_rgb(img_process):
    def __init__(self, img: Self | np.ndarray | str):
        if type(img) == Self:
            self.img = np.copy(img.img)
        elif type(img) == str:
            self.img = cv2.imread(filename=img)
            if self.img is None:
                raise ValueError(f"Error: The file at path '{img}' could not be loaded.")
        elif type(img) == np.ndarray:
            self.img = rgb_img(img = img)
        else:
            raise TypeError("Error: Input must be an instance of 'img_process_rgb', a NumPy array, or a file path.")

# The type of `self` and output type of `__init__` are not specified.
```

# Naming Meaning

Meaning
1.	`img`  = input image
2.	`ocr`  = Optical Character Recognition
3.	`path` = path of input image
4.	`parent` = parent directory
5.	`str_out` = OCR string output text
6.	`osd_out` = output of pytesseract.image_to_osd (Orientation and Script Detection)
7.	`img_out` = image output
8.	`vec` = vector
9.	`osd` = Orientation and Script Detection
10.	`2d` = 2 dimentional (adj.)
11.	`ksize` = size of kernel
12.	`u_odd(int n)` = function that convert any number to odd positive number (`img_process/utility.py/def u_odd`)
13.	`maxval` = maximum value
14.	`thresh` = threshold pixel value
15. `n` = number
16. `title` = title of the output (e.g. output image file, OCR text file, Open CV image window etc.)
17.	`w` = width
18.	`h` = height

# Additional Learning Resource

1.	STOP! Don't Name That File Without First Watching This Video.
*	https://youtu.be/Wu0CxdflECY?si=Wn8Qr2um1QBdgiNv
2.	Naming Things in Code
*	https://youtu.be/-J3wNP6u5YU?si=DG5mLTEiOqmkUgrY
3.	VS Code tips — Convert to Snake Case
*	https://youtu.be/owexcF4a8qg?si=c42N9fxeJuclpzbO
4.	How to make every file names have only lower case recursively ?
*   https://stackoverflow.com/questions/152514/how-do-i-rename-all-folders-and-files-to-lowercase-on-linux
5.  Code formatting with Black — Perfect Python
*   https://youtu.be/A6S2nZAXgT8?si=q3p5JizFv9XSQ7Kc
6.  Basic Git Tutorial
*   https://colab.research.google.com/drive/1ERz9tNhId3gBNsxGpvRWnqfY6x0LJFs-?usp=sharing

For anyone who want to contribute our project, you can also make the script that help us automate coding format, thank you for your contribution.
