import React, { Fragment, useContext, useEffect, useState } from 'react'
import CartContext from '../../store/CartContext'
import './HeaderCartButton.css'
// import shopIcon from '../../../public/fonts/icomoon.svg'


function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext)
  const { items } = cartCtx
  const [highlightedCart, setHightlightedCart] = useState(false)
  const itemsNumbersOfCart = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  useEffect(() => {
    if(items.length === 0){
      return;
    }
    setHightlightedCart(true)

    const timer = setTimeout(() =>{
      setHightlightedCart(false)
    }, 300)

    return () =>{
      clearTimeout(timer)
    }
  }, [items])
  return (
    <Fragment>
        <button onClick={() => props.toggleCartShown()} className={`bg-[#4d1601] 
        ${highlightedCart? 'bump' : ''} cursor-pointer border-0 px-6 py-1 flex justify-around items-center 
        text-bold text-inherit rounded-[25px] hover:bg-[#2c0d00] active:bg-[#2c0d00] gap-2`}>
            <span className={`icon-cart w-4 h-4 relative`}></span>
            <span>Your cart</span>
            <span className={`text-white px-4 py-1 rounded-2xl bg-[#b94517]`}>{itemsNumbersOfCart}</span>
        </button>
    </Fragment>
  )
}

export default HeaderCartButton