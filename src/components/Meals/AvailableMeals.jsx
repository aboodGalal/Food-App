import React from 'react'
import MealItem from './MealItem'
import "./AvailableMeals.css"

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzal',
        description: 'A german specialty',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue burger',
        description: 'American, Raw, Meaty',
        price: 16.99,
    },
    {
        id: 'm4',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
]

function AvailableMeals() {
  return (
    <section className={`flex justify-center items-center pt-40 bg-gray-800 pb-10`}>
        <ul className={`flex flex-col mx-auto w-[70%] bg-white rounded-xl px-3 py-2 up`}>
            {DUMMY_MEALS.map(meal => <MealItem key={meal.id} meal={meal}/>)}
        </ul>
    </section>
  )
}

export default AvailableMeals