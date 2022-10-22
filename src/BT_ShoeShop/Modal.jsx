import React from "react";

const Modal = ({ isOpen, onClose, chooseProducts, changeQuantity }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      {/* Modal */}
      <div
        className="modal fade show d-block"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg ">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Giỏ Hàng
              </h1>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Hình Ảnh</th>
                    <th>Đơn giá</th>
                    <th>Số lượng</th>
                    <th>Tổng tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {chooseProducts.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>
                        <img
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        />
                      </td>
                      <td>{item.price}$</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => changeQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        {item.quantity}
                        <button
                          className="btn btn-success"
                          onClick={() => changeQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </td>
                      <td>{item.price * item.quantity}$</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* overlay */}
      <div className="modal-backdrop fade show" />
    </>
  );
};

export default Modal;
