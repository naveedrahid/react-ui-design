import { Col, Row } from 'antd';
import React from 'react';

const ProductLayout = () => {
    return (
        <Row>
            <Col
                span={6}
                xs={{
                    span: 24,
                }}
                sm={{
                    span: 12,
                }}
                md={{
                    span: 8,
                }}
                lg={{
                    span: 6,
                }}
            >
                <div className='productGrid'>
                    <div className='productThumnail'>
                        <img
                            src={`${process.env.PUBLIC_URL}/upload/t1.png`}
                            width={100}
                            alt=''
                        />
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default ProductLayout;
