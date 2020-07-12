import React, { Component } from 'react';
import woocommerce from '../../../services/WooCommerce';
import Glide from '../';

export default class CarouselProductMostRecent extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await woocommerce.get('products');
    this.setState({ products: response.data });
    this.loadCarousel();
  }

  loadCarousel = () => {
    new Glide(
      document.querySelector('.most-recent'),
      {
        type: 'slider',
        startAt: 0,
        perView: 5,
        breakpoints: {
          769: {
            type: 'slider',
            perView: 3.25,
            focusAt: 0,
          },
          425: {
            perView: 1.25,
          },
        },
      }
    ).mount();
  }

  render() {
    const { products } = this.state; 

    return <section className="mt-3">
      <h2>Most recent</h2>
      <hr />
      <p>Products: {products.length}</p>
      <div className="glide most-recent">
        <div data-glide-el="track" className="glide__track">
          <ul className="glide__slides">
            {products.map(product => (
              <li key="{product.id}"  className="glide__slide">
                <div className="card">
                  <img className="card-img-top" 
                    src="http://placehold.it/1300x900" 
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
              </li>
            ))}
          </ul>
        </div>
        <div className="glide__arrows outer-arrows d-none d-lg-block" data-glide-el="controls">
          <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
            <i className="fa fa-chevron-left"></i>
          </button>
          <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  }
}