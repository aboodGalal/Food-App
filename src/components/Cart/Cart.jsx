import React, { Fragment, useContext, useState } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../../store/CartContext'
import CartItem from './CartItem'
import CheckOut from './CheckOut'

function Cart(props) {
    // const meals = [{id:'m1', name: 'sushi', price: 12.55}]
    const cartCtx = useContext(CartContext)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [isSubmited, setIsSubmited] = useState()

    const [isChcked, setIsChecked] = useState()

    const totalAmount = `$${Math.abs(cartCtx.totalAmount).toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const cartItemAddHandeler = item => {
        cartCtx.addItem({ ...item, amount: 1 })
    }
    const cartItemRemovedHandeler = id => {
        cartCtx.removeItem(id)
    }

    const submitOrderHandeler = (userData) => {
        const fetchData = async () =>{
            setLoading(true)
            const response = await fetch("https://food-app-e39dc-default-rtdb.firebaseio.com/orders.json", {
                method: "POST",
                body: JSON.stringify({
                    user: userData,
                    orderdItems: cartCtx.items,
                })
            })

            if(!response.ok){
                throw new Error("Failed to submit")
            }

            setLoading(false)
            setIsSubmited(true)
            cartCtx.clearCart()
        }
        fetchData().catch((error) => {
            setLoading(false)
            setError(error.message)
        })
    }

    // const uniqueItems = cartCtx.items.filter(
    //     (item, index, self) => self.findIndex((i) => i.id === item.id) === index
    //   );
    return (
        <Modal>
            {loading && <h2>Sending order data...</h2>}
            {error &&
                <div className={`flex flex-col gap-4`}>
                    <h2>{error}</h2>
                    <button onClick={() => props.toggleCartShown()} className={`text-[#8a2b06] bg-white 
                        hover:text-white hover:bg-[#8a2b06] md:px-6 px-3 py-2 rounded-3xl border-[1px] 
                        border-[#8a2b06]`}>close</button>
                </div>
            }
            {!loading && isSubmited &&
                <div className={`flex flex-col gap-4`}>
                    <h2>Successfylly submited</h2>
                    <button onClick={() => props.toggleCartShown()} className={`text-[#8a2b06] bg-white 
                        hover:text-white hover:bg-[#8a2b06] md:px-6 px-3 py-2 rounded-3xl border-[1px] 
                        border-[#8a2b06]`}>close</button>
                </div>
            }
            {!loading && !isSubmited &&
                <Fragment>
                    <ul className={`self-start w-full`}>
                        {cartCtx.items.map(item => <CartItem key={item.id} item={item}
                            cartItemAddHandeler={cartItemAddHandeler.bind(null, item)}
                            cartItemRemovedHandeler={cartItemRemovedHandeler.bind(null, item.id)} />)}
                    </ul>
                    <div className={`w-full flex justify-between items-center font-bold text-[18px] md:text-[25px]`}>
                        <span>Total</span>
                        <span>{totalAmount}</span>
                    </div>
                    {isChcked && <CheckOut toggleCartShown={props.toggleCartShown} submitOrderHandeler={submitOrderHandeler} />}
                    {!isChcked &&
                        <div className={`flex gap-3 md:self-end`}>
                            <button onClick={() => props.toggleCartShown()} className={`text-[#8a2b06] bg-white 
                            hover:text-white hover:bg-[#8a2b06] md:px-6 px-3 py-2 rounded-3xl border-[1px] border-[#8a2b06]`}>close</button>
                            {hasItems && <button className={`text-white bg-[#8a2b06] md:px-6 px-3 py-2 rounded-3xl`}
                                onClick={() => setIsChecked(true)}>order</button>}
                        </div>
                    }
                </Fragment>
            }
        </Modal>
    )
}

export default Cart