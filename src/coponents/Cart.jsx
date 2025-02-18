import React, { useState } from 'react';
function Cart() {
const [cart, setCart] = useState({
    item: "apple",
    quantity: 0,
});
function removeApple() {
    // 1. Use a callback to get previous value
    // 2. Spread out all the properties of previous state with ...prevCart
    // 3. Only change the property that you want
    setCart((prevCart) => ({
        ...prevCart,
        quantity: prevCart.quantity - 1
    }))
}
function addApple() {
    setCart((prevCart) => ({
        ...prevCart,
        quantity: prevCart.quantity + 1,
    }))
}
return (
    <div>
    <button onClick={addApple}>+</button>
    {cart.item}
    {cart.quantity}
    <button onClick={removeApple}>-</button>
</div>
)
}
export default Cart;