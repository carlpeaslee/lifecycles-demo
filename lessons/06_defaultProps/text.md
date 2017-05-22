*defaultProps*

Default props is another static method that's available to any react component. These don't happen at any point in the components lifecycle but instead at runtime when they are set. They will be available to the component as if they were passed down to it.

defaultProps will be used instead of passed down props if the passed down props are undefined. They will not override null.

Why might you use defaultProps? In many cases, defaultProps can be useful when building subcomponents whose parents components haven't yet been built.

You might also use defaultProps to provide filler information to a component that is receiving its props asynchronously. Say for instance that your component plans to render something from a prop that is an array –– you might want to make sure that your component has a defaultProp that is an empty array.
