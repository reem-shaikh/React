import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
//import Cardsdata from './CardsData'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
//import 'bootstrap/dist/css/bootstrap.min.css';

//This is where the cards are rendered 
const Cards = () => {
  // const [data, setData] = useState(Cardsdata);
  const [data, setData] = useState([]);
  console.log("data", data);

  useEffect(() => {
    (async() => {
      const res = await fetch('https://fakestoreapi.com/products');
      const json = await res.json();
      console.log('api JSON data', json)
      //were updating the state with the json value 
      setData(json)
    })()
  }, [])

  // Cardsdata = async () => {
  //   //were fetching products from this API endpoint 
  //   const res = await fetch('https://fakestoreapi.com/products');
  //   const json = await res.json();
  //   console.log('api JSON data', json)
  //   //were updating the state with the json value 
  //   setData(json)
  // }

  //to trigger action, we use useDipatch() hook 
  const dispatch = useDispatch();


  const send = (e)=>{
    // console.log(e);
    //were dispatching actions 
    dispatch(ADD(e));
  }

  return (
    <div className='container mt-3'>
      <h2 className='text-center cute'>Note: Add to cart functionality implemented using Redux, Axios, Routing, MUI and React-Bootstrap</h2>
      <p className='cute'>When you click on add to cart, it increements count at the badge count icon above. The number of times you click on add to cart, those many quantities of items will be added (all the items inside the cart are retreived from the redux store), when you click on the image from the cart icon dropdown, it will redirect you to details page component where you can view the product details, we display details on this component by fetching data stored in the redux store via useSelector hook.</p>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-around" }}>
        {
          data.map((element, id) => {
            return (
              //imported card from react-bootstrap
              <div key={id} className='cute'>
                <Card style={{ width: '18rem', border:"none", height: '28rem'}} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={element.image} style={{height:"16rem"}} className="mt-3" />
                  <Card.Body>
                    <Card.Title  style={{fontSize: '12px'}}>{element.title}</Card.Title>
                    <Card.Text  style={{fontSize: '21px'}}>
                    Price : ₹ {element.price}
                    </Card.Text>
                    <div className="button_div" style={{display: "flex", justifyContent: "center"}}>
                 
                    <Button variant="primary"  
                      onClick={()=> send(element)}
                     className='col-lg-12'  style={{fontSize: '20px'}}>Add to Cart</Button>
                    </div>
                    {/*  when user clicks on Add to Cart invoke send function, his will send all he data presen inside element argument*/}
                  </Card.Body>
                </Card>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards