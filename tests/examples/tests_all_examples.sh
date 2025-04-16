# https://unix.stackexchange.com/questions/46244/
# get-a-list-of-directory-names-with-find

# https://stackoverflow.com/questions/5130847/
# running-multiple-commands-in-one-line-in-shell

# The purpose of this file is to run all Python files in this directory.
# Don't use bash ../python3_tests_subfolder.sh because the Python files will produce output in wrong folders.

for f in $(find $PWD -mindepth 1 -maxdepth 1 -type d | xargs -n1 | sort | xargs ); do cd "$f" && bash ../../tests_all_python_files.sh && cd .. ; done
