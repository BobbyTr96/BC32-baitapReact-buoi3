import React from "react";

const ProductDetail = ({ product }) => {
  // nếu product ko có giá trị (null) thì ko cần render ra giao diện
  if (!product) return null;

  return (
    <div className="row mt-5">
      <div className="col-md-4">
        <h3 className="text-center">{product.name}</h3>
        <img src={product.image} alt={product.name} width="98%" height={400} />
      </div>
      <div className="col-md-8">
        <h3>Thông tin sản phẩm</h3>
        <table className="table">
          <tbody>
            <tr>
              <td>Tên sản phẩm</td>
              <td>{product.name}</td>
            </tr>
            <tr>
              <td>Thương hiệu</td>
              <td>{product.alias}</td>
            </tr>
            <tr>
              <td>Đơn giá</td>
              <td>{product.price}$</td>
            </tr>
            <tr>
              <td>Mô tả</td>
              <td>{product.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetail;
