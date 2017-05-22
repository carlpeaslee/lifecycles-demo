*How does react update the dom?*

Before we dive more deeply into each of the lifecycle methods, let's briefly review the way that React updates the DOM or Document Object Model.

When you create a website with React, react goes ahead and creates a javascript based version of the dom alongside the real one it rendered to the page. It retains this "virtual dom" as a javascript object in memory.

Now when changes occur in your applications props or state, React will look for differences between the current virtual dom and the one that would result from the new state or props and then it makes changes to actual dom using the difference of the two.

React is already fairly performant on its own but by leveraging the lifecycle methods correctly, we can improve that out of the box speed.

A good understand of the lifecycle methods will also allow us to ensure our components are achieving the right functionality with most efficient amount of code and help us avoid quirky asynchronous problems involving state changes. 
