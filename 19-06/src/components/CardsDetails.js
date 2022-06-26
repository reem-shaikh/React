import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DLT,ADD,REMOVE } from '../redux/actions/action'

const CardsDetails = () => {

  const [data,setData] = useState([]);
  // console.log(data);

  const {id} = useParams();
  // console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();

  
  const getdata = useSelector((state)=> state.cartreducer.carts);
  // console.log(getdata);


  //when the id user clicked on, is present inside the cart 
  const compare = ()=>{
    let comparedata = getdata.filter((e)=>{
      return e.id == id
    });
    setData(comparedata);
  }

  // to add the item within card details when user clicks on +
  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }
  
//when user clicks on trash icon in the card details page, delete the entire section from the cart 
  const dlt = (id)=>{
    dispatch(DLT(id));
    //after deleting redirect to the home page 
    history("/");
}

// to delete one item when user clicks on - 
const remove = (item)=>{
  dispatch(REMOVE(item))
}

  useEffect(()=>{
    compare();
  },[id])

  return (
    <>
      <div className="container mt-2">
        <h2 className='text-center cute'>Details Page
        </h2>

        <section className='container mt-3'>
          <div className="iteamsdetails">
          {
            data.map((ele)=>{
              return (
                <>
                <div className="items_img">
              <img src={ele.image} alt="" />
            </div>

            <div className="details" style={{fontSize: "20px"}}>
              <Table>
                <tr>
                  <td className='cute'>
                    <p> <strong>Item</strong>  : {ele.title}</p>
                    <p> <strong>Price</strong>  : ₹{ele.price}</p>
               
                    <p> <strong>Total</strong>  :₹  {ele.price * ele.quantity}</p>
                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
            
                    <span style={{fontSize:24}} onClick={ele.quantity <=1 ? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
                    <span style={{fontSize:22}}>{ele.quantity}</span>
                    {/* add items to the cart */}
                    <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>

                    </div>
        
                  </td>
                  <td>
                  <div style={{marginTop: "240px"}} className='cute'>
                    {/* remove the item user clicked on */}
                    <p>Remove <span ><i className='fas fa-trash' onClick={()=>dlt(ele.id)} style={{color:"grey",fontSize:30,cursor:"pointer"}}></i>	</span></p>
                  </div>
                  </td>
         
        
                </tr>
              </Table>
            </div>
          
                </>
              )
            })
          }
          </div>
        </section>
      </div>
    </>
  )
}

export default CardsDetails