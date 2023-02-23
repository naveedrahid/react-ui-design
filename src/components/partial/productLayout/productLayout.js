import { Col, Radio, Rate, Row, Tooltip, Typography } from 'antd';
import React, { useState } from 'react';
import { SyncOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './productLayout.css';
import { Link } from 'react-router-dom';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const { Paragraph } = Typography;

export const ProductLayout = (props) => {
     console.log("??????????",props)
    const [rating, setRating] = useState(3);
    const [selectColor, setSelectColor] = useState(1);
    const selectColorHandler = (e) => {
        console.log('radio checked', e.target.value);
        setSelectColor(e.target.value);
    };
    console.log(">>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<")
    return (
        <Row>
            {Array.from({length: 3}, (val, index) => (
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
                    <div key={index} className='productGrid'>
                        <div className='productThumnail'>
                            <Link to={'/'}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/upload/p1.png`}
                                    className='imgFluid'
                                    alt=''
                                />
                            </Link>
                            <div className='hoverIcons'>
                                <div className='comapareIcon iconSet'>
                                    <Link to={'/'}>
                                        <Tooltip title="Compare">
                                            <SyncOutlined />
                                        </Tooltip>
                                    </Link>
                                </div>
                                <div className='heartIcon iconSet'>
                                    <Link to={'/'}>
                                        <Tooltip title="Add to Wishlist">
                                            <HeartOutlined />
                                        </Tooltip>
                                    </Link>
                                </div>
                                <div className='addCartIcon iconSet'>
                                    <Link to={'/'}>
                                        <Tooltip title="Add to Cart">
                                            <ShoppingCartOutlined />
                                        </Tooltip>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='productDetail'>
                            <Typography.Title
                                className='productTitle'
                                level={4}
                            >
                                <Link to={'/'}>Martha Knit Top</Link>
                            </Typography.Title>
                            <Paragraph>
                                $399.00
                            </Paragraph>
                            <div className='rating'>
                                <Rate tooltips={desc} onChange={setRating} value={rating} />
                                {rating ? <span className="ant-rate-text">{desc[rating - 1]}</span> : ''}
                            </div>
                            <div className='selectColor'>
                                <Radio.Group onChange={selectColorHandler} value={selectColor}>
                                    <Radio value={1} className='color1' />
                                    <Radio value={2} className='color2' />
                                    <Radio value={3} className='color3' />
                                    <Radio value={4} className='color4' />
                                </Radio.Group>
                            </div>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>

    );
}
