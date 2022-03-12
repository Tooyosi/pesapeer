import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const SolvingComponent = () => {
    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <Col md="6">
                        <h1 className='text-secondary'>We are solving <br /> for you</h1>
                    </Col>
                    <Col md="6">
                        <p className='text-muted small'>
                            We started with enabling people to send money to Nigeria from Canada but soon the divide was beyond Nigeria. In less than 2 years, we’ve worked hard to enable free transactions from Canada to over 10 countries without any charge.
                        </p>
                        <p className='text-muted small'>
                            We know that money makes good things happen for people. Our contribution to creating a world of good is making money between people seamlessly no matter where they might be.
                        </p>
                    </Col>
                </Row>

                <Row className='my-5'>
                    <img src={require('assets/images/svg/pages/About/about_img.svg').default} alt="" className='img-fluid rounded my-4' loading='lazy' />
                </Row>

                <Row>
                    <Col md="6">
                        <h1 className='text-secondary'>We are aligned <br /> in purpose</h1>
                    </Col>
                    <Col md="6">
                        <p className='text-muted small'>
                        We are building a team of people committed to our purpose. Our impressive team of leaders are committed to building the future and redefining what a contemporary workforce looks like.
                        </p>
                        <p className='text-muted small'>
                        We are proud to have some of the most brilliant minds aligned in purpose to build and disrupt the cross border payment industry for good. 
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SolvingComponent