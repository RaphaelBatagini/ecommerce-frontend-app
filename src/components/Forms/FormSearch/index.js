import React from 'react';
import './styles.scss';

const FormSearch = () => (
    <form id="main-search" className="main-search form-inline" action="/">
        <div className="form-group">
            <label htmlFor="search" className="sr-only">Email address</label>
            <input type="text" 
                className="form-control" 
                id="search"
                name="s"
                // value="" 
                placeholder="What are you looking for?"/>
        </div>
        <input type="hidden" name="post_type" value="product"/>
        <button type="submit" className="btn btn-primary">
            <i className="fa fa-search"></i>
        </button>
    </form>
);

export default FormSearch;