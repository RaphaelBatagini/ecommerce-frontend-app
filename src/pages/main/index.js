import React, { Component } from 'react';
import CarouselMostRecentProducts from '../../components/Carousels/CarouselMostRecentProducts'

export default class Main extends Component {
    render() {
        return <div className="container">
            <CarouselMostRecentProducts />
        </div>;
    }
}