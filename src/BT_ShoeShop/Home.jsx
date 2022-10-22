import React, { Component } from "react";
import data from "./data.json";
import Modal from "./Modal";
import ProductDetail from "./ProductDetail";
import ProductItem from "./ProductItem";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: data,
      productSelected: null, // state quản lí show chi tiết sản phẩm ng dùng chọn
      isOpen: false, // state quản lí trạng thái ẩn hiện modal
      chooseProducts: [], // arr state dùng để lưu trữ danh sách trong giỏ hàng
    };
  }

  handleSelected = (product) => {
    this.setState({ productSelected: product });
  };

  //method thay đổi trạng thái ẩn hiện của modal bằng việc thay đổi giá trị state isOpen, nếu false là ẩn , nếu true là hiện
  handleToggleModal = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  handleChoose = (product) => {
    // B1 : kiểm tra sp đã tồn tại trong giỏ hàng chưa , bằng hàm findIndex
    const index = this.state.chooseProducts.findIndex(
      (item) => item.id === product.id
    );

    // nếu chưa tồn tại
    if (index === -1) {
      this.setState((state) => ({
        chooseProducts: [...state.chooseProducts, { ...product, quantity: 1 }],
      }));
    } else {
      // trường hợp đã tồn tại thì set quanlity + 1
      const newCart = [...this.state.chooseProducts];
      newCart[index].quantity += 1;
      this.setState((state) => ({ chooseProducts: newCart }));
    }
  };

  //productId = id của sản phẩm muốn thay đổi giá trị
  // quantity = 1 / -1 = tăng / giảm quantity
  handleQuantityChange = (productId, num) => {
    const index = this.state.chooseProducts.findIndex(
      (item) => item.id === productId
    );
    const newCarts = [...this.state.chooseProducts];
    if (newCarts[index].quantity === 1 && num === -1) {
      //   this.setState((state) => ({
      //     chooseProducts: newCarts.filter((item) => item.id !== productId),
      //   }));
      newCarts.splice(index, 1);
      this.setState({ chooseProducts: newCarts });
    } else {
      newCarts[index].quantity += num;
      this.setState((state) => ({ chooseProducts: newCarts }));
    }
  };

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-between">
          <h1>Shoe Shop</h1>
          <button className="btn btn-primary" onClick={this.handleToggleModal}>
            Cart
          </button>
        </div>
        <div className="row">
          {this.state.products.map((item) => (
            <ProductItem
              product={item}
              key={item.id}
              onClick={this.handleChoose}
              selected={this.handleSelected}
            />
          ))}
        </div>
        <ProductDetail product={this.state.productSelected} />
        <Modal
          isOpen={this.state.isOpen}
          onClose={this.handleToggleModal}
          chooseProducts={this.state.chooseProducts}
          changeQuantity={this.handleQuantityChange}
        />
      </div>
    );
  }
}
