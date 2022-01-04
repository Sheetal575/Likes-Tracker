import React from "react";
import OptionBar from "./option-bar/option-bar";

import { Link , Navigate, Outlet } from "react-router-dom";
import './app-container.css'
export default function AppContainer(){
    return(
        <div className="row p-0 app-container">
            <div className="col-lg-5 ">
                <OptionBar />
            </div>
            <div className="col-lg-7 ">
                <Outlet />
            </div>
        </div>
    )
}