import React from "react";

function Carts({ cart }) {
    return (
        <>
            <div>
                <h3>{cart.title}</h3>
                <img src={cart.image} />
            </div>
        </>
    )
}

export default Carts