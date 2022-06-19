> Deployed Link: https://steady-dodol-33102d.netlify.app/
> Repo Link: https://github.com/reem-shaikh/React/tree/master/19-06

#### Ecommerce App 
> Features:
- Implemented the styling in **react-bootstrap**
- Render all images on DOM by fetching it from the API endpoint using **axios** 
- Each card contains the image, descripton and add to card functionality 
- Whenever user clicks on add to cart, we save it in **redux store** and retreive it in another component cart
- Add to cart functionality add the content in the cart, we can also remove items from here, all manipulations done via **redux**. 
- when user clicks on the card, it redirects them to the items card page, we set the url via path parameters **useParams()** hook.
- created a `_redirects` file 

> Installations 
- react-bootstrap
```bash
npm install react-bootstrap bootstrap
```
- React-router 
```bash
npm i react-router 
npm i react-router-dom 
```
- Redux 
```bash
npm i redux react-redux
```
- env-cmd 
```bash
npm i env-cmd
```
#### Difference between redux v8 and previos versions 
> In the previous versions of redux, we used to maintain a seperate store for combining the reducers and sending the store object created via createStore() to the App component. 