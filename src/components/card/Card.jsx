import React from "react";
import "./Card.scss";
import comp from "../../assets/image/comp.svg";
import icon1 from "../../assets/image/icon1.svg";
import icon2 from "../../assets/image/icon2.svg";
import { addWish } from "../redux/product/WishListSlice";
import { addDelee } from "../redux/delete/DeleteSlice"; 
import { useDispatch } from "react-redux";

function Card({ cart }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="board">
        <img className="productImage" src={cart.thumbnail} alt={cart.title} />

        <div className="cardButton">
          <div>
            <img onClick={() => dispatch(addWish(cart))} src={icon1} alt="add wish" />
          </div>

          <div>
            <img src={icon2} alt="icon" />
          </div>
        </div>

        <div className="discount">
          <p>-40%</p>
        </div>

        <button 
          className="cartBtn" 
          onClick={() => dispatch(addDelee(cart))}
        >
          Add To Cart
        </button>
      </div>

      <div className="info">
        <h1>{cart.title}</h1>
        <div className="prices">
          <p className="actualPrice">${cart.price}</p>
          <p className="oldPrice">${cart.oldPrice}</p>
        </div>
        <div className="rate">
          {/* <p>({cart.rating})</p> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
