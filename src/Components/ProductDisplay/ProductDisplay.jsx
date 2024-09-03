import React, { useContext } from "react";
import "./ProductDisplay.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const formattedOldPrice = parseFloat(product.old_price).toFixed(2);
  const formattedNewPrice = parseFloat(product.new_price).toFixed(2);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image_1} alt="" />
          <img src={product.image_2} alt="" />
          <img src={product.image_3} alt="" />
          <img src={product.image_4} alt="" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image_1}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStarHalfAlt className="star" />
          <p>(89)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            RM{formattedOldPrice}
          </div>
          <div className="productdisplay-right-price-new">
            RM{formattedNewPrice}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.product_desc}
        </div>
        <div className="productdisplay-right-color">
          {" "}
          {/*productdisplay-right-size*/}
          <h1>Select Color</h1>
          <div className="productdisplay-right-colors">
            {product.colors && product.colors.length > 0 ? (
              product.colors.map((color, index) => (
                <div key={index} className="color-swatch">
                  {color}
                </div>
              ))
            ) : (
              <p>No colors available</p>
            )}
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category:</span> Earphone
        </p>
        <p className="productdisplay-right-category">
          <span>Tag:</span> Lastest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
