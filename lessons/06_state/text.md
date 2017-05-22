*state*

Let's talk about setting state and a components initial state.

There are two ways you can set a components initial state. The first is to simply reference them as if they were a property of the component –– because they are. You can just say

```javascript

state={
  ...whatever
}
```

Another common tactic is to set them in the constructor() method.

Here you would write

```javascript

constructor(props) {
  super(props)
  this.state = {

  }
}
```

There are a few things we should note here. When we create the constructor function we are declaring the props argument and then making sure to pass props along as an argument to the parent component class by saying super(props). If we don't pass props along to super() we will likely get an error but then those props won't be available to us here in the constructor function...

Notice also that we're not calling setState... we are actually just setting the state variable to equal whatever we want.

This is the only place where we should do this. Everywhere else its important to use setState instead of trying to directly mutate state.
