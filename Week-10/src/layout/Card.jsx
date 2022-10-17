import React from "react";

function Card({ children }) {
  return (
    <div className="container mx-auto">
      <div className="card bg-base-100 shadow-xl w-1/2">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}

export default Card;
