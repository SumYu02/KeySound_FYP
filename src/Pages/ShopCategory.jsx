import React, { useContext, useRef } from "react";
import "./CSS/ShopCategory.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  // Create a reference to the target section
  const indexSortRef = useRef(null);

  // Function to scroll to the target section
  const scrollToIndexSort = () => {
    if (indexSortRef.current) {
      indexSortRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="shop-category">
      <div className="shopcategory-banner-container">
        <img className="shopcategory-banner" src={props.banner} alt="" />
        <div className="scroll-down-icon" onClick={scrollToIndexSort}>
          <IoMdArrowDropdown />
        </div>
      </div>

      <div className="shopcategory-indexSort" ref={indexSortRef}>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <IoMdArrowDropdown />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image_1}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
