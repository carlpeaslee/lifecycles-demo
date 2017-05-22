*setState*

Now we're going to look at the setState method. setState is how we make changes to our applications state. And its one of the ways that we might trigger our components update lifecycle methods.

Now chances are you've seen this way of writing setState

```javascript
this.setState({key: newValue})
```

And that way is fine in a lot of cases.

But you should be away that setting state is asynchronous. So there are many scenarios where you will want to setState using the api's expanded syntax:

```javascript

this.setState(
  (prevState, props) =>{

    //code that calculates changes to state based on prevState and props

    return {
      //an object representing any changes you'd like to make to state
    }
  },
  () =>{
      //a callback to be executed after the new state has been set
  }
)
```
