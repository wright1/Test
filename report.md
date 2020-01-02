Application
------------

To use the application cd into impendulo (root folder)
start application by typing `npm run server` into command line
go to localhost:3000 in your browser

Technologies used
------------------
The tech stack was kept simple with:
..*Node
..*Express
..*Handlebars
..*Nodemon

Looking at the Task
--------------------
Looking at what the task requested I saw that each page could consisted of 4 elements.
..* Sentence - the leading sentence (in the center of the page)
..* Option - input box
..* Link - once a option is submitted it converts to a link
..* Back to beginning link

User input had to be displayed and recalled.

My primary concern for this task was to find an effective way to store and recall the data the user inputs.

A tree data structure appeared to be an effective way to store the data to be displayed (and any relating data). I created a class called TreeNode, in essence my data structure is made up of TreeNode elements. It was important that I kept me TreNode class really simple. A TreeNode is simply an object with the following values:

..* id - a unique number which is incrementally lengthened with the index placement (in the descentdents array) of the node 
..* value - the text the user entered
..* descentdents - an array (4 elements long) which consists of either a empty string or TreeNode.

Implement the application was then a "simple" matter of connecting user interaction with the chosen data structure.
I saw each page as a Parent TreeNode.

..* Sentence - TreeNode.value
..* Option/Link - a possible element in TreeNode.descentdents 


submitting a Option (input box) adds a TreeNode to descentdents array and (on screen) converts that Option into a link
Clicking a link displays that TreeNode as a parent, that parent descendents are show on screen as a input box or link.
If a descentdent array has a empty string as a element that is rendered on page as a Option, if the element is a TreeNode it is rendered on page as a link

The back to beginning button simply renders the root (top level) TreeNode


