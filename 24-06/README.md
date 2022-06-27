### React Biulding Comments Application
> Comments.js (Fetch comments here)
- component for list (Comment.js)
- single component 
- comment form (CommentForm.js)

> App.js 
- render list of components inside App component 
- To comments component were passing current currentUserId 

> Comments.js 
- create state backendComments to retreive comments from the backend 
- we triggered the useEffect with an asynchrnous call. we retreived getComments api and set the data. 
- write markup in return for the comments 
- create rootComments function to get root comments and render their replies, where we filter backendComments parentId to be equal to null (since its only the parentid that are the root comments) Root comments are technically the first comment of the specific id (i.e they are not nested comments), from here we pass rootComment function to Comment component.
- we create a function getReplies which would filter backendComment state's parentID and check if its equal to the id passed to it  and were sorting it and were converting from string to js date and we pass replies=getReplies(rootComment.id) as prop to Comment component.
- we integrated write component field and another CommentForm component and pass it form attributes and we created a handleSubmit passing a function addComment 
- import createComment API and within addComment we pass this api and update the BackendComment to include the newly created comment. 

> Comment.js 
- were retreiving the comment prop passed from Comments.js through object destructuring, and were rendering the comments in here 
- in this component we dont have access to our complete root comments
- we retreived the replies prop over here. if there is any content present inside resplies, for each reply you need to render a comment. replies cant have nested components. 
- were defining actions reply, edit and delete 

> CommentForm 
- handleSubmit and submitLabel retreived as props over here 
- we create a state text 
- create onSubmit function, within which we pass handleSubmit with text as argument 
- we passed onSubmit as an attribute to form within which we set the input field and button. after onSubmit is done, once we complete writting in the input field and hit on button, it will erase the text in the input field.
- we disabled the button if it has no text 