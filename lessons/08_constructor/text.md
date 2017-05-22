*constructor*

I touched a bit on the constructor function in the video where we spoke about settings initial state.

That is definitely one way you can use the constructor function.

Another common use case is using the constructor as an opportunity to call the bind(this) method on any functions you might be using inside your component which require access to the components this rather than their own this.

Let's look at an example.

One solution to this problem is to call bind this in your constructor, another would be to use an arrow function when creating methods on your component so that the functions context is automatically set to that of its surroundings.

Or, here in create-react-app we actually have some internal stuff happening in our build process so that all of our methods are being auto bound for us so that we don't have to write this.function = this.function.bind(this) for every method.


The constructor can also be a place where you set up any variables that are not part of props or state but that will be referenced in your component.

For instance, perhaps you want a variable that is itself the result of a class. You could instantiate that class here inside the constructor function.
