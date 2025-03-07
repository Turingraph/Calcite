for file in *.*; do
    mv -- "$file" "${file%.*}.text"
done