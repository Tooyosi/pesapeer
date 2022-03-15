import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const SendingComponent = () => {
  return (
    <div id='sending-component' className='mb-n5'>
      <Container className='vh-80 d-flex'>
        <Row>
          <Col md="6" className='mt-auto'>
            <h2 className="text-white">Sending money to your family, friends and network in Canada just got easier with Pesapeer</h2>
            <p className="small text-white">No matter the amount, we will get your money there. </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SendingComponent