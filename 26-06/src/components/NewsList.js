import React from 'react'
import { Stack} from '@mui/material'
import PostCard from './PostCard';
const PostList = (props) => {
  console.log(props.data);
    //const arr = [true, true, true, true, true]

  return (
    <Stack spacing={2} mt={4} mb={4} alignItems="center">
   
      {props.data.map((NewsPost, idx) => 
      {
        return (
            <PostCard key={idx} NewsPost={NewsPost} />
     
        )
      }
      )}

    </Stack>
  )
}

export default PostList