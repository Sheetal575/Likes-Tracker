import React from "react";
import './navbar.css'
export default function Nav() {
    return(
        <nav className="p-3">
            <div className="row ">
                <div className="col-lg-12 profile-picture-container ">
                    <img className="profile-picture" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
                </div>
            </div>
        </nav>
    )
}

