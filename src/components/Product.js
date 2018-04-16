import React, { Component } from "react";
import SideBar from "./SideBar";
import "./Product.css";
import Swiper from "react-id-swiper";
import style from "react-id-swiper/src/styles/css/swiper.css";
class Product extends Component {

  render() {
    const params = { slidesPerView: 1, spaceBetween: 30, loop: true, pagination: { el: ".swiper-pagination", clickable: true }, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, autoHeight: true };
    const {products} = this.props;
    return (
      <div className="product">
        <div id="sideBar_container">
          <SideBar products={products}/>
        </div>
        <div id="swiper_container">
          <Swiper {...params}>
            {this.props.products.map((r, index) => (
            <div>
              <img src={r.imagePath} alt={r.title} id="swiperImg" />
            </div>
            ))}
          </Swiper>
        </div>
      </div>
    );
  }
}

export default Product;

// background-position: center;
//   background-repeat: no-repeat;

// #D3D3D3 그레이
// #FFE4E1 핑크
// #FFFAF0 화이트