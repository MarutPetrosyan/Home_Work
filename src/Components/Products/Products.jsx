import React, { useState } from "react";
import Style from './Products.module.css'

function Products({ product, setCart }) {
    const [textLenght, setTextLenght] = useState(20)

    const handleCart = (i) => {
        setCart((prev) => {
            return [...prev, i]
        })
    }
    return (
        <div className={Style.product}>
            <img src={product.image} />
            <h3>{product.title.length > textLenght ? `${product.title.slice(0, textLenght)}...` : product.title}</h3>
            <button
                onClick={() => handleCart(product)}
            >Add to card</button>
        </div>
    )

}

export default Products