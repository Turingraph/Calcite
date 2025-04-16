# https://opensource.com/article/18/5/you-dont-know-bash-intro-bash-arrays

# https://stackoverflow.com/questions/8509226/
# using-find-command-in-bash-script

# https://stackoverflow.com/questions/5015316/
# run-all-python-files-in-a-directory

# https://stackoverflow.com/questions/49008137/
# bash-sort-a-list-of-strings

# https://stackoverflow.com/questions/10574794/
# how-to-list-only-files-and-not-directories-of-a-directory-bash

# https://askubuntu.com/questions/785094/
# find-all-python-files-in-linux-file-system

# The purpose of this command is to run all Python files in tests/ subfolder to check if code works as expected.

# cd ?
# bash ../python3_tests_subfolder.sh

for f in $(find $PWD -name '*.py' | xargs -n1 | sort | xargs ); do python3 "$f"; done
