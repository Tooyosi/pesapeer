import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import AppStoreComponent from '../../Default/Components/AppStoreComponent'


export const TopComponent = () => {

    return (
        <Container className='vh-90 d-flex align-items-center'>
            <Row>
                <Col md="8">
                    <h1 className='text-white'>
                        Send money from Canada to Kenya easily.
                    </h1>
                    <p className="small text-white">
                    Send money to Nigeria instantly with ZERO charges. You can pay directly to Bank Accounts and Mobile Wallets.
                    </p>
                    <AppStoreComponent />
                </Col>
            </Row>
        </Container>
    )
}
