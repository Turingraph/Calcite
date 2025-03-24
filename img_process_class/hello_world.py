# The purpose of this file is to check
# if we import coding file from `include/` to `tests/` correctly.
import sys

def hello_world() -> None:
    print("hello the world !")

def print_path() -> None:
    j = 0
    for i in sys.path:
        print(j, "\t" + i)
        j += 1
