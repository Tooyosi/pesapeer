import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import MoneyIcon from './Icons/Money'
import SendIcon from './Icons/Send'
import WalletIcon from './Icons/Wallet'

const WalletComponent = () => {
    return (
        <div id='wallet' className='mt-5 pt-5'>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <Card className='rounded-card'>
                            <CardBody className='p-5'>
                                <Row>
                                    <Col md="6" className='align-self-center'>
                                        <h2 className="text-white">Own your Naira virtual wallet and move between Canadian Dollars and Nigerian Naira seamlessly. </h2>
                                    </Col>
                                    <Col md="6">
                                        <img src={require('assets/images/Pages/Landing/wallet-phone.png')} className="img-fluid negative-top-img" alt="" />
                                    </Col>
                                </Row>
                                <Row>
                                    {[
                                        {
                                            icon: WalletIcon,
                                            text: 'Set up your free Virtual wallet in Canada. It takes 60 seconds!'
                                        },
                                        {
                                            icon: MoneyIcon,
                                            text: 'Receive money from Nigeria  to Canada in your Virtual Wallet. Instantly'
                                        },
                                        {
                                            icon: SendIcon,
                                            text: 'Send money from your CAD wallet to your Naira wallet in one clean swoop. '
                                        }
                                    ].map(({ icon: Icon, text }, i) => (
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

export default WalletComponent