import { Col, Layout, Menu, Row } from 'antd';
import React from 'react';
import './LayoutHeader.css';
import { items } from './Menu';
const { Header } = Layout;

const LayoutHeader = () => {
    const numrows = 20;
    return (
        <Header id='header'>
            <div className='container'>
                <Row align='middle'>
                    <Col
                        span={6} xs={{
                            span: 24,
                        }}
                        sm={{
                            span: 24,
                        }}
                        md={{
                            span: 8,
                        }}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/upload/free-vector.jpg`}
                            width={100}
                            alt=''
                        />
                    </Col>
                    <Col
                        span={18}
                        xs={{
                            span: 24,
                        }}
                        sm={{
                            span: 24,
                        }}
                        md={{
                            span: 16,
                        }}
                    >
                        <Menu
                            mode="horizontal"
                            items={items}
                        />
                    </Col>
                </Row>
            </div>
        </Header>
    );
}

export default LayoutHeader;
