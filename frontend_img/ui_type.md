Type

1.  Button

input< type >
-	title: string
-	ss_value: type
-	setss_value: setState hook < type >

output

```
[button]
```

2.  Ok_no_button

input< type >
-	ok_title: string
-	no_title: string
-	input: JSX.Element
-	ss_ok_value: type
-	ss_no_value: type
-	setss_value: setState hook < type >

output

```
+----------------------+
| [input] [ok, cancel] |
+----------------------+
```

3.  Show_tab (only one button is colorful)

input< dict >
-	ss_value: dict

output

```
[origin,gray,this,dilate]

[ocr, image processing, box]

[ocr, box, osd]
```

4.  Multi_button

input< dict >
-	ss_value: dict

output 

```
[button_00, button_01, ..., button_n]
```

dict
-	title: string
-	ss_value: type
-	setss_value: setState hook < type >

5.  Object_tab

input< type >
-	value: type

output

```
[rename, select, copy, optional, x]
```

6.  Option

input < type >
-	title: string
-	mode_title: string
-	ss_mode: type
-	setss_mode: useState hook < type >

output

```
+---------------+
| mode [option] |
+---------------+

+--------------+
| psm [option] |
+--------------+

+--------------+
| oem [option] |
+--------------+

[whitelist or blacklist]

+-------------------+
| method : [option] |
+-------------------+
```

7.	Search_bar

input
-	names: string

output

```
+------------+
| search bar |
+------------+
```

8.	History_button

input< type >
-	history: linked list < type >

output

```
[<, >, history]
```

9.	High_panel

```
+-------------------++
|					||
|					||
|					||
|					||
|					||
|					||
|					||
|					||
|					||
|					||
|					||
+-------------------++

++
||
||
||
||
++ means vertical scrollbar.
```

10.	Large_panel

```
+-------------------++
|					||
|					||
|					||
|					||
|					||
|					||
|					||
|					||
|					||
|					||
|					||
+-------------------++
+-------------------++

+-------------------+
+-------------------+ means horizontal scrollbar.
```

11.	Multi_options

```
+---------------------------------------+
|title [option 0 [x]][add option, reset]|
+---------------------------------------+

Composition
1.	string
2.	option 0
3.	Option
4.	Ok_no_button
```

12.	filter list

```
+------------------------------------------------------------------------+
| list : [1, 2, ..., n] | first second last len scalar [activate, reset] |
+------------------------------------------------------------------------+

Composition
1.	string
2.	input entry
3.	Ok_no_button
```

13.	Str_input

```
+---------------+
| title : input |
+---------------+
```

14.	Obj_input

```
+-----------------------------------------------------+
| title : input | mode : [option] | [activate, reset] |
+-----------------------------------------------------+

Composition
1.	string
2.	none or array of Str_input
3.	none or option
4.	Ok_no_button

```