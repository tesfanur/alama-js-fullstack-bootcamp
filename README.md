# Alama-JS-Fullstack-Bootcamp
Alama Javascript Fullstack Bootcamp Training
## JS The Recent Parts Video Lecture by Kyle Simpson
    Personal Note:By Tesfaye Belachew 
## Day 1 Practice
    Watched half of design for developers video by Sarah Drasner.
## Day 2 Practice		 
    The video is not a complete training and hence you need to surf for additional features whenever
    you need to extend your awareness for the available new features
### Interpolated string literals=> aka template strings
### Practiced template interpolation:
-   By using variables, function calls, immediately invoked functions(***IIfs***), even template literals as values to be placed in the template literals' expression place holder.

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

    **TODO**: readme to be styled using github's markdown. Added github markdwon preview package on my ide vs code and it makes it easy for me to preview it before i push the code to the remote repo. Marked the readme file but you can further use othe markdowns like code block to style your readme file.
    
## Day 3 Practice
-   Reviewed GitHub markdown syntax and updated my GitHub repo readme file markdown so that I keep formatted personal notes while practicing JS the recent parts. To preview my readme file I installed GitHub markdown preview to my vs code ide
- Tried to understand all about named argument in JS
    -   There are no named argument in JS but we can use parameter destructuring pattern to use name arguments
		-   Pros and cons of named argument
			- **Pros**: you don’t need to worry about the order of arguments
			- **Cons**: You need to remember the name of the arguments
			- **Solution**: to use naming conventions strictly like if a function take callback name it cb everywhere in your code etc
		
	- **Note**d: using named argument is common and widely used feature of object destructuring.
	- Destructuring Objects Restructuring
### Challenges
-   Unable to push/pull/fetch code from remote repository while working in proxy based internet connection. Configuration of git to work with proxy setting
-   Frustrated at first but finally got a solution after googling for the problem I face.  Just by using ```
		git config --global http.proxy http://localhost:61521```
- Couldn't work with flat and flatMap array methods. They return TypeError: undefined function(may this be due to my node version?)
Eventually I have got a solution by defining a prototype property for array object as: 
```
//Array.prototype.flatMap() polyfill: source: https://blog.travismclarke.com/post/flatmap-vs-map/
if (!Array.prototype.flatMap) {
  Object.defineProperty(Array.prototype, "flatMap", {
    value: function(callback, thisArg) {
      return this.map(callback, thisArg).reduce((a, b) => a.concat(b), []);
    },
    configurable: true,
    writable: true
  });
} 
//Array.prototype.flat 
Object.defineProperty(Array.prototype, "flat", {
  value: function(depth = 1) {
    return this.reduce(function(flat, toFlatten) {
      return flat.concat(
        Array.isArray(toFlatten) && depth > 1
          ? toFlatten.flat(depth - 1)
          : toFlatten
      );
    }, []);
  }
});

```

	
 - Using array methods
 -      Find and findIndex
	      find method
		Cons of find method
-   It returns undefined when it doesn't find a value that match the condition returned by the callback function passed to it. This can create an ambiguity whether it returns an undefined value from the array that exists as an element or if it returns it as there is no a matching element
-   To solve this ambiguity we can use findIndex method that returns the index of the matching element or -1 if there is no matching element
	   findIndex method did the same with indexOf method but with callback as an argument

