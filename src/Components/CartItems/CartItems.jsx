import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext"; // Ensure this is the correct path
import { RxCross2 } from "react-icons/rx";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  const formatPrice = (price) => parseFloat(price).toFixed(2);

  return (
    <div className="cartitems content">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image_1} alt="" className="carticon-product-image" />
                <p>{e.name}</p>
                <p>RM{formatPrice(e.new_price)}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>RM{formatPrice(e.new_price * cartItems[e.id])}</p>
                <RxCross2
                  className="cartitems-remove-icon"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>RM{formatPrice(getTotalCartAmount())}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Total</p>
                    <p>RM{formatPrice(getTotalCartAmount())}</p>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have promo code, enter it here</p>
            <div className="cartitems-promobox">
                <input type='text' placeholder='PROMO CODE' className="promo-input"/>
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
