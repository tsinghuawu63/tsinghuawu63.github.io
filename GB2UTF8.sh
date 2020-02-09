#!/bin/sh

for file in `find ./ -name "*.htm"`;
do
echo convering : $file
iconv -f GB18030 -t UTF8 $file > $file.t
mv $file.t $file
done
echo DONE
