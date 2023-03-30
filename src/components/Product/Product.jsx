import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;

    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <h4>Price: ${price}</h4>
                <p><small>Manufacture:{seller}</small></p>
                <p><small>Ratting: {ratings} Stars </small></p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'><FontAwesomeIcon icon={faCartShopping} /> Add to cart</button>
        </div>
    );
};

export default Product;