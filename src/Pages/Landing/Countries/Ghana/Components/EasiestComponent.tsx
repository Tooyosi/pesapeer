import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CadIcon from './Icons/CadIcon'
import FastIcon from './Icons/FastIcon'
import SendMoneyIcon from './Icons/SendMoney'

const EasiestComponent = () => {
    return (
        <div id='easiest' className='mt-5 pt-5'>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <Card className='rounded-card'>
                            <CardBody className='p-5'>
                                <Row>
                                    <Col md="6" className='align-self-center'>
                                        <h2 className="text-white">The easiest way to send money from Canada to Ghana, fast!</h2>
                                    </Col>
                                    <Col md="6">
                                        <img src={require('assets/images/Pages/Landing/gh-easiest.png')} className="img-fluid negative-top-img" alt="" />
                                    </Col>
                                </Row>
                                <Row>
                                    {[
                                        {
                                            icon: SendMoneyIcon,
                                            text: 'Send money, pay bills, check exchange rates - all on the app! Ghana on your phone!'
                                        },
                                        {
                                            icon: CadIcon,
                                            text: 'Send CAD and they receive Cedis with the best exchange rates. '
                                        },
                                        {
                                            icon: FastIcon,
                                            text: 'It is fast and secure. Try for free.'
                                        }
                                    ].map(({ 
                                        icon: Icon,
                                         text }, i) => (
                                        <Col md="4" key={i}>
                                            <Icon />
                                            <p className="text-white mt-2 pr-md-5 pr-0">
                                                {text}
                                            </p>
                                        </Col>
                                    ))}
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default EasiestComponent