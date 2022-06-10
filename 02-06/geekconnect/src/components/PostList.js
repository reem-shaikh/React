import React from 'react'
import {Stack, Button} from '@mui/material'
import PostCard from './PostCard'

function PostList() {
const arr = [true, true, true, true, true]

  return (
    <>
    {/* justofy content works on main axis (y)
        alignitems works on cross axis (x) */}
        <Stack spacing={2} mt={4} mb={4} alignItems="center">

           {arr.map((_, idx) => {
                return (
                    // <Item key='idx'>
                    //     <PostCard/>
                    // </Item>
                    <PostCard key='idx'/>
                )
            })}
        {/* <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item> */}

       {/* imported button */}
       {/* when we click on button it'll make API call and it'll fetch all the data */}
       <Button variant="text">Load More...</Button>
        </Stack>
    </>
  )
}

export default PostList