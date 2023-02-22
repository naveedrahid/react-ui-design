import { Tabs } from "antd";
import React from 'react';
import ProductLayout from "../../partial/productLayout/productLayout";

export const TabsFun = () => {
    return (
        <Tabs
            defaultActiveKey="1"
            centered
            items={new Array(3).fill(null).map((_, i) => {
                const id = String(i + 1);
                return {
                    label: `Tab ${id}`,
                    key: id,
                    children: <ProductLayout />,
                };
            })}
        />
    );
}
// export const homeUtils = {
//     TabsFun
// }