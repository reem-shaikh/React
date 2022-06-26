import Comments from "./comments/Comments";
//component for the list - comments.js
//single component - comment.js 
//comment form - 

//render list of comments inside app component
const App = () => {
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default App;
