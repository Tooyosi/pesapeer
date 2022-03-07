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


    const handleChange = (e: HTMLFormElement)=>{
        onChange(e, setState)
    }
    return (
        <div id='top'>
            <Container className='vh-90 align-items-center d-flex '>
                <Row>
                    <Col md="6" className='text-center mx-auto mb-4'>
                        <h1 className='text-white'>Free Transfers. No Hidden Fees.</h1>
                        <p className='text-pesa-menu'>
                            Pesapeer helps you send money globally. We pay directly to Bank Accounts and Mobile Wallets in the countries that we support. We also provide Cash Pickup options where available.
                        </p>
                        
                        <AppStoreComponent />
                    </Col>
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
                                            inputName ="receiveAmount"
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
                                            inputName ="sendAmount"
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
                </Row>
            </Container>
        </div>
    )
}
