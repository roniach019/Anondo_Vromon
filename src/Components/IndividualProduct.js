import React from 'react'
import {useNavigate} from 'react-router-dom'

export const IndividualProduct = ({individualProduct, addToCart}) => {
    const sheet_link = individualProduct.sheet_link;
    const web_link   = individualProduct.web_link;
    const navigate = useNavigate(); 

    const view_cost=()=>{
          navigate('/Information' );
    }

    return (
        <div className='product' style={{backgroundColor:'yellow'}}>
            <div className='product-img'>
                <h1 className='photoCard'><a style={{}} href={individualProduct.web_link}><img src={individualProduct.url} alt="product-img"/>  </a></h1>
                {/* <img src={individualProduct.url} alt="product-img"/> */}
            </div>
            <h1>{}</h1>
            <h1 className='cardTitle'><a style={{textDecoration: 'none'}} href={individualProduct.web_link}>{individualProduct.title}  </a></h1>
            <a href={individualProduct.sheet_link}>{individualProduct.title}  </a>
            <div className='product-text description'>{individualProduct.description}</div>
            {/* <div className='product-text description'>{individualProduct.link}</div> */}
            {/* <div className='product-text price'>$ {individualProduct.price}</div> */}
            <div className='btn btn-danger btn-md cart-btn' onClick={view_cost}>View cost </div>           
        </div> 
    )
}