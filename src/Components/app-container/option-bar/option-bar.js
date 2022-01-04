import React from "react";
import "./option-bar.css"
import * as MdIcons from 'react-icons/md';
import {Link} from 'react-router-dom'

export default function OptionBar(){
    
    return(
        <div className=" option-bar-container row p-3">
            <div className="col-lg-12 row justify-content-between">
                <div className="col-8 row align-self-center">
                    <div className="col-4">
                        <img className="profile-picture-bar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
                    </div>
                    <div className="col-8 align-self-center">
                        <h6>Sheetal Dadhich</h6>
                    </div>
                </div>
                <div className="col-1 profile-edit-button ">
                    <MdIcons.MdModeEditOutline  />
                </div>
            </div>
            <Link to="/create-your-post">
            <div className="col-lg-12 p-3 w-100 options mt-5 rounded-pill" >
                    <h5>Create Your Post</h5>
            </div>
            </Link>
            <Link to="/">
            <div className="col-lg-12 p-3 w-100 options rounded-pill">
               <h5>See your Post</h5>
            </div>
            </Link>
           
        </div>
    )
}