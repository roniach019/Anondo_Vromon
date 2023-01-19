import React from 'react'
import {useNavigate} from 'react-router-dom'

export const IndividualFilteredProduct = ({individualFilteredProduct, addToCart}) => {

    const handleAddToCart=()=>{
        addToCart(individualFilteredProduct);
    }

    //

    const links = individualFilteredProduct.link;
    const navigate = useNavigate();
    const bus_taka = individualFilteredProduct.price;
    const train_taka = 700;
    // const handleAddToCart=()=>{
    //     addToCart(individualProduct);
    // }   
    const view_cost=()=>{
          navigate('/Information');
    }

    //const link = "https://codingbeautydev.com/blog/react-button-link/#:~:text=To%20use%20a%20button%20as%20a%20link%20in%20React%2C%20wrap,navigate%20to%20the%20specified%20URL.";

    return (
        <div className='product' style={{backgroundColor:'yellow'}}>
            <div className='product-img'>
                <img src={individualFilteredProduct.url} alt="product-img"/>
            </div>
            <div className='product-text title'>{individualFilteredProduct.title}</div>
            <div className='product-text description'>{individualFilteredProduct.description}</div>
            <div className='product-text price'>$ {individualFilteredProduct.price}</div>
            {/* <div className='btn btn-danger btn-md cart-btn' onClick={handleAddToCart}>ADD TO CART</div> */}
            <div className='btn btn-danger btn-md cart-btn' onClick={view_cost}>View cost </div>
            <a href="https://www.tripadvisor.com/Attractions-g3746420-Activities-Sreemangal_Sylhet_Division.html">
            <button>Posts</button>
            </a>
        </div> 
    )
}

/*
<div className='product' style={{backgroundColor:'yellow'}}>
            <div className='product-img'>
                <img src={individualProduct.url} alt="product-img"/>
            </div>
            <div className='product-text title'>{individualProduct.title}</div>
            <div className='product-text description'>{individualProduct.description}</div>
            <div className='product-text description'>{individualProduct.link}</div>
            {/* <div className='product-text price'>$ {individualProduct.price}</div> *
            <div className='btn btn-danger btn-md cart-btn' onClick={view_cost}>View cost </div>
            <h1 className='product-text description'>{links}</h1>
            
        </div> 
*/