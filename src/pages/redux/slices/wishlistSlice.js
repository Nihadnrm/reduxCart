import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: []
  },
  reducers: {
    addwishlist(state, action) {
      const existing = state.wishlist.find(item => item.id === action.payload.id);
      if (existing) {
        alert("product already added to wishlist");
      } else {
        state.wishlist.push(action.payload);
        alert("product added to wishlist");
      }
    },
    removeFromWishlist(state, action) {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
      alert("product removed from wishlist");
      console.log(state.wishlist);
      
    }
  }
});

export const { addwishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
