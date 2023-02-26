import { Col, Radio, Rate, Row, Tooltip, Typography } from 'antd';
import React, { useState } from 'react';
import { SyncOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './productLayout.css';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { accessories, menProducts, womenProduct } from './objProduct';

const { Paragraph } = Typography;

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    //arrows:true,
};
export const ProductLayout = (props) => {
    const [selectColor, setSelectColor] = useState(1);
    const selectColorHandler = (e) => {
        setSelectColor(e.target.value);
    };
    const catID = Number(props?.cat_id);
    return (
        <Row
            gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 10,
            }}
        >
            {catID === 1 && womenProduct.slice(0, 8).map((product) => (
                <Col
                    key={product.id}
                    span={6}
                    xs={{ span: 24, }}
                    sm={{ span: 12, }}
                    md={{ span: 8, }}
                    lg={{ span: 6, }}
                >
                    <div className='productGrid'>
                        <div className='productThumnail'>
                            <Link to={'/'}>
                                <img
                                    src={product.image}
                                    className='imgFluid'
                                    alt={product.name}
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
                                <Link to={'/'}>{product.name}</Link>
                            </Typography.Title>
                            <Paragraph className='price'>
                                ${product.price.toFixed(2)}
                            </Paragraph>
                            <div className='rating'>
                                <Rate />
                            </div>
                            <div className='selectColor'>
                                <Radio.Group onChange={selectColorHandler} value={selectColor}>
                                    {product?.colors.map((color, index) => (
                                        <Radio key={index} value={color + product.id} className={`color${index + 1}`} />
                                    ))}
                                </Radio.Group>
                            </div>
                        </div>
                    </div>
                </Col>
            ))}
            {catID === 2 && menProducts.slice(0, 8).map((menProduct) => (
                <Col
                    key={menProduct.id}
                    span={6}
                    xs={{ span: 24, }}
                    sm={{ span: 12, }}
                    md={{ span: 8, }}
                    lg={{ span: 6, }}
                >
                    <div className='productGrid'>
                        <div className='productThumnail'>
                            <Link to={'/'}>
                                <img
                                    src={menProduct.image}
                                    className='imgFluid'
                                    alt={menProduct.name}
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
                                <Link to={'/'}>{menProduct.name}</Link>
                            </Typography.Title>
                            <Paragraph className='price'>
                                ${menProduct.price.toFixed(2)}
                            </Paragraph>
                            <div className='rating'>
                                <Rate />
                            </div>
                            <div className='selectColor'>
                                <Radio.Group onChange={selectColorHandler} value={selectColor}>
                                    {menProduct?.colors.map((color, index) => (
                                        <Radio key={index} value={color + menProduct.id} className={`color${index + 1}`} />
                                    ))}
                                </Radio.Group>
                            </div>
                        </div>
                    </div>
                </Col>
            ))}
            {catID === 3 && accessories.slice(0, 8).map((acsProduct) => (
                <Col
                    key={acsProduct.id}
                    span={6}
                    xs={{ span: 24, }}
                    sm={{ span: 12, }}
                    md={{ span: 8, }}
                    lg={{ span: 6, }}
                >
                    <div className='productGrid'>
                        <div className='productThumnail'>
                            <Link to={'/'}>
                                <img
                                    src={acsProduct.image}
                                    className='imgFluid'
                                    alt={acsProduct.name}
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
                                <Link to={'/'}>{acsProduct.name}</Link>
                            </Typography.Title>
                            <Paragraph className='price'>
                                ${acsProduct.price.toFixed(2)}
                            </Paragraph>
                            <div className='rating'>
                                <Rate />
                            </div>
                            <div className='selectColor'>
                                <Radio.Group onChange={selectColorHandler} value={selectColor}>
                                    {acsProduct?.colors.map((color, index) => (
                                        <Radio key={index} value={color + acsProduct.id} className={`color${index + 1}`} />
                                    ))}
                                </Radio.Group>
                            </div>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    );
}

export const TopCollection = () => {
    const [collectionColor, setCollectionColor] = useState(1);
    const collectionColorHandler = (e) => {
        setCollectionColor(e.target.value);
    };
    return (
        <Slider {...settings} className='collectionSlider'>
            {
                accessories.map(accessory => (
                    <div className='productGrid' key={accessory.id}>
                        <div className='productThumnail'>
                            <Link to={'/'}>
                                <img
                                    src={accessory.image}
                                    className='imgFluid'
                                    alt={accessory.name}
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
                                <Link to={'/'}>{accessory.name}</Link>
                            </Typography.Title>
                            <Paragraph className='price'>
                                ${accessory.price.toFixed(2)}
                            </Paragraph>
                            <div className='rating'>
                                <Rate />
                            </div>
                            <div className='selectColor'>
                                <Radio.Group onChange={collectionColorHandler} value={collectionColor}>
                                    {accessory?.colors.map((color, index) => (
                                        <Radio key={index} value={color + accessory.id} className={`color${index + 1}`} />
                                    ))}
                                </Radio.Group>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Slider>
    );
}