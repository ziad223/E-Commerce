import { Link } from "react-router-dom";
import "./Home.css";
import img1 from "../../img/slider-img.png";
import axios from "axios";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SlEarphones } from "react-icons/sl";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slices/cartSlice";
import Jummy from "../jummy/jummy";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide1 from "./../../img/slide-1.jpg";
import slide2 from "./../../img/slide-2.webp";
import slide3 from ".//../../img/slide-3.webp";
import slide4 from ".//../../img/slide-4.jpg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Swal from "sweetalert2";
// import { withSwal } from 'react-sweetalert2';

const Home = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = await response.data;
    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const dispatch = useDispatch();

  const PrevArrow = (props) => (
    <button onClick={props.onClick} className="arrow prev">
      <BsChevronLeft />
    </button>
  );

  const NextArrow = (props) => (
    <button onClick={props.onClick} className="arrow next">
      <BsChevronRight />
    </button>
  );
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  // Swal.fire(
  //   'Good job!',
  //   'You clicked the button!',
  //   'success'
  // )
  //   function handleClick(){
  //     this.swal.fire({
  //         title: 'Example',
  //         text: 'Swal injected',
  //         icon: 'success',
  //     });
  // }


  return (
    <div className="home">
      <div className="top-banner">
        <div className="top-banner-details">
          <h2>
            The Best Note Book <br /> Collection 2023
          </h2>
          <Link to="/product" className="shop-link">
            Shop Now
          </Link>
        </div>
        <div className="top-banner-img">
          <img src={img1} alt="" />
        </div>
      </div>

      <div className="about">
        <div className="box">
          <CiDeliveryTruck className="box-icon" />
          <div>
            <h3>Free Shipping</h3>
            <p>Order Above </p>
          </div>
        </div>
        <div className="box">
          <BsCurrencyDollar className="box-icon" />
          <div>
            <h3>Return && Refund</h3>
            <p>Money Back Gaurently</p>
          </div>
        </div>
        <div className="box">
          <AiOutlineCloseCircle className="box-icon" />
          <div>
            <h3>Member Discount</h3>
            <p>On every Order</p>
          </div>
        </div>
        <div className="box">
          <SlEarphones className="box-icon" />
          <div>
            <h3>Customer Support</h3>
            <p>Every Time Call Support</p>
          </div>
        </div>
      </div>
      <div className="items">
        <h2> Products</h2>
        <div className="items-content">
          {products &&
            products.map((item) => {
              return (
                <div className="item" key={item.id}>
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.title} />
                  </Link>
                  <div className="item-details">
                    <p>{item.Cat}</p>
                    <h3>{item.title.slice(0, 10)}</h3>
                    <h3>{item.category}</h3>
                    <h4>Price : {item.price} $</h4>
                    <h4> Rate : {item.rating.rate}</h4>
                    <h4>count : {item.rating.count}</h4>
                    <button
                      className="g"
                      onClick={() =>dispatch(addItem(item))}
                    >
                      Add To Cart
                    </button>
                    <Link className="details" to={`/product/${item.id}`}>
                      <button className="g"> More Details</button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="slides">
        <Slider {...settings}>
          <img className="s" src={slide1} alt="" />
          <img className="s" src={slide2} alt="" />
          <img className="s" src={slide3} alt="" />
          <img className="s" src={slide4} alt="" />
        </Slider>
      </div>
      <Jummy />
    </div>
  );
};

export default Home;
