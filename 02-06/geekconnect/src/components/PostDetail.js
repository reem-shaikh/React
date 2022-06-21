import React from 'react'
import { Paper, LinearProgress } from '@mui/material';
//this component is to render the comments in Paper in a stack format 
const PostDetail = ({ detail }) => {
  return (
    <>
      {detail !== undefined ? (
        <Paper elevation={5}>
          <img src={detail?.image} alt="comment" style={{ width: "100%", borderRadius: "5px", height: "100%" }} />
        </Paper>
      ) : (<LinearProgress />)}
    </>
  )
}

export default PostDetail