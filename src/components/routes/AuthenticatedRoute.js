import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { authenticatedRoutesConstant, footerRoutesConstant } from '../constant/routesConstant';
import MasterLayout from '../masterLayout/MasterLayout';
import Home from '../pages/home/Home';
import Product from '../pages/product/Product';
import ProductDetail from '../pages/productDetail/productDetail';

const AuthenticatedRoute = () => {
    return (
        <>
        <Routes>
            <Route path={authenticatedRoutesConstant.Home} element={<MasterLayout />}>
                <Route path={authenticatedRoutesConstant.Home} element={<Home />}/>
                <Route path={authenticatedRoutesConstant.SingleProduct} element={<ProductDetail />}/>
                <Route path={authenticatedRoutesConstant.Product} element={<Product />}/>
                <Route path={footerRoutesConstant.MenShoes} />
                <Route path={footerRoutesConstant.WomenTshirt} />
                <Route path={footerRoutesConstant.WomenAccessories} />
                <Route path={footerRoutesConstant.WomenShoes} />
            </Route>
        </Routes>
        </>
    );
}

export default AuthenticatedRoute;
