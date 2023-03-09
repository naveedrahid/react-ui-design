import { Button, Carousel, Typography } from "antd";
import React from "react";
import "./CarouselSlider.css";

const { Paragraph } = Typography;

const sliderImage = {
    img1: `/upload/slider-07.jpg`,
    img2: `/upload/slider-08.jpg`,
    img3: `/upload/slider-09.jpg`,
};

const CarouselSlider = () => {
    return (
        <Carousel className="contentStyle">
            <div className="sliderInner">
                <div
                    className="sliderImg"
                    style={{ backgroundImage: `url(${sliderImage.img1})` }}>
                    <Typography.Title className="widgetTitle" level={4}>
                        Orange
                    </Typography.Title>
                    <Paragraph className="fsNormal">handmade bags</Paragraph>
                    <Button type="primary" className="primaryBtn">
                        Primary Button
                    </Button>
                </div>
            </div>
            <div className="sliderInner">
                <div
                    className="sliderImg"
                    style={{ backgroundImage: `url(${sliderImage.img2})` }}>
                    <Typography.Title className="widgetTitle" level={4}>
                        Orange
                    </Typography.Title>
                    <Paragraph className="fsNormal">handmade bags</Paragraph>
                    <Button type="primary" className="primaryBtn">
                        Primary Button
                    </Button>
                </div>
            </div>
            <div className="sliderInner">
                <div
                    className="sliderImg"
                    style={{ backgroundImage: `url(${sliderImage.img3})` }}>
                    <Typography.Title className="widgetTitle" level={4}>
                        Orange
                    </Typography.Title>
                    <Paragraph className="fsNormal">handmade bags</Paragraph>
                    <Button type="primary" className="primaryBtn">
                        Primary Button
                    </Button>
                </div>
            </div>
        </Carousel>
    );
};

export default CarouselSlider;
