### Add To Cart Ecommerce Store 
![](t1.PNG)
> Note: It takes some time to fetch data from the API endpoint. 
[Deployed Link](https://steady-dodol-33102d.netlify.app/)

### Features implemented
- Responsive Design via MUI and React-Bootstrap
- Axios
- Redux 
- Dyanamic Routing 
- Hooks

### The Website workflow:
1. Initially I've loaded a bunch of store items from the fakestore API via axios. When user clicks on the add to cart button, that item is pushed to the cart (which is a dropdown styling integrated from react-bootstrap)
2. I've implemented badge (MUI import) in my react-bootstrap UI, and icons are imported from Font Awesome icons, I've integrated a CDN link in `public/index.html`
3. When the item is pushed to the cart, the badge value is increemented, and when you click on the cart icon, a dropdown containing all the cart items, along with the total amount and the delete item option is displayed. These items are fetched from the redux store via useSelector() hook within `Header.js` component. When user clicks on the image within the cart, he will then be redirected to `CardDetails.js` component which is the item details component, I've integrated path parameter redirection for each item and used useParams() hook to retreive the id of the item within `CardDetails.js`. 
![](t1.PNG)
4. Within the item details component user can increement and deecrement the quantity of items, and he also gets a provision to delete that particular item. These items are fetched from the redux store via useSelector() hook within `CardDetails.js` component.
![](t3.PNG)

### How is the Routing structured in the code?
- I've encapsulated the App component within BrowserRouter in index.js
```bash
#for react-router 
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
```
- Within `App.js` component I've defined the path and the element it should redirect to. 
```bash
import {Routes,Route} from "react-router-dom";
   <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/cart/:id' element={<CardsDetails />} />
   </Routes>
```
- Within `Header.js` I've inteegrated a NavLink with some added styling to the links, which indicated where would the user be redirected to when he clicks on Add to cart in the navbar 
```bash
import { NavLink } from 'react-router-dom'
    <Nav className="me-auto">
        <NavLink to="/" className="text-decoration-none text-light cute" style={{fontSize: "30px"}}>Add To Cart</NavLink>
    </Nav>
```
- Within `CardDetails.js` I've created a useNavigate object, everytime an item is deleted we want to redirect the user back to the home page 
```bash
  const history = useNavigate();

  const dlt = (id)=>{
    dispatch(DLT(id));
    history("/");
}
```
- Within `Header.js`, I've integrated a Navlink which would redirect the user to `/cart/id` when the image within the cart is clicked 
```bash
 <NavLink to={`/cart/${e.id}`} >
<img src={e.image} style={{width:"5rem",height:"5rem"}} alt="" />
 </NavLink>   
```
- Within `CardDetails.js` I've added a useParams() hook to retreive the id passed in the path parameter url, after retreiving the id, I've used it to display the content details of the image that was clicked on, its also used to target the item to perform delete operation when user clicks on the trash icon.
```bash
  const {id} = useParams();
  # console.log(id);
```
#### How is Redux structured in the code?
To store a data in the redux store, these are the steps that are followed (for functional components)
1. Actions specify what needs to be done (doesnt specify the details of how a particular logic should be carried out). I've created action object for adding to the cart, removing item from item details component, and removing item from the cart. 
2. In order to trigger actions dispatch() method is used. I've used it within `Header.js` to dispatch delete item action when trash icon is clicked.
3. The action is dispatched to the store via the reducer. Within the reducer I've specified the functionality/ logic for the action type defined inside Actions.js 
4. The reducer performs the logic for what the action defined, after targetting different action via `action.type`
5. All the reducers are combined in combineReducers and passed as an argument within store method createStore() which is stored within a store object. In the version before redux v8, we used to manage a store.js, but now we implement the entire code that we would've implemented before within `store.js`, within index.js itself. The store object is finally provided to the App component via App.js and to retreive it in the code useSelector() is used. 
- I've retrieved the store object in `Header.js` to display the items in the cart 
- I've retrieved the store object in `CardDetails.js`, to display the particular targetted item id content on item details page. 



