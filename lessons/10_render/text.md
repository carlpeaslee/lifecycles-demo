*render*

Render is definitely the most used of react's lifecycle methods. And it is where you are assembling the collection of html elements that will make up your component.

It's important that you don't make any untriggered calls to setState in your render() function otherwise you will create an infinite loop of rerendering.


Remember render is just like any function that returns something so you can perform other calculations here before the return.

A lot of times I like to dissasemble objects to make my code below more readable... You could also perform calculations -- but thats really just a stylistic choice.

One other thing to know it that you can also have a React component's render function return null or false. This means that the component won't return anything. This is completely acceptable.
