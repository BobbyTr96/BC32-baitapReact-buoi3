import React from "react";

const ProductItem = ({ product, onClick, selected }) => {
  return (
    <div className="col-md-4 mt-5 ">
      <div className="card">
        <img className="card-img-top" src={product.image} alt={product.name} />
        <div className="card-body text-start">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text">{product.price}$</p>
          <p className="card-text">{product.description}</p>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary"
              onClick={() => selected(product)}
            >
              Detail
            </button>
            <button
              className="btn btn-success"
              onClick={() => onClick(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
