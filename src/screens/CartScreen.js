import React from 'react';
import Header from './../components/Header';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {addToCart,removeFromCart} from '../Redux/Actions/CartAction';

const CartScreen=() => {
  window.scrollTo(0,0);
  const {cartItems}=useSelector((state) => state.cart);
  console.log(cartItems)
  const dispatch=useDispatch();
  return (
    <>
      <Header />

      <div className="container">
        <div className="alert alert-info text-center mt-3">
          Total Cart Products
          <Link className="text-success mx-2" to="/cart">
            {cartItems.length}
          </Link>
        </div>
        {cartItems.map((item,index) => {
          return (
            <div key={index}>
              <div className="cart-item row">
                <div
                  onClick={() => dispatch(removeFromCart(item.product))}
                  className="remove-button d-flex justify-content-center align-items-center"
                >
                  <i className="fas fa-times"></i>
                </div>
                <div className="cart-image col-md-3">
                  <img src={`${item?.image?.slice(0,0+1)[0]}`} alt="nike" />
                </div>
                <div className="cart-text col-md-5 d-flex align-items-center">
                  <Link to="#">
                    <h4>{item.name}</h4>
                  </Link>
                </div>
                <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                  <h6>QUANTITY</h6>
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(addToCart(item.product,Number(e.target.value)))
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x+1} value={x+1}>
                        {x+1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
                  <h6>SUBTOTAL</h6>
                  <h4>${item.qty*item.price}</h4>
                </div>
              </div>
            </div>
          );
        })}
        {cartItems.length===0? (
          <div className="container">
            <div className=" alert alert-info text-center mt-3">
              Your cart is empty
              <Link
                className="btn btn-success mx-5 px-5 py-3"
                to="/"
                style={{
                  fontSize: '12px',
                }}
              >
                SHOPPING NOW
              </Link>
            </div>
          </div>
        ):(
          ''
        )}

        {/* End of cart items */}
        <div className="total">
          <span className="sub">total:</span>
          <span className="total-price">
            ${cartItems.reduce((sum,curr) => sum+curr.price*curr.qty,0)}
          </span>
        </div>
        <hr />
        <div className="cart-buttons d-flex align-items-center row">
          <Link to="/" className="col-md-6 ">
            <button>Continue To Shopping</button>
          </Link>
          <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
            <button>
              <Link to="/shipping" className="text-white">
                Checkout
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
