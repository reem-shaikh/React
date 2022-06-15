import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import PostList from '../components/PostList';
import { dummyapi } from '../util';
import HomeBasicCard from '../components/HomeBasicCard';

const Home = () => {
  const [posts, setPosts] = useState([]);
  // we need to load to next set of pages when we click on load more 
  // by default, it loads the 0'th page 
  const [pageNumber, setPageNumber] = useState(0);

  const loadPage = async() => {
    console.log(process.env.REACT_APP_API_KEY)

    // We can set the axios call using axios.get(base_url, headers) and then set the data 
    // but we'll need to re-write this axios snippet again and again
    // thats why we transfered this common code to util.js 

    // axios.get('https://dummyapi.io/data/v1/post', {headers: {'app-id': process.env.REACT_API_APP_KEY}})
    // .then(data => 
    //  console.log(data)
    //  )
    const response = await dummyapi.get(`/post?page=${pageNumber}`);  
    const postsArr = response?.data?.data ?? [];
    // were checking if its undefined or not 
    // if its undefined use an empty array as a fallback 
    // if its defined, it will show the value response?.data?.data

    // were implemneting null collasing to prevent crashes 
    //setPosts(postArr)
    setPosts(oldPosts => [...oldPosts, ...postsArr]);

    setPageNumber(page => page + 1);

    
//     null collasing:
//     const abcd = null 
//     we can use optional chaining to give fallback 
//     console.log(abcd ?? 'default value')
//     console: default value 
//     if abcd is null/undefined then display default value 

//  dummyapi.get('/post').then(data => console.log(data))
  }

  useEffect(() => {
      loadPage()
  }, []);

  const loadMore = () => {
    loadPage();
  }
  
  return (
    <>
     {/* <PostList posts={posts} loadMore={loadMore}/> */}
      <Container fixed>
        <HomeBasicCard />
        <PostList posts={posts} loadMore={loadMore} />
      </Container>
    </>
  )
}

export default Home