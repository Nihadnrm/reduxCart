import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { search } from '../redux/slices/productSlice';

function Header() {
  const state=useSelector((state)=>state.wishlistSlice)
  const{wishlist}=state
   const state2=useSelector((state2)=>state2.cartSlice)
   const {cart}=state2

   const dispatch=useDispatch()

  return (
    <>
       <Navbar className="bg-body-tertiary">
        <Container>
     <Link to={"/"} style={{textDecoration:"none"}}>
          <Navbar.Brand href="">
           <img src="https://i.pinimg.com/564x/53/b0/98/53b098486fd6277da1963ccdb74c25c6.jpg" style={{height:"2rem"}} alt="" />
            {' '}
            ReduxCart
          </Navbar.Brand>
          <div>
            <input type="search" name="" id="" onChange={(e)=>{dispatch(search(e.target.value))}} placeholder='enter keyword to search' className='form-control border border-dark' />
          </div>
          </Link>
          <div className='d-flex justify-content-between w-25'>
            <Link className='btn btn-light border  ' to={"/wish"}><i class="fa-solid fa-heart fa-lg "></i> Wishlist <span className='badge bg-dark ms-2'>{wishlist.length}</span></Link>
            <Link className='btn btn-light' to={"/cart"}><i class="fa-solid fa-cart-shopping fa-lg"></i> Cart <span className='badge bg-dark ms-2'>{cart.length}</span> </Link>
          </div>
        </Container>

      </Navbar>
          </>
  )
}

export default Header