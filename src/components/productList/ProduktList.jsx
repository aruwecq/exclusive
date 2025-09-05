import React from "react";
import "./List.scss";
import Card from "../card/Card";
function ProduktList({ data }) {
  return (
    <div className="aaa">
      {data.map((item) => (
        <Card key={item.id} cart={item} />
      ))}
    </div>
  );
}

export default ProduktList;
