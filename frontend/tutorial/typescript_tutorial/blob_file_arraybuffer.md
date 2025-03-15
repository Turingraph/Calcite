# Keyword

1.  data = array of data (Blob, ArrayBufferm TypeArray, DataView, String (utf-8), mixing of that)
2.  ? = optional
3.  "native" = to convert data in the native os style e.g. Window, Linux etc.
4.  "transparent" = not do anythings with that data
5.	stream = 

# Blob (binary large object file)

Argument
1.  data: data
2.	type?: "text/plain"
3.	ending?: "transparent"|"native"

# File

Argument
1.  data: data
2.  filename: string
3.	type?: "text"|"plain"
4.	lastModified?: Date.now()

# ArrayBuffer (this object is not array)

Bytes of data in fixed length.

# DataView (this object is not array)

Wrapper object around the ArrayBuffer that allow developer to read and edit ArrayBuffer.

# TypedArray (this object is not array)

Developer can loop through it similar to
array. It store 8,16,32,64-bit signed or unsigned integers.

# What developers can do with Blob and File ?

-	upload via fetch as a file or stream
-	save data in the cache
-	etc.

# Reference

1.	Deep Dive into Blobs, Files, and ArrayBuffers
-	https://youtu.be/ScZZoHj7mqY?si=G2Z4qqiWGyBmaKom
