import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import AppStoreComponent from './AppStoreComponent'

const GetStarted = () => {
    return (
        <div id='get-started'>
            <Container>
                <Row>
                    <Col md="6" className='mx-auto text-center my-5'>
                        <h2>Get started in 3 easy steps</h2>
                    </Col>
                </Row>

                <Row>
                    {[{
                        number: 1,
                        header: 'Create a free account',
                        text: 'Create a free Pesapeer account and verify your identity'
                    }, {
                        number: 2,
                        header: 'Fund your wallet',
                        text: 'From your bank app, send money directly to your Pesapeer wallet for free via interac'
                    }, {
                        number: 3,
                        header: 'Send money',
                        text: 'Enter your amount, choose a recipient and send money. That’s literally all'
                    }].map((details, i) => (
                        <Col key={i} md="4" className='text-center'>
                            <div className=''>
                                <h3 className='text-primary'>{details.number}</h3>
                                <h4>{details.header}</h4>
                                <p className="text-muted small">{details.text}</p>
                            </div>
                            {details.number < 3 && <hr className='d-none d-md-block bg-primary' />}
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col md="6" className='mx-auto my-5'>
                        <div className="d-flex justify-content-center">
                        <AppStoreComponent />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GetStarted