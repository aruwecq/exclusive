import React from "react";
import { useDispatch } from "react-redux";
import { removeDelee } from "../redux/delete/DeleteSlice";
import deletee from "../../assets/image/delete.svg";
import "./DeleteCard.scss";

function DeleteCard({ product }) {
  const dispatch = useDispatch();
   return (
     <div>
     <div className="card wish">
                 <div className='board'>
                     <img className='bagImg' src={product.thumbnail} alt="" />
                     <div className="cardButton">
                         <div><img onClick={() => dispatch(removeDelee(product.id))} src={deletee} alt="" /></div>
                     </div>
                     <div className='discount'>
                         <p>-35%</p>
                     </div>
                     <button className='cartBtn'>Add To Cart</button>
                 </div>
 
                 <div className='info'>
                     <h1>Gucci duffle bag</h1>
                     <div className='prices'>
                         <p className='actualPrice'>$960</p>
                         <p className='oldPrice'>$1160</p>
                     </div>
                 </div>
             </div>
             </div>
      
    
   )
 }
 

 

export default DeleteCard


