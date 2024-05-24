import React from 'react'
import HeaderCartButton from './HeaderCartButton'

function Header(props) {
  return (
    <header className={`fixed top-0 left-0 w-full h-[60px] px-[10%] flex justify-between z-30
     items-center shadow-md shadow-gray-700 bg-[#8a2b06] text-white`}>
        <h1 className={`font-bold text-[13px] md:text-[25px]`}>ReactMeals</h1>
        <HeaderCartButton toggleCartShown={props.toggleCartShown}/>
    </header>
  )
}

export default Header