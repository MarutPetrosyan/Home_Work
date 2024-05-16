import React from "react";
import Products from "../../Components/Products/Products";
import Style from './Product.module.css'

function Product({product,setCart}) {
    return(
        <div className={Style.product}>
        {
            product.map((product)=>{
                return <Products key={product.id} product={product} setCart={setCart}/>
            })
        }
        </div>
    )
}

export default Product