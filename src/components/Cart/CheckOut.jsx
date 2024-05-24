import React, { useRef, useState } from 'react'

const isEmpty = value => value.trim() === ''
const isFiveChars = value => value.trim().length === 5

function CheckOut(props) {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true,
    })

    const confirmHandler = (event)  =>{
        event.preventDefault()

        const enteredName = nameRef.current.value
        const enteredStreet = streetRef.current.value
        const enteredPostalCode = postalCodeRef.current.value
        const enteredCity = cityRef.current.value

        const enteredNameValid = !isEmpty(enteredName)
        const enteredStreetValid = !isEmpty(enteredStreet)
        const enteredPostalCodeValid = isFiveChars(enteredPostalCode)
        const enteredCityValid = !isEmpty(enteredCity)

        setFormInputsValidity({
            name: enteredNameValid,
            street: enteredStreetValid,
            postalCode: enteredPostalCodeValid,
            city: enteredCityValid,
        })

        const formIsValid = 
        enteredNameValid &&
        enteredStreetValid &&
        enteredPostalCodeValid &&
        enteredCityValid

        if(!formIsValid){
            return;
        }

        props.submitOrderHandeler({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
            city: enteredCity,
        })
    }

    const nameRef = useRef()
    const streetRef = useRef()
    const postalCodeRef = useRef()
    const cityRef = useRef()
  return <form className={`self-start w-full flex flex-col`} onSubmit={confirmHandler}>
    <div className={`flex flex-col gap-1 font-semibold w-full md:w-[50%]`}>
        <label className={`${formInputsValidity.name ? 'text-black':'text-red-400'}`} htmlFor="name">Yout name</label>
        <input className={`${formInputsValidity.name ? 'bg-white':'!bg-red-100'} border-[1px] border-gray-500 rounded-md`} type="text" id='name' ref={nameRef}/>
        {!formInputsValidity.name && <h2 className={`text-black text-[17px]`}>Please inter valid name!</h2>}
    </div>
    <div className={`flex flex-col gap-1 font-semibold w-full md:w-[50%]`}>
        <label className={`${formInputsValidity.street ? 'text-black':'text-red-400'}`} htmlFor="street">Street</label>
        <input className={`${formInputsValidity.street ? 'bg-white':'!bg-red-100'} border-[1px] border-gray-500 rounded-md`} type="text" id='street' ref={streetRef}/>
        {!formInputsValidity.street && <h2 className={`text-black text-[17px]`}>Please inter valid street!</h2>}
    </div>
    <div className={`flex flex-col gap-1 font-semibold w-full md:w-[50%]`}>
        <label className={`${formInputsValidity.postalCode ? 'text-black':'text-red-400'}`} htmlFor="postal">Postal code</label>
        <input className={`${formInputsValidity.postalCode ? 'bg-white':'!bg-red-100'} border-[1px] border-gray-500 rounded-md`} type="text" id='postal' ref={postalCodeRef}/>
        {!formInputsValidity.postalCode && <h2 className={`text-black text-[12px]`}>{`Please inter valid postal code (five characters long)`}</h2>}
    </div>
    <div className={`flex flex-col gap-1 font-semibold w-full md:w-[50%]`}>
        <label className={`${formInputsValidity.city ? 'text-black':'text-red-400'}`} htmlFor="city">City</label>
        <input className={`${formInputsValidity.city ? 'bg-white':'!bg-red-100'} border-[1px] border-gray-500 rounded-md`} type="text" id='city' ref={cityRef}/>
        {!formInputsValidity.city && <h2 className={`text-black text-[17px]`}>Please inter valid city!</h2>}
    </div>
    <div className={`flex gap-2 self-end mt-5`}>
        <button className={`text-[#8a2b06] bg-white 
            hover:text-white hover:bg-[#8a2b06] md:px-6 px-3 py-2 rounded-3xl border-[1px] border-[#8a2b06]`}
             type='button' onClick={() => props.toggleCartShown()}>Cancel</button>
        <button className={`text-white bg-[#8a2b06] md:px-6 px-3 py-2 rounded-3xl`}>Connfirm</button>
    </div>
  </form>
}

export default CheckOut