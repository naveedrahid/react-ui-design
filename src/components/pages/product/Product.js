import React, { useState } from 'react';
import { Alert, Col, Row, Button, Form, Input, Typography, Tooltip } from 'antd';
import { AudioMutedOutlined, PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import './Product.css';
const { Paragraph } = Typography;

const Product = () => {
    const [inputValue, setInputValue] = useState(null);
    const onCloseHandler = (e) => {
        console.log(e, 'I was closed.');
    };
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='videoStreaming'>
            <div className='container'>
                <Row>
                    <Col
                        className='videoCall'
                        span={16}
                        xs={{
                            span: 24,
                        }}
                        sm={{
                            span: 24,
                        }}
                        md={{
                            span: 16,
                        }}
                        lg={{
                            span: 16,
                        }}
                    >
                        {/* <ReactPlayer
                            url='https://www.youtube.com/embed/B36qeYmmDoA'
                            width='100%'
                            controls={true}
                            muted={true}
                        /> */}
                        <div className='videoWrapper'>
                            <video width="100%" height="500" controls>
                                <source src="https://www.youtube.com/embed/B36qeYmmDoA" type="video/mp4" />
                            </video>
                            <div className='chatShow'>
                                <div className='chatInner'>
                                    <div className='memberName'>
                                        Member
                                    </div>
                                    <div className='memberMessage'>
                                        Ut enim ad minim veniam liquip ami tomader
                                    </div>
                                </div>
                                <div className='chatInner'>
                                    <div className='memberName'>
                                        Member
                                    </div>
                                    <div className='memberMessage'>
                                        Ut enim ad minim veniam liquip ami tomader
                                    </div>
                                </div>
                                <div className='chatInner'>
                                    <div className='memberName'>
                                        Member
                                    </div>
                                    <div className='memberMessage'>
                                        Ut enim ad minim veniam liquip ami tomader
                                    </div>
                                </div>
                                <div className='chatInner'>
                                    <div className='memberName'>
                                        Member
                                    </div>
                                    <div className='memberMessage'>
                                        Ut enim ad minim veniam liquip ami tomader
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col
                        className='chatCol'
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
                        <div className='chatWrapper'>
                            <Typography.Title level={2}>
                                Members
                            </Typography.Title>
                            {new Array(3).fill(null).map((_, i) => {
                                const id = String(i + 1);
                                return (
                                    <div className='chatMessages' key={id}>
                                        <Alert
                                            message="Show Your Member Name"
                                            type="error"
                                            closable
                                            onClose={onCloseHandler}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </Col>
                    <Col
                        span={24}
                    >
                        <div className='chatForm'>
                            <div className='videoBtn'>
                                <Tooltip title="Mute">
                                    <Button>
                                        <AudioMutedOutlined />
                                    </Button>
                                </Tooltip>
                                <Tooltip title="Play">
                                    <Button>
                                        <PlayCircleOutlined />
                                    </Button>
                                </Tooltip>
                                <Tooltip title="Pause">
                                    <Button>
                                        <PauseCircleOutlined />
                                    </Button>
                                </Tooltip>
                            </div>
                            <Form
                                // name="basic"
                                // labelCol={{ span: 8 }}
                                // wrapperCol={{ span: 16 }}
                                // style={{ maxWidth: 600 }}
                                //    initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    name="username"
                                    type="text"
                                // rules={[{ required: false}]}
                                >
                                    <Input placeholder='Type message..'/>
                                </Form.Item>
                                <Form.Item >
                                    <Button type="primary" htmlType="submit">
                                        Send
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>

                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Product;
