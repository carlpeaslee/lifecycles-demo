*componentWillUnmount*

ComponentWillUnmount is where we clean up any activities our component was performing that might affect our apps performance.

We're basically tell our component to pick up after itself. The most common applications here might be if we'd set up any event listeners or set any timers with setInterval or setTimeout.

Let's see what happens when we use setInterval in a component but then forget to clear that interval after it unmounts. 
