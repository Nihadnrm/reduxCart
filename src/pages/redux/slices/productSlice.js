import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProductThunk = createAsyncThunk("products/fetchProductThunk", async () => {
    const response = await axios.get("https://dummyjson.com/products")
    sessionStorage.setItem("apidata",JSON.stringify(response.data.products))
    return response
})


const productSlice = createSlice({
    name: "products",
    initialState: {
        product: [],
        loading: false,
        error: "",

        productDupe:[],
        productPerPage:10,
        currentPage:1
    },
    reducers: {
        search(state,action){
            state.product=state.productDupe.filter((item)=>item.title.toLowerCase().includes(action.payload.toLowerCase()))
        },
        previousPage(state){
            state.currentPage-=1
        },
        nextPage(state){
            state.currentPage+=1
        }

    

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductThunk.fulfilled, (state, action) => {
            state.product = action.payload.data.products
            state.productDupe = action.payload.data.products
            state.loading = false
            state.error = ""
        }),

            builder.addCase(fetchProductThunk.pending, (state, action) => {
                state.product = []
                state.loading = true
                state.error = ""
            })
        builder.addCase(fetchProductThunk.rejected, (state, action) => {
            state.product = []
            state.loading = false
            state.error = "Api call failed"
        })

    }

})


export const {search,previousPage,nextPage}=productSlice.actions
export default productSlice.reducer