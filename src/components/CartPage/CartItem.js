import React from "react";
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown
} from "react-icons/fa";

export default function CartItem({
  cartItem,
  increment,
  decrement,
  removeItem
}) {
  const { id, title, price, count, total, image } = cartItem;
  return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
      {/* */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <img src={image} className="img-fluid" width="60" alt="product image" />
      </div>
      {/* */}
      {/* */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">product: </span>
        {title}
      </div>
      {/* */}
      {/* */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">price: $</span>
        {price}
      </div>
      {/* */}
      {/* */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div className="">
            <FaChevronCircleDown
              className="text-primary cart-icon"
              onClick={() => decrement(id)}
              style={{ cursor: "pointer" }}
            />
            <span className="text-title text-muted mx-3">{count}</span>
            <FaChevronCircleUp
              className="text-primary cart-icon"
              onClick={() => increment(id)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      {/* */}
      {/* */}
      <div className="col-10 mx-auto col-lg-2">
      <FaTrash className="text-danger cart-icon" onClick={()=>removeItem(id)} style={{cursor:'pointer'}}/>
      </div>
      {/* */}
      {/* */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
      <span className="d-lg-none">total: $</span>
        {total}
      </div>
      {/* */}
    </div>
  );
}
