import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import React from "react";
import CarouselSlider from "../../partial/slider/CarouselSlider";
import "./Home.css";
import { TopCollection } from "../../partial/productLayout/productLayout";
import { TabsFun } from "../../utils/SlicesUtils";
import { brandSliderObj } from "../../utils/objBrands";
import Slider from "react-slick";

const { Meta } = Card;
const { Paragraph } = Typography;

// https://blueskytechco.com/rubix/fashion-02/?demo=8/
// https://july.uxper.co/fashion07/
// https://angular.pixelstrap.com/multikart/home/fashion-3
// https://portotheme.com/html/molla/index-7.html
// http://spab-rice.com/wordpress/kona/demo/

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function Home() {
  const brandSlideSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="homeTemplate">
      <CarouselSlider />
      <div className="container">
        <Row
          gutter={16}
          className="pyRow"
        >
          <Col
            className="gutter-row"
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
            }}>
            <Card className="servicesBox">
              <Meta
                avatar={<i className="fa-solid fa-truck-fast"></i>}
                title="Free Shipping"
                description="Ut enim ad minim veniam liquip ami tomader"
              />
            </Card>
          </Col>
          <Col
            className="gutter-row"
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
            }}>
            <Card className="servicesBox">
              <Meta
                avatar={<i className="fa-solid fa-shield-halved"></i>}
                title="Secure Payments"
                description="Ut enim ad minim veniam liquip ami tomader"
              />
            </Card>
          </Col>
          <Col
            className="gutter-row"
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
            }}>
            <Card className="servicesBox">
              <Meta
                avatar={<i className="fa-solid fa-rotate-left"></i>}
                title="Easy Returns"
                description="Ut enim ad minim veniam liquip ami tomader"
              />
            </Card>
          </Col>
          <Col
            className="gutter-row"
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
            }}>
            <Card className="servicesBox">
              <Meta
                avatar={<i className="fa-regular fa-clock"></i>}
                title="24/7 Support"
                description="Ut enim ad minim veniam liquip ami tomader"
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col
            className="gutter-row"
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
            }}>
            <div
              className="categoryBox"
              style={{
                background: `url(${process.env.PUBLIC_URL}/upload/mensjpg.jpg)`,
              }}>
              <Paragraph
                className="uppercase"
              >New Collection
              </Paragraph>
              <Typography.Title
                level={3}
                className="uppercase"
              >
                Shop Women's
              </Typography.Title>
              <Button
                type="link"
                className="btnUnderLine uppercase"
              >
                Shop Now
              </Button>
            </div>
          </Col>
          <Col
            className="gutter-row"
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
            }}>
            <div
              className="categoryBox"
              style={{
                background: `url(${process.env.PUBLIC_URL}/upload/womens.jpg)`,
              }}>
              <Paragraph
                className="uppercase"
              >
                New Collection
              </Paragraph>
              <Typography.Title
                level={3}
                className="uppercase"
              >
                Shop Women's
              </Typography.Title>
              <Button
                type="link"
                className="btnUnderLine uppercase"
              >
                Shop Now
              </Button>
            </div>
          </Col>
          <Col
            className="gutter-row"
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
            }}>
            <div
              className="categoryBox"
              style={{
                background: `url(${process.env.PUBLIC_URL}/upload/acessories.jpg)`,
              }}>
              <Paragraph
                className="uppercase"
              >
                New Collection
              </Paragraph>
              <Typography.Title
                level={3}
                className="uppercase"
              >
                Shop Women's
              </Typography.Title>
              <Button
                type="link"
                className="btnUnderLine uppercase"
              >
                Shop Now
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            className="gutter-row"
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
            }}>
            <div className="infoBox">
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
                <br />
                the industry's standard dummy text ever since the 1500s,
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
      <TopCollection />
      <div
        className="container"
      >
        <Row
          gutter={16}
          className="pyRow"
        >
          <Col
            className="gutter-row"
            span={24}
          >
            <TabsFun />
          </Col>
        </Row>
      </div>
      <Row
        className="subscriberBgImg"
        justify="center"
      >
        <Col
          className="gutter-row bgWhite"
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
          <Typography.Title
            level={2}
            className="uppercase"
            align="center"
          >
            Subcribe To Our Newsletter
          </Typography.Title>
          <Paragraph
            align="center"
          >
            Sign up for the weekly newsletter and build better ecommerce stores.
          </Paragraph>

          <Form
            className="formSubscriber"
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input your email",
                },
              ]}>
              <Input placeholder="Enter Your Email" />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <div className="container">
        <Row>
          <Col
            className="gutter-row bgWhite"
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
            }}>
            <div className="infoBox">
              <Typography.Title
                level={5}
                align="center"
              >
                Top View In This Week
              </Typography.Title>
              <Typography.Title
                level={2}
                align="center"
                className="uppercase"
              >
                Trending Products
              </Typography.Title>
              <Paragraph
                align="center"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
                <br />
                the industry's standard dummy text ever since the 1500s,
              </Paragraph>
            </div>
            <Slider {...brandSlideSettings}>
              {brandSliderObj.slice(0, 6).map((singleBrand) => (
                <div className="brandInner" key={singleBrand.id}>
                  <img src={singleBrand.img} className="imgFluid" alt="" />
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
