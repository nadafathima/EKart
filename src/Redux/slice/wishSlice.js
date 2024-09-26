import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:{
        items:[]
    },
    reducers:{
        addToWishlist(state,action){
            // if(state.items)
            const existing=state.items.find(item=>item.id==action.payload.id)
            if(existing){
                toast.warning("Product already added to wishlist")
            }
            else{
                state.items.push(action.payload)
                toast.success("Item Added to Wishlist!!!")
            }
       
        },
        removeFromWishlist(state,action){
            state.items=state.items.filter(item=>item.id!=action.payload)
            // toast.success("Product Removed from Wishlist")
        }
    }
})


export default wishlistSlice.reducer
export const {addToWishlist,removeFromWishlist}=wishlistSlice.actions