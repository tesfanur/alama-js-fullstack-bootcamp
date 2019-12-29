# Alama-JS-Fullstack-Bootcamp
Alama Javascript Fullstack Bootcamp Training
## JS The Recent Parts Video Lecture by Kyle Simpson
    Personal Note:
    
		By Tesfaye Belachew 
		 
The video is not a complete training and hence you need to surf for additional features whenever you need to extend your awareness for the available new features
### Interpolated string literals=> aka template strings
### Practiced template interpolation:
-   By using variables, function calls, immediately invoked functions(IIfs), even template literals as values to be placed in the template literals' expression place holder.

### Challenges
-   I face while practicing template literals is that Kyle said we can place anything inside the place holders ${}, for instance he said we can put a whole js program inside the curly braces(```${}```). I tried a for loop to be interpolated but it couldn't work. Anyone who understands what Kyle want to teach in his template string video around 5:40?
- Didn't practiced using literals with inline markdown(to be practiced with the front end markdown techs)
- Tagged function for string preprocessing. Couldn't understand them. Would you please list npm packages related to tagged function?

### Destructuring:
-  Assign or pull a value from an object(object, array, JSON API)
-  We can assign a default  value as a fall back if we  couldn't get from the object we want to pull a value
-  We can also give a new name for the value we want to pull from an object
-  Using destructuring pattern to swap elements without using temporary variable
-  Parameter destructuring(taking only the parameter we want form the object passed to a function
-  Using graceful fallback/default value assignment  while attempting un existing value  ```data || [],   data || {} ```
-  Nested array/object destructuring
-  Note: with arrays order of destructuring matters by in objects doesn't
-  Using parenthesis () in order to avoid Overloading of curly braces(block scoping) is a must in object destructuring, hence you should embrace the whole object destructuring pattern inside braces i.e ```({a:first,b:second}=obj;)``` or Use temporary variable assignment along with the destructuring patter as : ```let temp ={a:first,b:second}=obj;```
-   Destructuring an array pattern inside and object pattern or vice versa
-   Destructuring object inside another object or array inside another array
-   Named arguments using destructuring pattern for function parameters

##### //TODO: readme to be styled using githubs markdown. Added github markdwon preview package on my ide vs code and it makes it easy for me to preview it before i push the code to the remote repo. Marked the readme file but you can further use othe markdowns like code block to style your readme file.