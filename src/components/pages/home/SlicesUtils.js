import { Tabs } from "antd";
import React from 'react';
import { ProductLayout } from "../../partial/productLayout/productLayout";
export const TabsFun = () => {
    const categoryName = [
        {
            cat_name: 'Mens'
        },
        {
            cat_name: 'Women'
        },
        {
            cat_name: 'Accessories'
        }
    ];
    return (
        <Tabs
            defaultActiveKey="1"
            centered
            items={categoryName.slice(0, 3).map((category, i) => {
                const id = String(i + 1);
                return {
                    label: category.cat_name,
                    key: id,
                    children: <ProductLayout cat_id={id} />
                };
            })}
        />
    );
}
// export const homeUtils = {
//     TabsFun
// }