import React from 'react'

function MealsSummary() {
  return (
    <div className={`w-[60%] md:w-[50%] h-fit mx-auto absolute -bottom-1/4 left-1/2 -translate-x-1/2 z-20 
    flex justify-center flex-col items-center text-center gap-5 px-4 py-4 text-white
     bg-gray-800 rounded-lg shadow-lg shadow-black`}>
        <h1 className={` font-bold text-[15px] md:text-[30px]`}>Delicions Food, Deliverd To You</h1>
        <p className={`text-[12px] md:text-[15px]`}>
            Choose your favourite meal from our broud selection from available meals and engjoy a delicious
            lunch or dinner at home.
        </p>
        <p className={`text-[12px] md:text-[15px]`}>
            All our meals are cooked with high-quality ingredients, just-in-time and of course by
             experienced chefs!
        </p>
    </div>
  )
}

export default MealsSummary