import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const TopComponent = () => {
    return (
        <div className='top'>
            <div className='bg-primary extra-padding'>
                <Container className='pt-5'>
                    <Row>
                        <Col md="6" className='mx-auto text-center'>
                            <h2 className='text-white'>Payment this is truly mobile 🚀</h2>
                            <p className="text-white my-3">
                                Is anything truly mobile if it’s restricted by location? We think not.
                                We are redefining mobility in payments by leveraging financial technology to enable borderless payments for humans around the world.
                            </p>
                        </Col>
                    </Row>
                </Container>

            </div>
            <Container className='negative-top'>
                <Row>
                    <Col>
                        <img src={require('assets/images/Pages/About/about-us.png')} alt="" className='img-fluid rounded my-4' loading='lazy' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TopComponent