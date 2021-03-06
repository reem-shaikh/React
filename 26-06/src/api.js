export const getComments = async () => {
  //array of objects - comments were getting from the backend
  //userId specifies the user who commented 
  //id specifies each distinct comment 
  return [
    {
      id: "1",
      body: "First comment",
      username: "Jack",
      userId: "1",
      //root comment 
      parentId: null,
      createdAt: "2022-06-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Second comment",
      username: "John",
      userId: "2",
      parentId: null,
      createdAt: "2022-05-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    // generating unique id
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "John",
    createdAt: new Date().toISOString(),
  };
};

