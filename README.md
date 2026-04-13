# 1
 getElementById: It finds a single element with a specific id attribute and it is very fast and only the id name needs to be given, no # needs to be used and it is a single element object.

getElementsByClassName : This finds all elements with a specific class name and automatically updates the HTMLCollection DOM when it changes. Fairly fast, but slower than getElementById. The class name has to be given as a string, etc.

querySelector / querySelectorAll : Finds elements using CSS selectors #id, .class, div, etc. Full CSS selectors are a bit slower than strings and others.

# 2 
Creating elements

Adding content and attributes to elements

Inserting elements such as
A. appendChild() adds to the end
B. insertBefore() adds to a specific location
C. append() adds to the end of multiple elements or text
D. prepend() adds to the beginning
E. after() / before() - adds before/after a specific element
F. insertAdjacentElement() - more controlled way

# 3
Event bubbling is a process of event propagation in the DOM where when an event occurs on an element, that event is first handled on that element, then step by step to its parent element, its grandparent, and so on, until it reaches the document object. This is called bubbling.
How it works

1. button (child) event is handled here first

2. div#parent then goes to parent

3. div#grandparent then goes to grandparent

4. body then to body

5. html then to html

6. document finally to document

# 4

Event delegation is a technique where you attach an event listener to a parent element, which handles events on its child elements. It takes advantage of event bubbling.

Why is event delegation necessary

1. Handling dynamic elements
2. Improving memory and performance
3. Making code simpler and more maintainable
4. Handling multiple element types

# 5 

## 1  preventDefault()