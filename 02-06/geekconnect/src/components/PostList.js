import React from 'react'
import { Stack, Button } from '@mui/material'
import PostCard from './PostCard';

const PostList = (props) => {
  console.log(props);
    //const arr = [true, true, true, true, true]

  return (
    <Stack spacing={2} mt={4} mb={4} alignItems="center">
   
      {props.posts.map((singlePost, idx) => 
      {
        return (
            // <Item key={idx}>
            //     <PostCard/>
            // </Item>
          <PostCard key={idx} singlePost={singlePost} />
        )
      }
      )}

       {/* imported button */}
       {/* when we click on button it'll make API call and it'll fetch all the data */}
      <Button variant="text" onClick={props.loadMore}>Load More...</Button>
    </Stack>
  )
}

export default PostList