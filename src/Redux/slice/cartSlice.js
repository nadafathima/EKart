import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartlistSlice = createSlice({
        name:"cart",
        initialState:{
            cart:[]
        },
        reducers:{
            addToCart(state,action){
                const existing=state.cart.find(item=>item.id==action.payload.id)
                if(existing){
                    existing.quantity+=1
                    state.cart=state.cart.filter(item=>item.id!=action.payload.id)
                    state.cart.push(existing)
                    toast.success("Item Quantity Increased")

                }
                else{
                    const product=action.payload
                    product.quantity=1
                    state.cart.push(product)
                    toast.success("Item Added to Cart!!!")
                }
            },
            removeFromCart(state,action){
                state.cart=state.cart.filter(item=>item.id!=action.payload)
                toast.success("Item Removed From Cart")
            },
            increaseQuantity(state,action){
                const existing=state.cart.find(item=>item.id==action.payload)
                existing.quantity++
                // state.cart=state.cart.filter(item=>item.id!=action.payload)
                // state.cart.push(existing)

            },
            decreaseQuantity(state,action){
                const existing=state.cart.find(item=>item.id==action.payload)
                if(existing.quantity==1){
                    state.cart=state.cart.filter(item=>item.id!=action.payload)
                }
                else{
                    existing.quantity--
                }

            },
            checkout(state,action){
                state.cart=[]
                toast.success("Cart CheckedOut!!")
            }
    
        }    
    
})


export default cartlistSlice.reducer
export const {addToCart,removeFromCart,increaseQuantity,decreaseQuantity,checkout}=cartlistSlice.actions







