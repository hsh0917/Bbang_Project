import React, { Component } from "react";
import "./ModalCheckout.css";
import Checkout from "./Checkout";

class ModalCheckout extends Component {
  render() {
    return (
      <div className="ModalBackground">
        <div className={this.props.CheckoutOpen ? "overlay open" : "overlay"}>
          <div
            className={
              this.props.CheckoutOpen ? "overlay-header open" : "overlay-header"
            }
          >
            <a className="ml-5 pl-5" id="top-logo" href="">
              ミルク Miruku
            </a>
            <button className="closebtn" onClick={this.props.handleModal}>
              &times;
            </button>
          </div>

          <div
            className={
              this.props.CheckoutOpen
                ? "overlay-content open"
                : "overlay-content"
            }
          >
            <Checkout
              products={this.props.products}
              submitOrderForm={this.props.submitOrderForm}
              handleRemoveCart={this.props.handleRemoveCart}
            />
          </div>
          <div
            className={
              this.props.CheckoutOpen ? "overlay-footer open" : "overlay-footer"
            }
          >
            <a onClick={this.props.handleModal}>
              <i className="fa fa-angle-double-up" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalCheckout;
