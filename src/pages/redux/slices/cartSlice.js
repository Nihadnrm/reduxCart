import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        addtoToCart(state,action){
            const existing=state.cart.find((item)=>item.id==action.payload.id)
            if (existing){
                state.cart=state.cart.filter((item)=>item.id !=existing.id)
                existing.quantity+=1
                state.cart.push(existing)
                alert("product already exist,quantity updated !!")
            }
            else{
                const newItem={...action.payload,quantity:1}
                state.cart.push(newItem)
                alert("product added to cart")
            }
        },
        removeFromCart(state,action){
            state.cart=state.cart.filter((item)=>item.id!=action.payload)
            alert("product removed from cart")

        },
        incrementCart(state,action){
            const existing=state.cart.find((item)=>item.id==action.payload)
            if(existing){
                existing.quantity+=1
            }

        },
        decrementCart(state,action){
            const existing=state.cart.find((item)=>item.id==action.payload)
            if(existing){
                if(existing.quantity==1){
                 state.cart=state.cart.filter((item)=>item.id!=action.payload)
                 alert("product removed from cart")
                 }
                 else{
                  existing.quantity-=1


                 }
            }
        }

    }
})


export const{addtoToCart,removeFromCart,incrementCart,decrementCart}=cartSlice.actions
export default cartSlice.reducer