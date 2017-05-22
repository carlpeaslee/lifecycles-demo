*componentWillMount*

ComponentWillMount is probably the least used lifecycle method.

It occurs only once, before your component is about to mount.

Often times you'll see people set up subscriptions or calls to remote apis here -- but technically this is not the best place to do that.

You should not setState within componentWillMount since state technically isn't available and that means that you also shouldn't call functions that will result in changes to state. People do it. And it won't neccesarily cause an error. But you shouldn't do it.

The one real application you might use it for is when writing a universal react app that creates your components serverside and then sends the component to the client. In that situation, componentWillMount is cool because it will actually run on the server.
