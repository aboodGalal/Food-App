import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../../store/CartContext'
import CartItem from './CartItem'

function Cart(props) {
    // const meals = [{id:'m1', name: 'sushi', price: 12.55}]
    const cartCtx = useContext(CartContext)

    const totalAmount = `$${Math.abs(cartCtx.totalAmount).toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const cartItemAddHandeler = item => {
        cartCtx.addItem({...item, amount: 1})
    }
    const cartItemRemovedHandeler = id => {
        cartCtx.removeItem(id)
    }

    // const uniqueItems = cartCtx.items.filter(
    //     (item, index, self) => self.findIndex((i) => i.id === item.id) === index
    //   );
  return (
    <Modal>
        <ul className={`self-start w-full max-h-[300px] overflow-y-auto`}>
            {cartCtx.items.map(item => <CartItem key={item.id} item={item} 
            cartItemAddHandeler={cartItemAddHandeler.bind(null, item)}
            cartItemRemovedHandeler={cartItemRemovedHandeler.bind(null, item.id)}/>)}
        </ul>
        <div className={`w-full flex justify-between items-center font-bold text-[18px] md:text-[25px]`}>
            <span>Total</span>
            <span>{totalAmount}</span>
        </div>
        <div className={`flex gap-3 md:self-end`}>
            <button onClick={() => props.toggleCartShown()} className={`text-[#8a2b06] bg-white 
            hover:text-white hover:bg-[#8a2b06] md:px-6 px-3 py-2 rounded-3xl border-[1px] border-[#8a2b06]`}>close</button>         
            {hasItems && <button className={`text-white bg-[#8a2b06] md:px-6 px-3 py-2 rounded-3xl`}>order</button>}
        </div>
    </Modal>
  )
}

export default Cart