import React, { Fragment } from 'react'
import './Home.css'
import FoodImg from '../../assets/table-full-food-including-plate-food-plate-food_188544-25935.avif'
import MealsSummary from '../Meals/MealsSummary'

function Home() {
  return (
    <Fragment>
        <div className={`relative h-[50vh]`}>
            <div className={`absolute w-full top-0 left-0 h-full img overflow-hidden`}>
              <img className={`w-full h-full`} src={FoodImg} alt="" />
            </div>
            <MealsSummary />
        </div>
    </Fragment>
  )
}

export default Home