import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const FeaturesComponent = () => {
    return (
        <div id="features" className='py-5'>
            <Container>
                <Row>
                    <Col md="6">
                        <img src={require('assets/images/svg/pages/Landing/features-image.svg').default} alt="features" className='img-fluid' />
                    </Col>
                    <Col md="6" className='d-flex align-items-center'>
                        <div>
                            <h1>Do it with <span className='text-primary'>Pesapeer</span></h1>
                            {[{
                                header: 'pay',
                                text: 'Pay school fees, suppliers/vendors, bills. Get value for your money at great rates.'
                            },{
                                header: 'send',
                                text: 'Send money globally, free of charge! Send to Banks or Mobile Wallets as you wish!'
                            },{
                                header: 'receive',
                                text: 'Receive in multiple currencies! Open different currency wallets that enable you receive from different countries across the globe.'
                            }].map((param)=>(
                                <div key={param.header} className='d-flex'>
                                    <div className='icon-div mr-3'>
                                        <img src={require(`assets/images/svg/pages/Landing/${param.header}.svg`)} alt={param.header} />
                                    </div>
                                    <div>
                                        <h3 className='text-capitalize'>{param.header}</h3>
                                        <p>{param.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FeaturesComponent