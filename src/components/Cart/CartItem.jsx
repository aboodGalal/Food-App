import React from 'react'

function CartItem(props) {

  return (
    <section className={`w-full h-fit flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center 
    border-b-2 border-b-[#8a2b06] pb-2 mb-2`}>
        <div className={`w-[30%] flex flex-col items-start`}>
            <span>{props.item.name}</span>
            <div className={`w-full flex gap-2 justify-between items-center`}>
                <span className={`text-[#8a2b06] font-semibold`}>{props.item.price}</span>
                <span className={`p-1 px-2 border-[1px] border-gray-300 rounded-md`}>{`x${props.item.amount}`}</span>
            </div>
        </div>
        <div className={`flex justify-center items-center gap-2`}>
            <button onClick={() => props.cartItemAddHandeler()}
            className={`px-3 py-1 rounded-md bg-white text-[#8a2b06] 
            hover:bg-[#8a2b06] hover:text-white border-[1px] border-[#8a2b06]`}>+</button>
            <button onClick={() => props.cartItemRemovedHandeler()} 
            className={`px-4 py-1 rounded-md bg-white text-[#8a2b06] 
            hover:bg-[#8a2b06] hover:text-white border-[1px] border-[#8a2b06]`}>-</button>
        </div>
    </section>
  )
}

export default CartItem