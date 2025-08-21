*Browser Have three types of engine*
1. Layout
2. JS
3. Search engine

------------------------------------------

**Semantic Elements**
It is way of things which dedicates that every thing have a specific function basically a good coding practice like you give heading in <h1> tag instead of <p> so there is that.

Ohh revision of thought it's actually practically incoded in HTML like you can just use <div> for all sections but there are specifically made <nav> and <footer> and it's good practice to use them as it makes it easier to use and understand the development.

------------------------------------------

*Type of tags*
There are two types of tags:
1. Inline tag
2. Block tag

------------------------------------------
*Attributes*

Attributes are the special info about a particular elements that contain meta info about the given element which give browser the context to behave and accomodate according to needs.


**HTML Introduction**

HTML > Hyper Text Markup Language

We use HTML tags to define the looks and feels of the website.

**Use of CSS and JS**

CSS is used to add styling to the barebone page created using HTML

JS is a programming language which is used to add logic and functionality to the web page/app


*A Basic HTML page*
```HTML
<!DOCTYPE html>   --- Specifies this is an HTML 5 file
<html lang="en"> --- root of an HTML page
<head> ----- Contains Page metadata
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title> ---- Contains title
</head>
<body> ----- The main body of the page (rendered by the browser)
    <h1> This is a heading </h1> --- heading tag
    <p>My paragraph</p> --- Paragraph tag
</body> - closing body tag
</html>
```

Tag -> A tag is like a container for either content or other HTML tags


--> Head and body tags are children of HTML tag
--> Most HTML elements have opening and closing tag with the content in between opening and closing tag

--> Some HTML tags have no content. These are called empty elements eg <br>

HTML element = start tag + content + end tag

HTML is case insensitive language


*HTML Element*

Everything form starting to the ending tag
```HTML
<body>
content
</body>
```
*HTML Attributes*

Used to add more info corresponding to an HTML tag.

EXample : <a href = "Hello.com">Hello</a>
We can use single or double quotes in attribute.


*The heading tags*
<h1> to <h6>
We Have tags for the most important<h1> to the least important<h6>

*The para tag*
Used to add para in an HTML page.

<p>content</p>

*The anchor tag*
This Tag is used to add links to an existing content insisde HTML page
<a href="Goo.com"> Check me out </a>

*Image rendering*
img tag is sed to add image in an HTML page

<img src="path/to/the/img">

*Bold italic and undecline tags*

We can use bold, italic and underline tag to highlight the text as follows:

<b>This is  the bold text</b>
<i>This is italic</i>
<u>This is underline</u>


*br tag*
Is used to create line breaks in an HTML docs

*Big and small*

we make text a bit larger and bit smaller using big and small tags.

*hr tag*
<hr> tag inHTML is used to create a horizontal ruler often used to separate the content.

*Subscript and superscript*

We can add subscript and superscripts om HTML as follows:

<sub> This </sub> is subscript
<sup> This </sup>

*pre tag*

HTML alwaus ignores extra spaces and newlines. In oreder to display a piece of text as is, we can use pre tag.

<pre>
    This is formated text
        Will be displayed as it is 
</pre>


**
Code writing principle
* DRY = Don't repeat yourself (The developers choice)
* WET = Write everything twice (The masochist choice) {Used by those who use inline CSS}
Principle of SOC
* SOC = Seperation of concern (Don't make a khidchi make different files for HTML and CSS instead of using internal or inline)
**


*The div tag*

div tag is often used as a container for other elements
div is a block level(Always takes full width) element.


*The span tag*
Span is an inline container.


---------------------------------
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <fieldset>
        <legend>Hello World</legend>
        <code>
            <pre>
                #include <iostream>
                using std namespace;

                int main() {
                    cout >> "Hello World";
                }
                </iostream>
            </pre>
        </code>

    <img width="500" height="500" src="../fastlogo/cute_loop.gif" alt="Not Loading">

    <audio controls loop muted autoplay src=""></audio>

<video width="500" controls muted loop autoplay src="../fastlogo/jhinsi1.mp4"></video>
    </fieldset>
</body>
</html>
```
---------------------------------


**List tables and forms**

List are used to display content which represnts a list

*Unordered list*: used to list unordered items
<ul>
    <li>Home</li>
    <li>aboutM</li>
</ul>

*Ordered list*: used to list ordered items
    <ol>
        <li></li>
    </ol>

*Tables*

The <table> tag is used to define tables in HTML.
It is used to format and display tabular data

*tr* tag: used to display table row
td tag: used to display table data

*th* tag: use in places of table data for displaying table headers

*we* can define as many table rows as we want

*To* add a caption to the table, we use <caption> tag inside table.

*thead* tag: Used to warp table head (Caption and tr with th)

*tbody* tag: Used to warp the table body

**colspan attribute**

This attribute is used to create cells spanning multiple columns.
<th colspan="3">Harry(spans 3 colums)(/th)

*HTML forms*
An HTML form is use dto collect input from the user form tag is used for the same

<form>
-- Element of the form --
</form>

There are different form elements for different kinds of user input

* Input element : Can be of type text checkbox, radio button and submit. we also have file type.

* textarea element : Define a mult line text input cols and rows attributes can be used to size the textarea.

* select elements : Define a drop down list.

*Embedding Videos*
Video tag is used to play vidoes in HTML 
```HTML
<video width="500" controls muted loop autoplay src="../fastlogo/jhinsi1.mp4"></video>
```
Height auto adjust

**kjbkjjdscbcjkab**
*fsuigsfkljvkjgvsd*
* dviluhsf
1. sdhivbsdkc
`csjkbhsdvv`
*`da,kbadk.jdjb`*
**`da,kbadk.jdjb`**