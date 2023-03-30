import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <h4>Price: ${price}</h4>
                <p><small>Manufacture:{seller}</small></p>
                <p><small>Ratting: {ratings} Stars </small></p>
            </div>
            
                <button className='btn-cart'>Add to cart</button>
            
        </div>
    );
};

export default Product;