*displayName*

displayName is a static property of every react component. And even though it doesn't have any actual effect on the functionality of your app, it is very useful when debugging using the Perf library or your browser's React dev console tools.

Let's take a look at the way our app looks in the console. Here we can see some of our compoennts have nice names. And others don't.

We can make things a little easier to read by adding displayNames like this. Either by using the static method inside the component. Or by setting it after the fact.
