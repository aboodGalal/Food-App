import React, { useEffect, useState } from 'react'
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
    const [meals, setMealas] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch("https://food-app-e39dc-default-rtdb.firebaseio.com/meals.json")

            if (!response.ok) {
                throw new Error("somthing went wrong!")
            }


            const responseData = await response.json()

            const loadedMeals = []

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                })
            }
            setMealas(loadedMeals)
            setLoading(false)
        }

        fetchMeals().catch((error) => {

            setLoading(false)
            setError(error.message)
        })


    }, [])

    return (
        <section className={`flex justify-center items-center pt-40 bg-gray-800 pb-10`}>
            {loading && <h1 className={`text-[30px] text-white font-bold text-center pb-20`}>Loading...</h1>}
            {error && <h1 className={`text-[30px] text-red-600 font-bold text-center pb-20`}>{error}</h1>}
            {meals.length > 0 && 
            <ul className={`flex flex-col mx-auto w-[70%] bg-white rounded-xl px-3 py-2 up`}>
                {meals.map(meal => <MealItem key={meal.id} meal={meal} />)}
            </ul>}

        </section>
    )
}

export default AvailableMeals