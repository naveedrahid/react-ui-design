import React from "react";
import { Link } from "react-router-dom";
import { authenticatedRoutesConstant, footerRoutesConstant, subMenuRoutesConstant } from "../../constant/routesConstant";

export const items = [
    {
        label: <Link to={authenticatedRoutesConstant.Home}>Home</Link>,
        key: 'home',
    },
    {
        label: <Link to={authenticatedRoutesConstant.Product}>Product</Link>,
        key: 'navigation-two',
    },
    {
        label: 'Categories',
        key: 'SubMenu',
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: <Link to={subMenuRoutesConstant.Men}>Men</Link>,
                        key: 't-shirt',
                    },
                    {
                        label: <Link to={subMenuRoutesConstant.Shirt}>Shirt</Link>,
                        key: 'shirt',
                    },
                    {
                        label: <Link to={subMenuRoutesConstant.Tshirt}>Tshirt</Link>,
                        key: 'men',
                    },
                    {
                        label: <Link to={subMenuRoutesConstant.WomenMen}>WomenMen</Link>,
                        key: 'women-men',
                    },
                ],
            },
        ],
    },
];
export const footerItems = [
    {
        label: <Link to={footerRoutesConstant.MenShoes}>Men Shoes</Link>,
        key: 'men-shoes',
    },
    {
        label: <Link to={footerRoutesConstant.WomenAccessories}>Women Accessories</Link>,
        key: 'women-accessories',
    },
    {
        label: <Link to={footerRoutesConstant.WomenShoes}>Women Shoes</Link>,
        key: 'women-shoes',
    },
    {
        label: <Link to={footerRoutesConstant.WomenTshirt}>Women Tshirt</Link>,
        key: 'women-tshirt',
    },
];