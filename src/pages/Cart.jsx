import React from 'react'
import { useSelector } from 'react-redux'
import { incrementCart,decrementCart,removeFromCart } from './redux/slices/cartSlice'
import { useDispatch } from 'react-redux'

function Cart() {
  const dispatch=useDispatch()
  const state=useSelector((state)=>state.cartSlice)
  const{cart}=state
  console.log(cart);


  
  return (
<>
<div className='container-fluid'>
  <div className='row'>
    <div className='col-9'>
      <h1 className='mb-3'>cart summery</h1>
      <table className='table table-info'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            cart.length>0 ?

            <>
            {
              cart.map((item)=>(
                 <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>
              <img src={item.thumbnail} alt="" style={{maxHeight:"10rem"}}/>
            </td>
            <td>$ {item.price}</td>
            <td>
                <button className='btn btn-sm' onClick={()=>{dispatch(incrementCart(item.id))}}>+</button>
                <span className='p-2'>{item.quantity}</span>
                <button className='btn btn-sm' onClick={()=>{dispatch(decrementCart(item.id))}}>-</button>
              </td>
            <td>$ {item.price*item.quantity}</td>
            <td><button className='btn' onClick={()=>{dispatch(removeFromCart(item.id))}} ><i className="fa-solid fa-trash fa-2xl"></i></button></td>
          </tr>

              ))
            }
            </>
            :
            <h2 className='text text-center'>No items added to Cart</h2>
          }
         
        </tbody>

      </table>

    </div >
    <div className='col-3 ' >
      <div className='m-3 bg-warning rounded p-2 mt-5'>
        <h5>Total Product : <span className='fw-border'>{cart.length}</span></h5>
        <h5>Total Amount : <span className='fw-border'>{Math.ceil(cart.reduce((preve,item)=>preve+(item.price*item.quantity),0))}</span></h5>
        <div className='d-grid'>
          <button className='btn btn-success'>Checkout</button>
        </div>
      </div>

    </div>

  </div>

</div>
</> 
 )
}

export default Cart