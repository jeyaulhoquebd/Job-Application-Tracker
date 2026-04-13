1
 getElementById: It finds a single element with a specific id attribute and it is very fast and only the id name needs to be given, no # needs to be used and it is a single element object.

getElementsByClassName : This finds all elements with a specific class name and automatically updates the HTMLCollection DOM when it changes. Fairly fast, but slower than getElementById. The class name has to be given as a string, etc.

querySelector / querySelectorAll : Finds elements using CSS selectors #id, .class, div, etc. Full CSS selectors are a bit slower than strings and others.

2
