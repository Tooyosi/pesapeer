import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import AppStoreComponent from './AppStoreComponent'

const BorderlessComponent = () => {
  return (
    <div id='borderless' className='vh-80 d-flex align-items-center'>
        <Container>
            <Row>
                <Col md="6">
                    <h3 className='text-white'>Enjoy free, borderless transfers.</h3>
                    <div className='mb-5 mt-4 text-white align'>
                            {[{
                                img: 'spark',
                                text: 'We take away all the stress of the banking halls and 3rd party agents you might not trust and enable fast and seamless transfers globally.'
                            },{
                                img: 'graph',
                                text: 'We offer great and competitive exchange rates for you. You get real value for your money in the currency you send to.'
                            },{
                                img: 'transfer',
                                text: 'Transfers are free, fast and secure.'
                            }].map((param)=>(
                                <div key={param.img} className='d-flex'>
                                    <div className='icon-div mr-3'>
                                        <img src={require(`assets/images/svg/pages/Landing/${param.img}.svg`)} alt={param.img} />
                                    </div>
                                    <div>
                                        <p>{param.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <AppStoreComponent />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default BorderlessComponent