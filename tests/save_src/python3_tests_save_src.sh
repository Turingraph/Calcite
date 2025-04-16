for f in $(find $PWD -mindepth 1 -maxdepth 1 -type d | xargs -n1 | sort | xargs ); do cd "$f" && bash ../../python3_tests_subfolder.sh && cd .. ; done
