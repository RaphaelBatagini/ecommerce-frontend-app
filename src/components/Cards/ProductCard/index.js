import React from 'react';

const ProductCard = (props) => {
    const { product } = props;
    return <div className="card">
        <img className="card-img-top" 
        src={product.images[0].shop_catalog}
        alt="Card cap"/>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="price" 
                dangerouslySetInnerHTML={{__html: product.price_html}}></p>
            <a href="#" className="btn btn-primary w-100">
                Buy
            </a>
        </div>
    </div>
}

export default ProductCard;