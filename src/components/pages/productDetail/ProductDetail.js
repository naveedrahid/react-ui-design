import { Badge, Button, Col, InputNumber, Radio, Rate, Row, Typography } from "antd";
import React, { useEffect, useState, useRef } from "react";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { productDetailObj } from "../../utils/objProduct";
import './ProductDetail.css';

const { Paragraph } = Typography;

const qntyOnChange = (value) => {
    console.log('changed', value);
}

const ProductDetail = () => {

    const [selectVariation, setSelectVariation] = useState(1);
    const selectVariationHandler = (e) => {
        setSelectVariation(e.target.value);
    };

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    const slider1Ref = useRef(null);
    const slider2Ref = useRef(null);

    useEffect(() => {
        setNav1(slider1Ref.current);
        setNav2(slider2Ref.current);
    }, []);

    return (
        <div className="productDetailWrapper">
            <div className="container">
                <Row>
                    <Col
                        span={12}
                        xs={{
                            span: 24,
                        }}
                        sm={{
                            span: 24,
                        }}
                        md={{
                            span: 8,
                        }}
                        lg={{
                            span: 12,
                        }}
                    >
                        <div className="detailSlider">
                            <div className="sliderNav1">
                                <Slider
                                    asNavFor={nav2}
                                    ref={slider1Ref}
                                >
                                    {
                                        productDetailObj.slice(0, 6).map((singleProduct) => (
                                            <div
                                                className='productThumnail'
                                                key={singleProduct.id}
                                            >
                                                <img
                                                    src={singleProduct.image}
                                                    className='imgFluid'
                                                    alt=''
                                                />
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                            <div className="sliderNav2">
                                <Slider
                                    asNavFor={nav1}
                                    ref={slider2Ref}
                                    slidesToShow={6}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                >
                                    {
                                        productDetailObj.slice(0, 6).map((singleProduct) => (
                                            <div
                                                className='productThumnail'
                                                key={singleProduct.id}
                                            >
                                                <img
                                                    src={singleProduct.image}
                                                    className='imgFluid'
                                                    alt=''
                                                />
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                    </Col>
                    <Col
                        span={12}
                        xs={{
                            span: 24,
                        }}
                        sm={{
                            span: 24,
                        }}
                        md={{
                            span: 8,
                        }}
                        lg={{
                            span: 12,
                        }}
                    >
                        <div className="productContent">
                            <Typography.Title
                                className='productTitle'
                                level={4}
                            >
                                <Link to='#'>{productDetailObj[0].name}</Link>
                            </Typography.Title>
                            <div className="information">
                                <div className='rating'>
                                    <Rate /> (6 reviews)
                                </div>
                                <div className="sku">
                                    SKU: 19115-rdxs
                                </div>
                                <div className="stock">
                                    <Badge
                                        className="site-badge-count"
                                    >
                                        In Stock
                                    </Badge>
                                </div>
                            </div>
                            <Paragraph className='price'>
                                <span>Price:</span> ${productDetailObj[0].price.toFixed(2)}
                            </Paragraph>
                            <Paragraph className='shortDesc'>
                                <span>Price:</span> ${productDetailObj[0].desc}
                            </Paragraph>
                            <div className='selectColor'>
                                <span>Colors: </span>
                                <Radio.Group
                                    onChange={selectVariationHandler}
                                    value={selectVariation}
                                >
                                    {productDetailObj[0].colors.map((color, index) => (
                                        <Radio key={index} value={color + productDetailObj.id} className={`color${index + 1}`} />
                                    ))}
                                </Radio.Group>
                            </div>
                            <div className='addToCartBtn'>
                                <div className='QtyNum'>
                                    <span>Qty: </span>
                                    <InputNumber
                                        min={1}
                                        max={10}
                                        defaultValue={1}
                                        onChange={qntyOnChange}
                                    />
                                </div>
                                <div className='btnCart'>
                                    <Button
                                        type="primary"
                                        shape="default"
                                        icon={<ShoppingCartOutlined />}
                                    >
                                        ADD TO CART
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ProductDetail;