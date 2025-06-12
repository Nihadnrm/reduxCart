import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromWishlist } from './redux/slices/wishlistSlice'
import { addtoToCart } from './redux/slices/cartSlice'

function Wishlist() {
    const state = useSelector((state) => state.wishlistSlice)
    const { wishlist } = state
    console.log(wishlist);

const dispatch=useDispatch()

const addToCartHandler=(product)=>{
dispatch(addtoToCart(product))
dispatch(removeFromWishlist(product.id))
}
    return (
        <div className='container-fluid'>
            <h2>Wishlist</h2>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                      {
                        wishlist.length>0 ?
                        <>
                        {
                            wishlist.map((item)=>(
                                <div className="col mb-5">
                            <div className="card h-100">
                                <Link to={'/detail'}>
                                    <img className="card-img-top" src={item.thumbnail} alt="..." />
                                </Link>
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">{item.title}</h5>
                                       ${item.price}
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">

                                        <div className='d-flex justify-content-between'>
                                                <button className='btn btn-sm' onClick={()=>addToCartHandler(item)} >
                                                <i className="fa-solid fa-cart-plus fa-2xl"></i>
                                                </button>
                                                 <button className='btn btn-sm' onClick={()=>{dispatch(removeFromWishlist(item.id))}}>
                                                <i className="fa-solid fa-heart-circle-xmark fa-2xl" style={{ color: "red" }}></i>
                                                </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            ))
                        }
                        </>
                        :
                        <h2 className='texr-center'>No item added</h2>
                      }
                      
                      
                      
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Wishlist