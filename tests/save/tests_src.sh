# Don't use `bash ../python3_tests_subfolder.sh` because the Python files will produce output in wrong folders.

for f in $(find $PWD -mindepth 2 -maxdepth 2 -type d | xargs -n1 | sort | xargs ); do cd "$f" && bash ../../../tests_all_python_files.sh && cd ../ ; done
