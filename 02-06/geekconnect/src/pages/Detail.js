import { Container, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../components/CommentList';
import PostDetail from '../components/PostDetail';
import { dummyapi } from '../util';
import { Link } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams()
  const [detail, setDetail] = useState()
  const [comments, setComments] = useState()

  useEffect(() => {
    //Get Post by id
    // Get post full data by post id
    // GET
    // /post/:id

    //dummyapi returns a promise, I'll wait and take the response 
    (async() => {
      const response = await dummyapi.get(`post/${id}`);
      console.log(response.data);
      setDetail(response.data);
    })();

    //get comment data 
    // Get List By Post
    // Get list of comments for specific post sorted by creation date.
    // - Pagination query params available.
    // - Created query params available.
    // GET
    // /post/:id/comment
    // Response: List(Comment 
    (async() => {
      const response = await dummyapi.get(`/post/${id}/comment`);
      console.log(response.data.data);
      setComments(response.data.data);
    })()
  }, [id])

  return (
    <>
      <Container style={{ maxWidth: "520px" }}>
        <Stack mt={4} gap={4}>
          <PostDetail detail={detail} />
          <Typography variant='h6'>{detail?.text}
            <Typography variant="caption">
              {' '}-{' '}
              <Link to={`/profile/${detail?.owner?.id}`}>
                {detail?.owner?.firstName} {detail?.owner?.lastName}
              </Link>

            </Typography>

          </Typography>

          <CommentList commentList={comments} />
        </Stack>
      </Container>
    </>
    // Prop Drilling:
    // detail -> commentList -> comment 

    //we can use context API since we have only list of comments to share (1 state), if we had more than 1 state, we could've used redux. 

    //commentList will run a map of comments 
  )
}

export default Detail