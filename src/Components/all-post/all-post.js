import React , {useState,useEffect} from "react";
import './all-post.css';
import * as BsChat from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as FiIcons from 'react-icons/fi';
import { Link } from 'react-router-dom'
import { PostData } from "../../Data/postdata";

function Increment(v){
    
    const [like , setLikes] = useState(v);
    

    return(
        <>
        <AiIcons.AiOutlineHeart className="icon" onClick={() => setLikes(like + 1)} /><span>{like}</span>
        </>
    )
}
export default function AllPost(){
    // const [items, setItems] = useState([]);
   
    return(
        <div className="p-2 all-post-container ">
            <br />
            {
                PostData.map((val,index)=>{
                    return(
                        <div className=" post-container" key={index}>
                        <div className="row p-2">
                            <div className="col-lg-2">
                                <img className="profile-picture-bar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
                            </div>
                            <div className="col-lg-10 row align-self-center">
                                <div>
                                    <h6><b>{val.name}</b></h6>
                                </div>
                                <div className="hashtag">
                                    {val.hashtag}
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <img className="post-picture" src={val.img} alt="" />
                        </div>
                        <div className="row p-2 ml-2 align-items-center">
                            <div className="col-3 align-self-center ">
                                <BsChat.BsChat className="icon" /><span>70</span>
                            </div>  
                            <div className="col-3 align-self-center ">
                            {Increment(val.likes)}
                            </div>  
                            <div className="col-3 align-self-center ">
                                <BiIcons.BiRepost className="icon" /><span>70</span>
                            </div> 
                            <div className="col-3 align-self-center ">
                                <FiIcons.FiShare className="icon" />
                            </div> 
                        </div>
                    </div>
                    )
                })
            }
           
  
            

            
        </div>
    )
}