import "./Nav.css";
import { CiLogin, CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";

import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Nav = ({ searchBtn }) => {
  const [search, setSearch] = useState();
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  let productsCart = useSelector((state) => state.cart.products);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 0) {
        document.querySelector(".header").style =
          "box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;  ";
      } else {
        document.querySelector(".header").style = "box-shadow: none";
      }
    };
  }, []);

 
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/" className="logo">
            <MdOutlineLocalShipping className="logo-icon" />
            <h2>Ziad Shop</h2>
          </Link>
        </div>
        <div className="mid-header">
          <input
            type="text"
            placeholder="Search Your Product"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>
            <AiOutlineSearch
              className="search-icon"
              onClick={() => searchBtn(search)}
            />
          </button>
        </div>
        <div className="right-header">
          {isAuthenticated && (
            <Link to="/" className="user-flex">
              <img className="profile-img" src={user.picture} alt="" />
              <p>Hello {user.name}</p>
            </Link>
          )}
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <AiOutlineShopping className="r-icon shi" />
            {productsCart.length > 0 ? (
              <span className="badge">{productsCart.length}</span>
            ) : (
              ""
            )}
          </Link>

          <div className="auth">
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
                <CiLogout className="auth-icon" />
              </button>
            ) : (
              <button onClick={() => loginWithRedirect()}>
                Login <CiLogin className="auth-icon" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
