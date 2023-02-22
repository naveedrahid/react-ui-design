import { Col, Layout, Menu, Row } from 'antd';
import {ShoppingCartOutlined , SearchOutlined, UserOutlined, HeartOutlined} from '@ant-design/icons';
import React from 'react';
import './LayoutHeader.css';
import { items } from './Menu';
const { Header } = Layout;

const LayoutHeader = () => {
    const numrows = 20;
    return (
        <Header id='header' responsive={{ xs: false, sm: true }}>
            <div className='container'>
                <Row align='middle'>
                    <Col
                        span={4} xs={{
                            span: 24,
                        }}
                        sm={{
                            span: 24,
                        }}
                        md={{
                            span: 8,
                        }}
                        lg={{
                            span: 4,
                        }}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/upload/free-vector.jpg`}
                            width={100}
                            alt=''
                        />
                    </Col>
                    <Col
                        span={14}
                        xs={{
                            span: 24,
                        }}
                        sm={{
                            span: 24,
                        }}
                        md={{
                            span: 16,
                        }}
                        lg={{
                            span: 14,
                        }}
                    >
                        <Menu
                            mode="horizontal"
                            items={items}
                        />
                    </Col>
                    <Col
                        span={6}
                        xs={{
                            span: 24,
                        }}
                        sm={{
                            span: 24,
                        }}
                        md={{
                            span: 16,
                        }}
                        lg={{
                            span: 6,
                        }}
                    >
                        <div className='iconNav'>
                            <div className='searchIcon navIconPostion'>
                                <SearchOutlined />
                            </div>
                            <div className='UserIcon navIconPostion'>
                                <UserOutlined />
                            </div>
                            <div className='wishListtIcon navIconPostion'>
                                <HeartOutlined />
                            </div>
                            <div className='cartIcon navIconPostion'>
                                <ShoppingCartOutlined />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Header>
    );
}

export default LayoutHeader;
