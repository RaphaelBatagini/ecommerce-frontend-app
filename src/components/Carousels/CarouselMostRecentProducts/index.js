import React, { Component } from 'react';
import woocommerce from '../../../services/WooCommerce';
import Glide from '..';
import ProductCard from '../../Cards/ProductCard';

export default class CarouselMostRecentProducts extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await woocommerce.get('products');
    this.setState({ products: response.data });
    console.log(response.data);
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
      <div className="glide most-recent">
        <div data-glide-el="track" className="glide__track">
          <ul className="glide__slides">
            {products.map(product => (
              <li key="{product.id}"  className="glide__slide">
                <ProductCard product={product} />
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