import React, { Component } from 'react';
import CarouselFeaturedProducts from '../../components/Carousels/CarouselFeaturedProducts';
import CarouselMostRecentProducts from '../../components/Carousels/CarouselMostRecentProducts';

export default class Main extends Component {
    render() {
        return <div className="container">
            <CarouselMostRecentProducts />
            <CarouselFeaturedProducts />
        </div>;
    }
}