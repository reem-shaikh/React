import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostList from '../components/PostList';
import ProfileDetail from '../components/ProfileDetail';
import { dummyapi } from '../util';

function Profile() {
  //from object we only want id 
  //object destructuring
  //const {id} = obj 
  const { id } = useParams()
  console.log(id)

  //array destructuring was in es6 (Rest / spread operator)
  //around es8 / es9 - object destructuring was introduced 
   
  //in profile.js we created a detail state and we set the detail and we pass this state to profiledetail as props 
  const [detail, setDetail] = useState({});
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  // Get User by id
  // Get user full data by user id
  // GET
  // /user/:id

  //get the user data based on the id that is retreived by useParams from  PostCard.js 
  //we load all user data for that id the moment useEffect is loaded 
  //we want useEffect to be rendered whenever the id is changing 
  useEffect(() => {
    (async () => {
      const response = await dummyapi.get(`/user/${id}`);
      const data = response.data;
      setDetail(data);
    })();


    // Get List By User
    // Get list of posts for specific user sorted by creation date.
    // - Pagination query params available.
    // - Created query params available.
    // GET
    // /user/:id/post

    (async () => {
      const response = await dummyapi.get(`/user/${id}/post`);
      const data = response.data.data;
      setPosts(data);
      setPageNumber(1);
    })();
  }, [id]);


    // Paging
    // For some endpoints you will get a single item. But for some of them it should be a list of objects.
    // To control amount of items, you need to use page and limit URL params.
    // Limit value should be in range [5-50]. Default value: 20
    // Page value should be in range [0-999]. Default value: 0

  const loadMore = async () => {
    // Get List By user + paging 
    const response = await dummyapi.get(`/user/${id}/post?page=${pageNumber}`);
    const postsArr = response?.data?.data ?? [];
    // if its undefined use an empty array as a fallback 
    // if its defined, it will show the value response?.data?.data
    setPosts(oldPosts => [...oldPosts, ...postsArr]);
    setPageNumber(page => page + 1);
  }


  return (
    <>
      <Container>
        <ProfileDetail detail={detail} />
        <hr />
        <Typography variant="h6" align="center" mt={4}>All Posts</Typography>
        <PostList posts={posts} loadMore={loadMore} />
      </Container>
    </>
  )
}

export default Profile