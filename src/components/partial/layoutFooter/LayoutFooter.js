import { Col, Layout, Menu, Row, Typography, Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { footerItems, items } from '../layoutHeader/Menu';
import './LayoutFooter.css';

const { Meta } = Card;
const { Paragraph } = Typography;
const { Footer } = Layout;

const LayoutFooter = () => {
    return (
        <Footer className='footerInner'>
            <div className='container'>
                <Row
                    gutter={{
                        xs: 8,
                        sm: 16,
                        md: 24,
                        lg: 32,
                    }}
                >
                    <Col className="gutter-row" span={6}>
                        <div className='widgets footerCtn'>
                            <img
                                src={`${process.env.PUBLIC_URL}/upload/free-vector.jpg`}
                                width={100}
                                alt=''
                            />
                            <div className='footerContent'>
                                <Paragraph className='typeContent'>
                                    orange is an exciting UK based independent womenswear brand,
                                    founded by MIo in 2019. orange has seen extraordinary growth since
                                    it’s inception – now selling worldwide
                                </Paragraph>
                                <div className='footerSocial'>
                                    <Link to={'/'}>
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </Link>
                                    <Link to={'/'}>
                                        <i className="fa-brands fa-twitter"></i>
                                    </Link>
                                    <Link to={'/'}>
                                        <i className="fa-brands fa-instagram"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className='widgets footerMenu'>
                            <Typography.Title
                                className='widgetTitle'
                                level={4}
                            >
                                Menu
                            </Typography.Title>
                            <Menu
                                mode="vertical"
                                items={items}
                            />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className='widgets footerMenu'>
                            <Typography.Title
                                className='widgetTitle'
                                level={4}
                            >
                                Top Categories
                            </Typography.Title>
                            <Menu
                                mode="vertical"
                                items={footerItems}
                            />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className='widgets footerMenu'>
                            <Typography.Title
                                className='widgetTitle'
                                level={4}
                            >
                                Contact
                            </Typography.Title>
                            <Card className='cardInformation'>
                                <Meta
                                    avatar={<i className="fa-solid fa-location-dot"></i>}
                                    title="Address"
                                    description="Lorem ipsum dolor sit amet"
                                />
                            </Card>
                            <Card className='cardInformation'>
                                <Meta
                                    avatar={<i className="fa-solid fa-envelope"></i>}
                                    title="Address"
                                    description={<Link to={'mailto:info@yourdomail.com'}>info@yourdomail.com</Link>}
                                />
                            </Card>
                            <Card className='cardInformation'>
                                <Meta
                                    avatar={<i className="fa-solid fa-phone"></i>}
                                    title="Address"
                                    description={<Link to={'tel:0123456789'}>0123 456 789</Link>}
                                />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={24}>
                        <Paragraph className='textCenter mtText'>
                            © COPYRIGHT 2023
                        </Paragraph>
                    </Col>
                </Row>
            </div>
        </Footer>
    );
}

export default LayoutFooter;
