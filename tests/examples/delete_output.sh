# https://stackoverflow.com/questions/13032701/
# how-to-remove-folders-with-a-certain-name

find . -type d -name text -exec rmdir {} \;
