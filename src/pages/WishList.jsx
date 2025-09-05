import React from "react";
import { useSelector } from "react-redux";
import "./WishList.scss";
import WishCard from "../components/WishCard/WishCard";
function WishList() {
  const { items } = useSelector((state) => state.favorite);

  console.log(items);

  return (
    <div className="wish-flex">
      {items?.map((item) => (
        <WishCard key={item.id} box={item} />
      ))}
    </div>
  );
}

export default WishList;
