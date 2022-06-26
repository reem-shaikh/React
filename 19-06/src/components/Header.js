import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav'
import Menu from '@mui/material/Menu';
//import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DLT } from '../redux/actions/action';
import './style.css'

const Header = (props) => {
    //console.log(props.data)
    const [price,setPrice] = useState(0);
    // console.log(price);

    const getdata = useSelector((state)=> state.cartreducer.carts);
    // console.log(getdata);

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt = (id)=>{
        dispatch(DLT(id))
    }


    // const total = ()=>{
    //     let price = 0;
    //     getdata.map((ele,k)=>{
    //         price = ele.price * ele.qnty + price
    //     });
    //     setPrice(price);
    // };

    //this was throwing error 
    //useEffect(() => {
    // total()
   // })

   //so i encapsulated the function within the useEffect within IIFE

    useEffect(()=>{
        
        //total() is typically to calculate the total calcculation of items in the cart 
        (()=>{
            let price = 0;
            getdata.map((ele, k) => {
                price = ele.price * ele.quantity + price
            });
            setPrice(price);
        })()
        
    },[getdata])
    //total

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
            <Container>
                    {/* <NavLink to="/" className="text-decoration-none text-light mx-3 cute" style={{fontSize: "30px"}}>Add to Cart</NavLink> */}
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light cute" style={{fontSize: "30px"}}>Add To Cart</NavLink>
                    </Nav>

                    {/* this adds data to the badge */}
                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>

                </Container>


                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {/* this is to place the data within the cart  */}

                    {
                        getdata.length ? 
                        <div className='card_details' style={{width:"24rem",padding:10}}>
                            <Table>
                                <thead>
                                    <tr style={{fontSize: "20px"}} className='cute'>
                                        <th>Photo</th>
                                        <th>Item</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getdata.map((e, id)=>{
                                            return (
                                                <>
                                                    <tr key={id}>
                                                        <td>
                                                            {/* we added handleclose function because whenever were clicking on one image from the cart, and we want another image to render when we clcik on another, then we have to close the first image */}
                                                        <NavLink to={`/cart/${e.id}`}   onClick={handleClose}>
                                                        <img src={e.image} style={{width:"5rem",height:"5rem"}} alt="" />
                                                        </NavLink>   
                                                        </td>
                                                        <td className='cute' style={{fontSize: "20px"}}>
                                                            <p>{e.title}</p>
                                                            <p>Price : ₹{e.price}</p>
                                                            <p>Quantity : {e.quantity}</p>
                                                {/* were invoking the dlt function when trash icon is clicked */}
                                                       {/* trash icon for mobile layout */}
                                                            <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p>
                                                        </td>
                                                        {/* trash icon for desktop layout */}
                                                        <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>dlt(e.id)}>
                                                        <i className='fas fa-trash largetrash'></i>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                    <p className='text-center cute' style={{fontSize: "23px"}}>Total :₹ {price}</p>
                                </tbody>
                            </Table>
                        </div>:
                        
                   <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
                    {/* cross icon to close the your cart is empty message */}
                    <i className='fas fa-close smallclose'
                    onClick={handleClose}
                     style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
                    <p style={{fontSize:22}}>Your cart is empty</p>
                    <img src="./cart.gif" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
                   </div>
                    }

                </Menu>
            </Navbar>
        </>
    )
}

export default Header