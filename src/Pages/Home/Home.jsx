import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Style from './Home.module.css'
import { slider } from "../../db";

function Home() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <Slider {...settings}>
                {
                    slider.map((e)=>{
                        return <img src={e} className={Style.images}/>
                    })
                }
            </Slider>
        </>
    )
}

export default Home