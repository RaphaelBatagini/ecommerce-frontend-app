import React from 'react';

const FormSearch = () => (
    <form id="main-search" className="main-search" action="/">
        <div className="form-group">
            <label for="search" className="sr-only">Email address</label>
            <input type="text" 
                className="form-control" 
                id="search"
                name="s"
                value="{{ get_query_var('s') }}" 
                placeholder="{{ __('What are you looking for?', 'ecommerce') }}"/>
        </div>
        <input type="hidden" name="post_type" value="product"/>
        <button type="submit" className="btn btn-primary">
            <i className="fa fa-search"></i>
        </button>
    </form>
);

export default FormSearch;