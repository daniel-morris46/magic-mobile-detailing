#!/bin/bash

for file in *.jpg *.jpeg; do 
    [ -f "$file" ] && cwebp "$file" -o "${file%.*}.webp"
done

echo "Conversion complete!"
