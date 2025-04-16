# https://unix.stackexchange.com/questions/46244/
# get-a-list-of-directory-names-with-find

# https://stackoverflow.com/questions/5130847/
# running-multiple-commands-in-one-line-in-shell

# The purpose of this command is to run all Python files in tests/ to check if code works as expected.

# bash python3_tests.sh

for f in $(find $PWD -mindepth 1 -maxdepth 1 -type d | xargs -n1 | sort | xargs ); do cd "$f" && bash ../python3_tests_subfolder.sh && cd .. ; done
