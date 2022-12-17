import React from 'react'
import {useNavigate} from 'react-router-dom'

export const IndividualProduct = ({individualProduct, addToCart}) => {
    const links = individualProduct.link;
    const navigate = useNavigate();
    const bus_taka = individualProduct.price;
    const train_taka = 700;
    // const handleAddToCart=()=>{
    //     addToCart(individualProduct);
    // }   
    const view_cost=()=>{
          navigate('/Information');
    }
    return (
        <div className='product' style={{backgroundColor:'yellow'}}>
            <div className='product-img'>
                <img src={individualProduct.url} alt="product-img"/>
            </div>
            <div className='product-text title'>{individualProduct.title}</div>
            <div className='product-text description'>{individualProduct.description}</div>
            <div className='product-text description'>{individualProduct.link}</div>
            {/* <div className='product-text price'>$ {individualProduct.price}</div> */}
            <div className='btn btn-danger btn-md cart-btn' onClick={view_cost}>View cost </div>
            <h1 className='product-text description'>{links}</h1>
            
        </div> 
    )
}