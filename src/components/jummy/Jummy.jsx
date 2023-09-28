import { useEffect, useState } from 'react';
import './jummy.css';
import { Link } from 'react-router-dom';
import { addItem } from '../../store/slices/cartSlice';
import { useDispatch } from 'react-redux';

const Jummy = () => {
    const [jummy, setJummy] = useState([]);

    useEffect(() =>{
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data =>{
            setJummy(data.products)
        })

    } , [])

    const dispatch = useDispatch();


  return (
    <>
      <div className="items">
        <h2> jummy Products</h2>
        <div className="items-content">
          {jummy &&
            jummy.map((item) => {
              return (
                <div className="item" key={item.id}>
                  <Link to={`/product/${item.id}`}>
                    <img src={item.thumbnail} alt={item.title} />
                  </Link>
                  <div className="item-details">
                    <p>{item.Cat}</p>
                    <h3>{item.title.slice(0, 10)}</h3>
                    <h3>{item.category}</h3>
                    <h4>Price : {item.price} $</h4>
                    <h4> Rate : {item.rating}</h4>
                    <h4>Count : {item.stock}</h4>
                    <button
                      className="g"
                      onClick={() => dispatch(addItem(item))}
                    >
                      Add To Cart
                    </button>
                    <Link className="details" to={`/jummy/${item.id}`}>
                      <button className="g"> More Details</button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  )
}

export default Jummy
