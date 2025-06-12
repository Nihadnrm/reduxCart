import React from 'react'
import { Link } from 'react-router-dom'
import { fetchProductThunk } from './redux/slices/productSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addwishlist } from './redux/slices/wishlistSlice'
import { addtoToCart } from './redux/slices/cartSlice'
import { previousPage,nextPage } from './redux/slices/productSlice'




function Landing() {
    
const state=useSelector((state)=>state.productSlice)
const dispatch=useDispatch()
const{product,error,loading,productPerPage,currentPage,}=state
 
useEffect(()=>{dispatch(fetchProductThunk())},[])
const totalPage=Math.ceil(product.length/productPerPage)
const firstIndex=(currentPage-1)*10
const lastIndex=(currentPage*10)

const handlePrev=()=>{
    if(currentPage>1){
 dispatch(previousPage())
    }
}

const handleNext=()=>{
if(currentPage<totalPage){
dispatch(nextPage())
}
}

  return (
   <>
    <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   {
                     loading ?
                     <h2>loading....</h2>
                     :
                     error.length>0 ?
                     <h2 className='text-center'>{error}</h2>
                    :
                    product.slice(firstIndex,lastIndex).map((item)=>(
                        <div className="col mb-5">
                        <div className="card h-100">
                           <Link  to={`/detail/${item.id}`}>
                            <img className="card-img-top" src={item.thumbnail} alt="..." />
                            </Link>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{item.title.slice(0,10)}...</h5>
                                    ${item.price}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                 
                                  <div className='d-flex justify-content-between'>
                                   <button className='btn btn-sm' onClick={()=>{dispatch(addtoToCart(item))}} >
                                   <i className="fa-solid fa-cart-plus fa-2xl"></i>
                                   </button>
                                   <button className='btn btn-sm' onClick={()=>{dispatch(addwishlist(item))}}>
                                   <i className="fa-solid fa-heart-circle-plus fa-2xl" style={{color: "red"}}></i>
                                   </button>
                                  </div>
                                  </div>
                            </div>
                        </div>
                    </div> 
                    )
                    )
                     
                
                   }
                   
                   
                    
                </div>
            </div>
        </section>
        <div className='d-flex justify-content-center'>
            <button className='btn btn-sm' onClick={handlePrev}>
                <i className="fa-solid fa-backward"></i>
            </button>
            <span className=''>{currentPage}/{totalPage}</span>
            <button className=' btn btn-sm' onClick={handleNext}>
              <i className="fa-solid fa-forward"></i>  
            </button>
        </div>
   </>
  )
}

export default Landing