### Image Gallery in React 
### Features:
- When user loads, it should show some images
- We show images in grid format 
- search bar with suggestions if possible 
- search results 
- clicking on any image should open a popup 
- Thatpopup will contain the image in HD, title, uploadded by, tags, date 
- clicking outide of the popup will not close it 
- popup should have a close button 
- blurr in the background when popup is open 
- click on the image should give option to like, share and download. 
- when i like it should show red heart (otherwise transparent)

### Wireframe 
- entire webpage 
![](1.PNG)

- when click on the image, popup pops up 
![](2.PNG)


### Unsplash 
Unsplash gives API, and you can use their data on your website.

> create an account, it returns these keys
Place this in `.env`
- Access Key 
```bash
G9Y8uhbH5ROeTVqLo8PqNkwuQVjXfN9f-nXaJAXdpvo
```
- Secret Key 
```bash
KLlpIh6BZf6gjinU6rLF4ZzlDdrMnAtW59ExZd6d5eg
```
```bash
IF ANYONE ACCESSES THE KEYS IT CAN CAUSE SECURITY ISSUES, and youll

#some companies assign different API keys for different stages for security issues 
- staging     (testers)
- development (developers)
- production  (production)
```

### Steps to keep app secure 
1. install env-cmd `npm install env-cmd`
2. create a file .env in root folder of your project (just outside src)
```bash
REACT_APP_API_KEY = G9Y8uhbH5ROeTVqLo8PqNkwuQVjXfN9f-nXaJAXdpvo
REACT_APP_API_SECRET = KLlpIh6BZf6gjinU6rLF4ZzlDdrMnAtW59ExZd6d5eg
```
3. In package.json add `env-cmd -f .env` in scripts
```bash
  "scripts": {
    "start": "env-cmd -f .env react-scripts start",
    "build": "env-cmd -f .env react-scripts build",
    "test": "env-cmd -f .env react-scripts test",
    "eject": "env-cmd -f .env react-scripts eject"
  },
```
or (if you want to keep staging(testing) and production seperate)
2. create a file .env.staging and .env.production in root folder of your project (just outside src)
3. In package.json add `env-cmd -f .env` in scripts
```bash
  "scripts": {
    "start": "env-cmd -f .env production react-scripts start",
    "build": "env-cmd -f .env staging react-scripts build",
    "test": "env-cmd -f .env production react-scripts test",
    "eject": "env-cmd -f .env react-scripts eject"
  },
```

4. When you want to use it `process.env.<environmentname>` in our case its `process.env.REACT_APP_API_KEY`

5. select these functionalities and save it. 
![](3.PNG)

6. Navigate to https:#react-bootstrap.github.io/ and copy this command 
```bash
npm install react-bootstrap bootstrap
```
```bash
When 2 softwares wants to communicatee (react-boostrap and our react app), we use API  

To communicate with each other we have API
```
![](5.PNG)

7. import css from here ![https:#react-bootstrap.netlify.app/getting-started/introduction/#css] in App.js 
```bash
import 'bootstrap/dist/css/bootstrap.min.css';
```
> App.js 
```bash
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log(process.env.REACT_APP_API_KEY)

  return (
    <div className="App">
     <Header/>
    </div>
  );
}

export default App;
```

> Header.js 
```bash
import React from 'react'
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
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
> ImageList.js 
```bash
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ImageCard from './ImageCard'

const ImageList = () => {
#4x3 grid
const arr = [true, true, true, true, true, true, true, true, true, true, true, true, true]
  return (
    #we placed imageCard component inside ImageList 
    <>
      #mt-4 to add margin between navbar and first grid row
      <Container fluid className='mt-4'>
        <Row>
             {arr.map((single_elem, idx) => {
                    return <Col sm={4} key={idx}>
                              <ImageCard/>
                            </Col>
                })}
        </Row>
      </Container>
    </>
  )
}

export default ImageList
```
> ImageCard.js 
```bash
import React from 'react'
import { Card } from 'react-bootstrap'
const ImageCard = () => {
  return (
    <>
      # mb-3 to add margin in between cards 
      <Card className="bg-dark text-white mb-3">
        <Card.Img src="https:#images.unsplash.com/photo-1648737154547-b0dfd281c51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  )
}

export default ImageCard
```
#### difference between container and container-fluid 
```bash
container - has a maximum width and it stays in that much width only 

container-fluid - stretches to the width of the page 
```
#### Breakpoints 
the point at which we break the previous css and we apply a new css for a new dimension

> So I was having an error (.env-cmd failed)
I fixed by fixing this path fixing package.json scripts 

#### Adding this Modal 
> Static backdrop
When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it.
![](https:#react-bootstrap.github.io/components/modal/)
```bash
In pop.js we first pasted everything inside fragments  
and we added the state from this template in app.js 
```
- Popup.js 
```bash
import React from 'react'
import {Modal, Button} from 'react-bootstrap'

const Popup = (props) => {
  #1. first we pasted the modal code inside static-bootstrap 

  #2. we cut the button and state and paste it inside App.js since were handling states over there 

  #3. states are defined in app.js and passed as props to Pop.js 
  return (
    <>
    # show modal or hide modal depends on the props passed 
      <Modal
        show={props.showModal}
        onHide={props.closeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Popup
```
- App.js 
```bash
import './App.css';
import Header from './components/Header';
import ImageList from './components/ImageList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import Popup from './components/Popup';
import {Button} from 'react-bootstrap'

# were opening the popup in app.js 
#were closing the popup in popup.js 
function App() {
  console.log(process.env.REACT_APP_API_KEY)

  # all the states will be inside App.js 
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <div className="App">
     <Header/>

     # this button is from  static back drop 
     <Button variant="primary" onClick={openModal}>
        Launch static backdrop modal
      </Button>

     <ImageList/>
     # when you click on the button only then it will close, if you click anywhere out in the website it wont work 
     <Popup showModal={showModal} closeModal={closeModal}/>
    </div>
  );
}

export default App;
```

> Vertically centered
You can vertically center a modal by passing the centered prop.
```bash
#we want to add this prop to Popup.js 
centered 
```
- Popup.js 
```bash
import React from 'react'
import {Modal, Button} from 'react-bootstrap'

const Popup = (props) => {
  #1. first we pasted the modal code inside static-bootstrap 

  #2. we cut the button and state and paste it inside App.js since were handling states over there 

  #3. states are defined in app.js and passed as props to Pop.js 
  return (
    <>
    # show modal or hide modal depends on the props passed 
      <Modal
        show={props.showModal}
        onHide={props.closeModal}
        backdrop="static"
        keyboard={false}
        centered 
        #✅we got centered prop from vertically centered 
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Popup
```
> Sizing modals using custom CSS#
You can apply custom css to the modal dialog div using the dialogClassName prop. Example is using a custom css class with width set to 90%.
```bash
#we want to add this prop inside Popup.js 
 dialogClassName="modal-90w"
```
- Popup.js 
```bash
import React from 'react'
import {Modal, Button} from 'react-bootstrap'

const Popup = (props) => {
  #1. first we pasted the modal code inside static-bootstrap 

  #2. we cut the button and state and paste it inside App.js since were handling states over there 

  #3. states are defined in app.js and passed as props to Pop.js 
  return (
    <>
    # show modal or hide modal depends on the props passed 
      <Modal
        show={props.showModal}
        onHide={props.closeModal}
        backdrop="static"
        keyboard={false}
        centered 
        dialogClassName="modal-90w"
        #✅We imported this prop from sizing modals using css
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Popup
```
were applying custom properties from our `App.css` 
```bash
.modal-90w {
    width: 90% !important;
    max-width: initial !important;
}
```
#### Props send in this order 
```bash
App.js 
  | 
  v
ImageList.js 
  |
  v
ImageCard.js 
```
- App.js 
```bash 
import './App.css';
import Header from './components/Header';
import ImageList from './components/ImageList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import Popup from './components/Popup';
import {Button} from 'react-bootstrap'

// were opening the popup in app.js 
//were closing the popup in popup.js 
function App() {
  console.log(process.env.REACT_APP_API_KEY)

  // all the states will be inside App.js 
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <div className="App">
     <Header/>

     #we commented this 
     {/* this button is from  static back drop */}
     {/* <Button variant="primary" onClick={openModal}>
        Launch static backdrop modal
      </Button> */}

    #✅we added prop over here 
     <ImageList cardClick={openModal}/>
     {/* when you click on the button only then it will close, if you click anywhere out in the website it wont work */}
     <Popup showModal={showModal} closeModal={closeModal}/>
    </div>
  );
}

export default App;
```
- ImageList.js 
```bash
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ImageCard from './ImageCard'

const ImageList = (props) => {
// 4x3 grid
const arr = [true, true, true, true, true, true, true, true, true, true, true, true, true]
  return (
    // we placed imageCard component inside ImageList 
    <>
    {/* mt-4 to add margin between navbar and first grid row*/}
      <Container fluid className='mt-4'>
        <Row>
             {arr.map((single_elem, idx) => {
                //xxl -2 (which means 6 columns) -12/2=6
               //xl -3 (which means 4 columns)   -12/3=4
              //lg -4 (which means 3 columns)    -12/4=3
             //sm- 6 (which means 2 columns)      -12/6=2
                    return <Col sm={6} xxl={2} xl={3} lg={4} key={idx}>
                              <ImageCard click={props.cardClick}/>
                                #✅we retreived prop from App.js  
                            </Col>
                })}
        </Row>
      </Container>
    </>
  )
}

export default ImageList
```
- ImageCard.js 
```bash
import React from 'react'
import { Card } from 'react-bootstrap'
const ImageCard = (props) => {
  return (
    <>
      {/* mb-3 to add margin in between cards */}
      <Card className="bg-dark text-white mb-3" onClick={props.click}>
      #✅we retreived props from ImageList.js  
      #when user clicks on the button its retreived
        <Card.Img src="https://images.unsplash.com/photo-1648737154547-b0dfd281c51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  )
}

export default ImageCard

```
#### Integrate Axios 
```bash 
npm install axios 
```
> App.js 
```bash
import './App.css';
import Header from './components/Header';
import ImageList from './components/ImageList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import Popup from './components/Popup';
import {Button} from 'react-bootstrap'
import axios from 'axios'

// were opening the popup in app.js 
//were closing the popup in popup.js 
function App() {
  console.log(process.env.REACT_APP_API_KEY)

  // all the states will be inside App.js 
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const [imageList, setImageList] = useState([])

  // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

  //https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}
  useEffect(() => {
    axios.get(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`)
    .then(response => setImageList(response.data))
  })

  return (
    <div className="App">
     <Header/>

     {/* this button is from  static back drop */}
     {/* <Button variant="primary" onClick={openModal}>
        Launch static backdrop modal
      </Button> */}

     <ImageList cardClick={openModal}
                images={imageList}   />
                #we added images prop here 
     {/* when you click on the button only then it will close, if you click anywhere out in the website it wont work */}
     <Popup showModal={showModal} closeModal={closeModal}/>
    </div>
  );
}

export default App;

```
> ImageList.js 
```bash
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ImageCard from './ImageCard'

const ImageList = (props) => {
// 4x3 grid
const arr = [true, true, true, true, true, true, true, true, true, true, true, true, true]
  return (
    // we placed imageCard component inside ImageList 
    <>
    {/* mt-4 to add margin between navbar and first grid row*/}
      <Container fluid className='mt-4'>
        <Row>
             {props.images.map((single_elem, idx) => {
                //xxl -2 (which means 6 columns) -12/2=6
               //xl -3 (which means 4 columns)   -12/3=4
              //lg -4 (which means 3 columns)    -12/4=3
             //sm- 6 (which means 2 columns)      -12/6=2
                    return <Col sm={6} xxl={2} xl={3} lg={4} key={idx}>
                              <ImageCard click={props.cardClick}/>
                            </Col>
                })}
        </Row>
      </Container>
    </>
  )
}

export default ImageList

```
#### masonry (Cascading grid Layout library)
Masonry works by placing elements in optimal position based on available vertical space, sort of like a mason fitting stones in a wall. You’ve probably seen it in use all over the Internet.

- We want the grid to be alligned so were installing another package called masonry 
```bash
npm install masonry-layout --save
```











































