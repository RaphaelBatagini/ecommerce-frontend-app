import React from 'react';
import FormSearch from './../Forms/FormSearch'
import UserInfo from './../UserInfo';

const Header = () => (
    <header id="main-header" className="banner">
        <div className="container">
            <div className="row">
            <div className="col-3 d-block d-lg-none">
                <button className="navbar-toggler pb-3" 
                type="button" 
                data-toggle="collapse" 
                data-target="#mainNavbar" 
                aria-controls="mainNavbar" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <i className="fa fa-bars text-light"></i>
                </button>
            </div>
            <div className="col-6 col-lg-2 brand-container">
                <a className="brand" href="/">Minha Loja</a>
            </div>
            <div className="col-12 col-lg-8">
                <FormSearch />
            </div>
            <div className="col-md-2">
                <UserInfo />
            </div>
            </div>
            <nav className="nav-primary navbar-expand-lg"></nav>
        </div>
    </header>
);

export default Header;