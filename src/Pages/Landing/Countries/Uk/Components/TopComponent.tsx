import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import AppStoreComponent from '../../Default/Components/AppStoreComponent'


const TopComponent = () => {

    return (
        <Container className='vh-90 d-flex align-items-center'>
            <Row>
                <Col md="8">
                    <h1 className='text-white'>
                        Send money from Canada to UK easily.
                    </h1>
                    <p className="small text-white">
                    No transfer fees. From Canada to the UK  you can send money with no transfer charges. 
                    </p>
                    <AppStoreComponent />
                </Col>
            </Row>
        </Container>
    )
}

export default TopComponent