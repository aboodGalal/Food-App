import React, { useReducer } from 'react'
import CartContext from './CartContext'

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) =>{
    if(action.type === 'ADD'){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItems
        
        if(existingCartItem){            
            const updatedItem ={
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }else{
            updatedItems = state.items.concat(action.item)
        }

        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if(action.type === "REMOVE"){
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id)
        const existingCartItem = state.items[existingCartItemIndex]
        const updatedTotalAmount = state.totalAmount - existingCartItem.price
        let updatedItems

        if(existingCartItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id)
        }else{
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1}
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }

        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }
    if(action.type === "CLEAR"){
        return defaultCartState
    }

    return defaultCartState
}

function CartProvider(props) {
    const [cartstate, dispatchCartState] = useReducer(cartReducer, defaultCartState)

    const addItemToCart = (item) => {
        dispatchCartState({type: 'ADD', item: item})
    }
    const removeItemFromCart = (id) => {
        dispatchCartState({type: "REMOVE", id: id})
    }
    const clearCart = () =>{
        dispatchCartState({type: "CLEAR"})
    }

    const cartContext = {
        items: cartstate.items,
        totalAmount: cartstate.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
        clearCart: clearCart,
    }

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider