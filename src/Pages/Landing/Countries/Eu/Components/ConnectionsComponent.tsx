import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import AppStoreComponent from '../../Default/Components/AppStoreComponent'

const ConnectionsComponent = () => {
  return (
    <div id='connections' className='my-5 uk-connections'>
      <Container className='vh-60 d-flex align-items-center'>
        <Row>
          <Col md="6" className='py-5 align-self-center'>
            <h2 className='text-white'>Connections you can trust. Transfers that are free. </h2>
            <p className="text-white small my-3">We are dismantling the borders and distance between people and money and we are doing it at no charge. With Pesapeer, you can transfer money across different countries; languages; tribes with no middle man involved and with no fees. </p>
            <AppStoreComponent />
          </Col>
          <Col md="6" className='d-md-none d-block'>
            <img src={require('assets/images/svg/pages/Landing/uk-connection-man.svg').default} className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ConnectionsComponent