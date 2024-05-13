import React, { useContext } from 'react'
import MealItemForm from './MealItemForm'
import CartContext from '../../store/CartContext'

function MealItem(props) {
  const cartCtx = useContext(CartContext)
  const price = `${props.meal.price.toFixed(2)}`

  const AddToCart = amount =>{
    // console.log(amount)
    cartCtx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price
    })
  }
  return <li className={`w-full flex-col md:flex-row flex justify-between border-b-[1px] border-gray-200 p-2`}>
    <div className={`flex items-center md:items-start flex-col gap-1`}>
        <h3 className={`font-medium`}>{props.meal.name}</h3>
        <div>{props.meal.description}</div>
        <div className={`text-[#8a2b06] font-semibold`}>{price}</div>
    </div>
    <MealItemForm AddToCart={AddToCart}/>
  </li>
}

export default MealItem