### The Deployed code
https://stunning-alfajores-c8dbc2.netlify.app/

### Adding Search functionality and infinite scrolling on each search 
- When were a the home component the path is `/` which is basically `http:#localhost:3001/`
- When we type orange in the search bar, it redirects us to the search component where the path is `/search` which is basically `http:#localhost:3001/search?q=orange` This kind of url, is technically query parameter and we ue the useSearchParams() hook to implement it. 
- When we click on the image, we want the image to be showcased on the Detail component, we'll retreive the image through the imageId, and when we click on the image this is the url we get `http:#localhost:3001/image/pCjw_ygKCv0` which is basically a path parameter, which can be set through useParams() hook. 

> App.js 
 ```bash
import Header from "./components/Header";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Home from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        #inside App.js we added route paths for all these components 
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/image/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
```
> Home.js 
In Home component, were mentioning what would we want the app to render when its at this path `http:#localhost:3001/`, were also setting all the images to an infinite scroll 
```bash
import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';
import ImageList from "./ImageList";

const Home = () => {
  const [imageList, setImageList] = useState([]);

  #this function is used to set an infinite scroll 
  const loadFunc = (e) => {
    console.log(e);
    axios.get(`https://api.unsplash.com/photos/?page=${e}&per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
      .then(response => setImageList(old => [...old, ...response.data]));
  }

  return (
    <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true || false}
        loader={<div className="loader" key={0}>Loading ...</div>}>
        <ImageList images={imageList} />
      </InfiniteScroll>
  )
}

export default Home
```
> Header.js 
Whenever the user enters something in the input field, we want to set its url as a query parameter which can be acheived using useSearchParams() hook, Whenever the path is set to /search which is acheived in Header.js. after user enters in the input field, we redirect the user to `/search?q=${inputRef.current.value}`
```bash
import React, { useRef } from 'react'
import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const inputRef = useRef();
  const navigate = useNavigate();

  const formSubmitted = e => {
    e.preventDefault();
    navigate(`/search?q=${inputRef.current.value}`);
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand ><Link to="/" style={{textDecoration: "none", color: "black"}}>GeekGallery</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex" onSubmit={formSubmitted}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                ref={inputRef}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
```
> Search.js 
Whenever the path is set to `/search?q=${inputRef.current.value}` after executing Header.js it is retreived in Search.js where the query parameters are implemented inside useSearchparams() hook, where the searchParams is retreived and the value is set to the value that the user has typed, also were implementing an infinite scroll in `loadFunc` function where were updating the imageList state and were passing it as a prop to ImageList component 
```bash
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';
import ImageList from './ImageList';
import InfiniteScroll from 'react-infinite-scroller';
import 'bootstrap/dist/css/bootstrap.min.css';
const Search = () => {
  #were using the useParams hook for setting the url for the query parameter 
  const [searchParams] = useSearchParams();
  #paste imageList as a state inside here 
  const [imageList, setImageList] = useState([]);

  #if the searchbar is not empty we want to fetch the results based on what the user searched for 

  #create a function called loadFunc, where itll take pageNumber as an argument and pass it to the url 
  #when we click on the card and it opens details.js then it loads the specific details about opened image 
  const loadFunc = pageNo => {
    axios.get(`https://api.unsplash.com/search/photos/?query=${searchParams.get("q")}&page=${pageNo}&per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
    .then(response => setImageList(list => [...list, ...response.data.results] ));
  }

  return (
    #attach InfiniteScroll component and paste the imageList inside it 
    <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true || false}
        loader={<div className="loader" key={0}>Loading ...</div>}
      >
        {/*paste imageList component inside Search.js and pass the props to it */}
      <ImageList images={imageList} />
    </InfiniteScroll>
  )
}
```
> ImageList.js ( no change )
```bash
import { Container, Row, Col } from 'react-bootstrap';
import ImageCard from './ImageCard';
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const ImageList = (props) => {
  return (
    <>
      <Container fluid className='mt-4'>
        <Row>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {props.images.map((single_image, idx) => {
              return <Col key={idx}><ImageCard image_details={single_image} /></Col>
            })}
          </Masonry>
        </Row>
      </Container>
    </>
  )
}

export default ImageList
```
> ImageCard.js 
The card has a bunch of random text printed on it, which is basically just sub-objects of the prop that was passed by ImageList.js. 
When the user clicks on the card, we want to open the card on Details.js, but we also want to redirect the user to the given url, the redirection occurs through the useNavigate hook
```bash
import React from 'react'
import {Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ImageCard = (props) => {
  const navigate = useNavigate();
  const click = () => {
    navigate(`/image/${props.image_details?.id}`);
  }

  return (
    <>
      <Card className="bg-dark text-white mb-4" onClick={click} style={{cursor: "pointer"}}>
        <Card.Img src={props.image_details?.urls?.thumb} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{props.image_details?.user.name}</Card.Title>
          <Card.Text>{props.image_details?.description}</Card.Text>
          <Card.Text>{props.image_details?.created_at}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  )
}

export default ImageCard
```
> Details.js 
Inside details.js were setting the url for the given image id using the useParams() hook, by first retreiving all the given image based on the id and then updated the ImageData state which is responsible for setting the image on Details.js. If the image id is present then we display it, along with a bunch of other properties, otherwise we display Loading...
```bash
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Detail = () => {
  const params = useParams();
  const [imageData, setImageData] = useState({});
  
  useEffect(() =>{
    #Fetch the Detail and save in state
    axios.get(`https://api.unsplash.com/photos/${params.id}?per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
    .then(response => setImageData(response.data));
  }, [params])
  
  return (
    <>
      {imageData.id ? (
      <Container fluid style={{backgroundColor: `${imageData?.color}35`}} className="p-5">
        <Row>
          <Col md={6}>
            <img style={{ maxWidth: "100%", maxHeight: "75vh", borderRadius: "5px" }} src={imageData?.urls?.full} alt="Detail" />
          </Col>
          <Col md={6}>
            <h3>Uploaded By: {imageData?.user?.name} (@{imageData?.user?.id})</h3>
            <h4>Upload Date: {imageData?.created_at}</h4>
            <hr />
            {imageData?.description ? (
              <>
                <h5>Description:</h5>
                <h6>{imageData?.description}</h6>
                <hr />
              </>
            ) : false}
            <h6>Width: {imageData?.width}</h6>
            <h6>Height: {imageData?.height}</h6>
            <br />
            <hr />
            <Button variant="primary" style={{backgroundColor: imageData?.color, borderColor: imageData?.color}} href={imageData?.links?.download} target="_blank">Download</Button>
          </Col>
        </Row>
      </Container>
      ) : <h4>Loading...</h4>}
    </>
  )
}

export default Detail
```
### Deployment 
> What happens when you add say 'bootstrap':"^5.1.3" to package.json
Whenever we do npm install it installs everything you entered inside package.json

> To remove errors for hosting we did this 
- changed bootstrap to 5.2 from package.json, then run npm install
- installed specific version of autoprefixer 
```bash
npm install autoprefixer@10.4.5 --save-exact
```
> Webpack is a bundler 
npm run build will create a folder called build inside which it creates html, css, js. it combines all our components and creates a bundled big JS file 

Webpack Takes different modules and bundles together to html, css, js

> Hosting on netlify
- add this in gitignore 
```bash
.env.*
```
- commands
```bash
cd geekster/
mkdir geekgallery
ls -all
git init 
git remote add origin url 
git remote -v #are the origins added or not 
ls -al
git add . 
git commit -m 'added'
git push -u origin master 
```
- while uploading on netlify in advanced build settings you'll need to add both the api keys in the variable 
- remove env-cmd production and staging files from package.json

it shows an error after its deployed 
![](1.PNG)

By adding these files were telling netlify no matter what happens open index.html from the build, at the end of the day the only file we get is index.html thats why its an SPA. 

Were telling react to take me to index.html which loads index which loads the Router which shows the Detail component 

It looks like you're using react-router within your site to route between different pages. If that's the case, you'll need to tell Netlify to serve the index.html file for everything, not just the root of the site.

> From this netlify blog post
If you choose to use something for routing (like React Router for example), you will need to set up a redirect and rewrite rule for the single page app.

Try adding `/*    /index.html   200` to a _redirects file in your publish directory or the following to your netlify.toml.
```bash
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
![](https://master--tubular-starship-437664.netlify.app/image/ESaJW74Mh9w)