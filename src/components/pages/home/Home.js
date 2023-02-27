import { Button, Card, Col, Row, Typography } from 'antd';
import React from 'react';
import CarouselSlider from '../../partial/slider/CarouselSlider';
import './Home.css';
import { TopCollection } from '../../partial/productLayout/productLayout';
import { TabsFun } from '../../utils/SlicesUtils';

const { Meta } = Card;
const { Paragraph } = Typography;

// https://blueskytechco.com/rubix/fashion-02/?demo=8/
// https://july.uxper.co/fashion07/
// https://angular.pixelstrap.com/multikart/home/fashion-3
// https://portotheme.com/html/molla/index-7.html
// http://spab-rice.com/wordpress/kona/demo/

function Home() {
  return (
    <div className='homeTemplate'>
      <CarouselSlider />
      <div className='container'>
        <Row gutter={16} className='pyRow'>
          <Col className="gutter-row"
            span={6}
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
              span: 6,
            }}
          >
            <Card className='servicesBox'>
              <Meta
                avatar={<i className="fa-solid fa-truck-fast"></i>}
                title="Free Shipping"
                description="Ut enim ad minim veniam liquip ami tomader"
              />
            </Card>
          </Col>
          <Col className="gutter-row"
            span={6}
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
              span: 6,
            }}
          >
            <Card className='servicesBox'>
              <Meta
                avatar={<i className="fa-solid fa-shield-halved"></i>}
                title="Secure Payments"
                description="Ut enim ad minim veniam liquip ami tomader"
              />
            </Card>
          </Col>
          <Col className="gutter-row"
            span={6}
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
              span: 6,
            }}
          >
            <Card className='servicesBox'>
              <Meta
                avatar={<i className="fa-solid fa-rotate-left"></i>}
                title="Easy Returns"
                description="Ut enim ad minim veniam liquip ami tomader"
              />
            </Card>
          </Col>
          <Col className="gutter-row"
            span={6}
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
              span: 6,
            }}
          >
            <Card className='servicesBox'>
              <Meta
                avatar={<i className="fa-regular fa-clock"></i>}
                title="24/7 Support"
                description="Ut enim ad minim veniam liquip ami tomader"
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row"
            span={8}
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
              span: 8,
            }}
          >
            <div
              className='categoryBox'
              style={{ background: `url(${process.env.PUBLIC_URL}/upload/mensjpg.jpg)` }}
            >
              <Paragraph
                className='uppercase'
              >
                New Collection
              </Paragraph>
              <Typography.Title
                level={3}
                className='uppercase'
              >
                Shop Women's
              </Typography.Title>
              <Button
                type="link"
                className='btnUnderLine uppercase'
              >
                Shop Now
              </Button>
            </div>
          </Col>
          <Col className="gutter-row"
            span={8}
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
              span: 8,
            }}
          >
            <div
              className='categoryBox'
              style={{ background: `url(${process.env.PUBLIC_URL}/upload/womens.jpg)` }}
            >
              <Paragraph
                className='uppercase'
              >
                New Collection
              </Paragraph>
              <Typography.Title
                level={3}
                className='uppercase'
              >
                Shop Women's
              </Typography.Title>
              <Button
                type="link"
                className='btnUnderLine uppercase'
              >
                Shop Now
              </Button>
            </div>
          </Col>
          <Col className="gutter-row"
            span={8}
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
              span: 8,
            }}
          >
            <div
              className='categoryBox'
              style={{ background: `url(${process.env.PUBLIC_URL}/upload/acessories.jpg)` }}
            >
              <Paragraph
                className='uppercase'
              >
                New Collection
              </Paragraph>
              <Typography.Title
                level={3}
                className='uppercase'
              >
                Shop Women's
              </Typography.Title>
              <Button
                type="link"
                className='btnUnderLine uppercase'
              >
                Shop Now
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="gutter-row"
            span={24}
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
              span: 24,
            }}
          >
            <div className='infoBox'>
              <Typography.Title
                level={5}
                align="center"
              >
                Special Offer
              </Typography.Title>
              <Typography.Title
                level={2}
                align="center"
              >
                TOP COLLECTION
              </Typography.Title>
              <Paragraph
                align="center"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                <br />the industry's standard dummy text ever since the 1500s,
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
      <TopCollection />
      <div className='container'>
        <Row gutter={16} className='pyRow'>
          <Col className="gutter-row" span={24}>
            <TabsFun />
          </Col>
        </Row>

      </div>
    </div>
  )
}

export default Home