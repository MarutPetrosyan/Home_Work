import React from "react";
import Style from './icon.module.css'
import Carts from "../../Components/Carts/Carts";

function Icon({cart}) {
    return(
        <div className={Style.icon}>
            <div className={Style.main}>
            {
                cart.map((c)=>{
                    return <Carts cart={c} key={c.id} addBtnsClicks={addBtnsClicks}/>
                })
            }
            </div>
        </div>
    )
}

export default Icon