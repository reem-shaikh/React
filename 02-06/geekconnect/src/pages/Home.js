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

    // Get List
    // Get list of posts sorted by creation date.
    // - Pagination query params available.
    // - Created query params available.
    // GET
    // /post
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

  // useEffect(() => {
  //     loadPage()
  // }, []);

  
  //when we did place loadPage inside useEffect, we would get this error 
  //React Hook useEffect has a missing dependency: loadMore.
  //Either include it or remove the dependency array  react-hooks/exhaustive-deps  

  //to fix this error/ issue, instead of specifying loadpage() within useEffect(), copy the code from loadpage(), embed it inside an IIFE, integrate the syntactical sugar async/await 
  useEffect(() => {
    (async() => {
      const response = await dummyapi.get(`/post`);  
      const data = response.data.data;
      setPosts(data);
      setPageNumber(1);
    })();
  }, []);

  const loadMore = () => {
    loadPage();
  }

  //so why did we place loadpage() in another function loadMore()
  //why couldnt we just define it inside useEffect, but here's what, we needed to pass it as props as well right?
  //so we pass loadMore as props to PostList

  
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