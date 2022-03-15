import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const EasiestComponent = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col md="6">
                <img src={require('assets/images/Pages/Landing/uk-easiest-man.jpg')} height="50" className="img-fluid" alt="" />

                </Col>
                <Col md="6" className='align-self-center'>
                    <h2 className='my-5'>The best way to send money from <br /> Canada to the UK instantly.</h2>
                    {[
                        {
                            image: 'send-money',
                            text:'Send money, pay bills, check exchange rates - all on the app! Nigeria on your phone!'
                        },{
                            image: 'exchange-cad',
                            text:'Send CAD and they receive Naira with the best exchange rates. '
                        },{
                            image: 'fast-and-secure',
                            text:'It is fast and secure. Try for free.'
                        }
                    ].map((item, i)=>(
                            <div key={i}>
                                    <div>
                                        <img src={require(`assets/images/svg/pages/Landing/${item.image}.svg`)} alt="" />
                                    </div>
                                    <p className='my-3'>{item.text}</p>
                            </div>
                    ))}
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default EasiestComponent