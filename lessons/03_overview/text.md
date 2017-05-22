*Overview*


Let's start by taking a look at all of the lifecycle methods and related React API methods and properties that we'll be using in this course.

Slide of all of them.

Before we dive into each of them, let's take a look at a dummy component I've built and wrapped in a higher order component which will cause it to log whenever the wrapped component makes use of a lifecycle method.

Show how the example component calls the lifecycle methods.

I'll also let you take a look at the logger Higher Order Component so you have some idea what's going on.

Basically we've created a function that accepts a component as an argument and then makes some modifications to that component and then returns it. The modifications we're making are primarily to log things to the console.
