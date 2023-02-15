import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import LayoutFooter from '../partial/layoutFooter/LayoutFooter';
import LayoutHeader from '../partial/layoutHeader/LayoutHeader';
import './MasterLayout.css';
const { Content } = Layout;

const MasterLayout = () => {
    return (
        <div className='layoutWrapper'>
            <LayoutHeader />
            <Layout className='layoutInner'>
                    <Content>
                        <Outlet />
                    </Content>
            </Layout>
            <LayoutFooter />
        </div>
    );
}

export default MasterLayout;
