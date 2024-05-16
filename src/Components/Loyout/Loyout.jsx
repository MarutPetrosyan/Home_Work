import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";

function Loyout() {
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
}

export default Loyout