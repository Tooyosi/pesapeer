import { onChange } from 'Helpers/utility'
import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import AppStoreComponent from './AppStoreComponent'
import { CurrencyInput } from './CurrencyInput'

export const TopComponent = () => {
    const [state, setState] = useState({
        formConvert: {
            sendAmount: 0,
            receiveAmount: 0
        }
    })


    const handleChange = (e: HTMLFormElement) => {
        onChange(e, setState)
    }
    return (
        <div className='top'>
            <div className="first">
                <Container fluid className='vh-90 align-items-center d-flex '>
                    <Row>
                        <Col md="6" className='mb-4 fitst-col'>
                            <h1 className='text-secondary'>Send money from Canada to Ghana easily.</h1>
                            <p className='text-pesa-menu mt-4'>
                                Send money to Ghana instantly with ZERO charges. You can pay directly to Bank Accounts and Mobile Wallets.
                            </p>
                            <div className="d-flex">
                                <AppStoreComponent />
                            </div>
                        </Col>
                        <Col md="6" className='mb-4'>
                            <img src={require('assets/images//backgrounds/bg_ghana_top.svg').default} className="img-fluid top-img" alt="" />
                        </Col>
                    </Row>
                </Container>
                {/* <Row>
                    <Col md="8" className='mx-auto mt-5'>
                        <div className='countrys-div my-3 p-3 text-white'>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>If you send</p>
                                        <CurrencyInput
                                            defaultSelected="CA"
                                            formName="formConvert"
                                            formControl={state.formConvert}
                                            inputName="receiveAmount"
                                            onChange={handleChange}
                                        />
                                        <p>
                                            Our transaction fee: $0.00 CAD
                                        </p>
                                    </Col>
                                    <Col>
                                        <p>They will receive </p>
                                        <CurrencyInput
                                            defaultSelected="IN"
                                            formName="formConvert"
                                            formControl={state.formConvert}
                                            inputName="sendAmount"
                                            onChange={handleChange}
                                        />
                                        <p>
                                            Recipients get cash within:⚡️ 1.5 secs
                                        </p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row> */}
            </div>
            <div className="second">
                <Container fluid>
                    <Row>
                        <Col md="6" className='negative-top'>
                            <img src={require('assets/images/svg/pages/Landing/gh_girl.svg').default} className="img-fluid " alt="smiling girl" />
                        </Col>
                        <Col md="6" className='d-flex align-items-end'>
                            <img src={require('assets/images/svg/pages/Landing/gh_review.svg').default} className="img-fluid negative-left" alt="smiling girl" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
