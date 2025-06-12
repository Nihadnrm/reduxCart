import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='container-fluid bg-dark text-light p-3'>
      <div className='row'>
        <div className='col'>
          <h2>ReduxCart</h2>
          <p style={{textAlign:"justify"}}>Lorem ipsum dolor,Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempore alias vel, modi quod excepturi nobis reiciendis nesciunt obcaecati minus impedit accusamus explicabo aperiam ducimus! Non provident fugit similique quod. sit amet consectetur adipisicing elit. Dolores excepturi amet necessitatibus at culpa dolore eius, architecto provident numquam dignissimos reprehenderit impedit animi qui libero voluptatem similique dolorum voluptas adipisci.</p>

        </div>
        <div className='col '>
          <h2 className='text-center' >Links</h2>
          <div className='d-flex flex-column justify-content-center align-items-center h-50'>
         <Link className='link-light' style={{textDecoration:"none"}} to={'/'}>Landing</Link>
         <Link className='link-light' style={{textDecoration:"none"}} to={'/wish'}>Wishlist</Link>
         <Link className='link-light'  style={{textDecoration:"none"}} to={'/cart'}>Cart</Link>
         </div>
        </div>
        <div className='col'>
          <h2 className='text-dark'>Feedback </h2>
          <textarea name="" id="" className='form-control my-3 bg-light'></textarea>
          <button className='btn btn-success'>send</button>
        </div>

      </div>

    </div>
    </>
  )
}

export default Footer