import React from "react";
import { useSelector } from "react-redux";
import DeleteCard from "../components/deleteCard/DeleteCard";

function Cart() {
  const { items } = useSelector((state) => state.delete);

  return (
    <div className="wish-flex">
      {items?.length > 0 ? (
        items.map((product) => <DeleteCard key={product.id} product={product} />)
      ) : (
        <p>Your cart is empty </p>
      )}
    </div>
  );
}

export default Cart;
