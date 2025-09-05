import React from 'react'
import { useSelector } from 'react-redux'
import deletee from '../../assets/image/delete.svg'
import './wish.scss'
import { removeWish } from '../redux/product/WishListSlice'
import { useDispatch } from 'react-redux'

function WishCard({box}) {
const dispatch = useDispatch ()
  return (
    <div>
       <div>
                <div className="card">
                  <div className="board">
                    <img className="productImage" src={box.thumbnail} alt="" />
                    <div className="cardButton">
                      <div><img onClick={()=> dispatch(removeWish (box.id))} src={deletee} alt="" /></div>
                    </div>
                    <div className="discount">
                      <p>-35%</p>
                    </div>
                    <button className="cartBtn">Add To Cart</button>
                  </div>
            
                  <div className="info">
                    <h1>The north coat</h1>
                    <div className="prices">
                      <p className="actualPrice">$120</p> 
                      <p className="oldPrice">$160</p>
                    </div>
                    <div className="rate">
                      <p>(88)</p>
                    </div>
                  </div>
                </div>
          </div>
    </div>
  )
}

export default WishCard
