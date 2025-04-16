# https://stackoverflow.com/questions/37392553/
# change-extension-for-every-file-in-dir-except-txt

for f in $(find $PWD -name 'trash' -type d | xargs -n1 | sort | xargs ); do cd "$f" && find . -name '*.py' -type f -exec mv {} {}.txt \; ; done

# $(find $PWD -name 'trash' -type d | xargs -n1 | sort | xargs ) # means find all trash folder.
# find . -name '*.py' -type f -exec mv {} {}.txt \; # means to convert all Python files as Txt file.
