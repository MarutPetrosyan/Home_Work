import React, { useState } from "react";
import Style from "./Carts.module.css"

function Carts({ cart, addBtnsClicks }) {

    const [cartCount, setCartCount] = useState(cart.count)

    const minus = () => {
        if (cartCount > 1) {
            setCartCount(cartCount - 1)
        }
        addBtnsClicks(cartCount)
    }

    const plus = () => {
        setCartCount(cartCount + 1)
        addBtnsClicks(cartCount)
    }

    return (
        <div className="main">
            <div className={Style.left}>
                <h3>{cart.title}</h3>
                <img src={cart.image} />
            </div>
            <div className={Style.right}>
                <span>count : <b>{cart.count}</b></span>
                <button className={Style.btn}>-</button>
                <span>{cart.initprice}</span>
                <button className={Style.btn}>+</button>
            </div>
        </div>
    )
}

export default Carts