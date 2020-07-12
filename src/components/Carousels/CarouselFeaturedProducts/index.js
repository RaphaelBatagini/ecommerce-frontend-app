import React from 'react';
import CarouselProducts from '../CarouselProducts';

const CarouselFeaturedProducts = () => {
  const params = {
    featured: true
  }
  return <CarouselProducts name="Featured" endpoint="products" params={ params }/>
}

export default CarouselFeaturedProducts;