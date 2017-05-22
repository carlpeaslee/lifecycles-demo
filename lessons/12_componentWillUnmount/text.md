*componentDidMount*

ComponentDidMount is called once your component has finally been rendered to the dom! Which means that you can no make calls to setState, make any asynchronous ajax calls which might need to eventually reference state, utilize some not react javascript function that might need access to the dom or run your own dom manipulation javascript.

Let's say for instance you're using a vanilla canvas. Before the component mounted, you couldn't access the the canvas node because it didn't exist. Now you can draw whatever you'd like.

This is also the best place for you to set up any event listeners that need to be attached to the window. 
