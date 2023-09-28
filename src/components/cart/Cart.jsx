import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { removeItem } from "../../store/slices/cartSlice";

const Cart = () => {
  let productsCart = useSelector((state) => state.cart.products);

  let dispatch = useDispatch();
  return (
    <div className="products-Cart">
      {productsCart &&
        productsCart.map((pro) => {
          return (
            <div className="product-Cart">
              <img src={pro.image ? pro.image : pro.thumbnail} alt="" />
              <div className="productsCart-details">
                <div>
                  <h2>{pro.title.slice(0 ,15)}</h2>
                  <p>Price : {pro.price} $</p>
                </div>
              </div>
              <button
                className="remove-item"
                onClick={() => dispatch(removeItem(pro.id))}
              >
                Remove From Cart
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
