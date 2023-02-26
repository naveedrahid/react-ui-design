import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import CarouselSlider from '../../partial/slider/CarouselSlider';
import { TabsFun } from './SlicesUtils';
import './Home.css';
import { TopCollection } from '../../partial/productLayout/productLayout';

const { Meta } = Card;
const { Paragraph } = Typography;

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