import React, { useRef, useState } from 'react'
import Input from '../UI/Input'

function MealItemForm(props) {
  const amountRef = useRef()
  const [amountIsValid, setAmountIsValid] = useState(true)

  const submitHandeler = event =>{
    event.preventDefault()

    const enteredAmount = amountRef.current.value
    const enteredAmountNumber = +enteredAmount

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setAmountIsValid(false)
      return;
    }

    props.AddToCart(enteredAmountNumber)
  }
  return (
    <form className={`flex flex-col gap-2 `} onSubmit={submitHandeler}>
      <Input label="Amount: "
      ref={amountRef} 
      input={{
        id:"amount",
        type:'number',
        min:'1',
        max:'5',
        step:"1",
        defaultValue: '1',
      }}/>
      <button className={`px-2 py-1 text-white bg-[#8a2b06] rounded-xl`}>+ Add</button>
      {!amountIsValid && <p>Please enter a vlue between 1 and 5</p>}
    </form>
  )
}

export default MealItemForm