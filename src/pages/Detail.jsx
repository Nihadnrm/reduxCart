import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { addwishlist } from './redux/slices/wishlistSlice'
import { addtoToCart } from './redux/slices/cartSlice'
import { useDispatch } from 'react-redux'


function Detail() {
const[prod,setprod]=useState({})
// const{product}=useSelector((state)=>state.productSlice)

const {id}=useParams()
console.log((id));

useEffect(()=>{
    // const res=product.find((item)=>item.id==id)
    // setprod(res)
    getproduct()
},[])
console.log(prod);
 const getproduct=()=>{
    const pro=JSON.parse(sessionStorage.getItem('apidata'))
    const res=pro.find((item)=>item.id==id)
    setprod(res)
 }
 
 const dispatch=useDispatch()

  return (
   <>
    <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={prod?.thumbnail} alt="..." /></div>
                    <div className="col-md-6">
                        <div className="small mb-1">{prod?.id}</div>
                        <h1 className="display-5 fw-bolder">{prod?.title}</h1>
                        <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through">$45.00</span>
                            <span>{prod.price}</span>
                        </div>
                        <p className="lead">{prod.description}</p>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                 
                                  <div className='d-flex justify-content-between'>
                                  <button className='btn btn-sm' onClick={()=>{dispatch(addtoToCart(prod))}} >
                                  <i className="fa-solid fa-cart-plus fa-2xl"></i>
                                  </button>
                                    <button className='btn btn-sm' onClick={()=>{dispatch(addwishlist(prod))}}>
                                     <i className="fa-solid fa-heart-circle-plus fa-2xl" style={{color: "red"}}></i>
                                    </button>
                                  </div>
                                  </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
   </>
  )
}

export default Detail