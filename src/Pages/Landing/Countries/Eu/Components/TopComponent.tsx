import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import AppStoreComponent from '../../Default/Components/AppStoreComponent'


const TopComponent = () => {

    return (
        <Container className='vh-90 d-flex align-items-center'>
            <Row>
                <Col md="8">
                    <h1 className='text-white'>
                    Send money from Canada to Europe
with Pesapeer
                    </h1>
                    <p className="small text-white">
                    Get the best exchange rates and make fast secure transactions from Canada to the EU with no transfer fees.
                    </p>
                    <AppStoreComponent />
                </Col>
            </Row>
        </Container>
    )
}

export default TopComponent