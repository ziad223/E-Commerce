import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../Product/Product.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/slices/cartSlice';

const JummyDetails = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);

  let dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <div className='product'>
    <img src={product.thumbnail} alt="" />
    <div className="product-details">
    <h2>{product.category}</h2>
      <h4>{product.title}</h4>
      <h3>Price : {product.price}$</h3>
      <button onClick={() => dispatch(addItem(product))}>Add To Cart</button>
    </div>
    </div>
  )
}

export default JummyDetails
