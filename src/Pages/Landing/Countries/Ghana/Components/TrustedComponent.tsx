import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const TrustedComponent = () => {
    return (
        <div id="trusted">
            <Container className='my-5'>
                <Row>
                    <Col md="7">
                        <h3 className='text-dark-blue'>
                            We are trusted by <span className='text-warning'>2500+</span> <img src={require('assets/images/svg/pages/Landing/trusted_img.svg').default} alt="" width="150" /> <br /> 
                            people. Here's why you should send money with Pesapeer.
                        </h3>
                    </Col>
                </Row>
            </Container>
            <Container className='my-5'>
                <Row>
                    <Col md="6">
                        <div className="simplest-card cards mt-4">
                            <h3 className='text-dark-blue'>The simplest way to send money</h3>
                            <p className='small text-body-light'>
                                With Pesapeer, sending money is the best borderless way to send and receive money.
                            </p>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="fees-card cards mt-md-n5 mt-4">
                            <h3>Zero Fees!
                                Send money for free</h3>
                            <p className='small'>
                                No hidden charges or transaction fee. All your transactions are transparent.
                            </p>
                        </div>

                    </Col>
                </Row>
                <Row >
                    <Col md="6">
                        <div className="trust-card cards mt-4">
                            <h3 className='text-dark-blue'>You can trust us.</h3>
                            <p className='small text-body-light'>
                                Your transactions are secure. Our facial verification login, encrypted platform, and fraud monitoring tools keep your personal information safe.
                            </p>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="earn-card cards mt-md-n5 mt-4">
                            <h3 className='text-dark-blue'>Earn with Pesapeer Refer</h3>
                            <p className='small text-body-light'>
                                Earn money when you tell someone about Pesapeer. Create your unique referral code easily and smiling  to the bank. Terms and conditions apply.
                            </p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TrustedComponent