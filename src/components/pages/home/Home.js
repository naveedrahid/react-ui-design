import { Card, Col, Row } from 'antd';
import React from 'react';
import Slider from '../../partial/slider/Slider';
import { TabsFun } from './SlicesUtils';
import './Home.css';

const { Meta } = Card;

function Home() {
  return (
    <div className='homeTemplate'>
      <Slider />
      <div className='container'>
        <Row gutter={16} className='pyRow'>
          <Col className="gutter-row"
            span={6} xs={{
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
            span={6} xs={{
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
            span={6} xs={{
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
            span={6} xs={{
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