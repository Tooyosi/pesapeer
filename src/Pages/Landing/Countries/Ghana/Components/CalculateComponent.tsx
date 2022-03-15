import { onChange } from 'Helpers/utility'
import React, { useState } from 'react'
import { Card, CardBody, Col, Container, Input, Row } from 'reactstrap'
import { CurrencyInput } from '../../Default/Components/CurrencyInput'

const CalculateComponent = () => {
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
        <div id='calculate-component' className='my-5 py-md-5 py-3'>
            <Container>
                <Row>
                    <Col md="6" className='align-self-center'>
                        <h2 className='text-secondary pr-md-5 pr-0'>
                            Calculate your transactions <br /> quicker with our currency <br /> calculator
                        </h2>
                        <p className="text-body-light small">Get realtime currency calculations before initiating <br /> your transactions</p>
                    </Col>
                    <Col md="6">
                        <Card className='exchange-card'>
                            <CardBody>
                                <p className="small text-primary font-weight-bold">Exchange rate</p>
                                <h2>1 CAD = 4.91445 GHS</h2>
                                <div className="currency-div p-2">
                                    <div className='border-bottom mt-2 mb-3'>
                                        <p className="small mb-0 text-body-light">If you send</p>
                                        <CurrencyInput
                                            defaultSelected="CA"
                                            formName="formConvert"
                                            formControl={state.formConvert}
                                            inputName="sendAmount"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <p className="small mb-0 text-body-light">They get</p>
                                        <CurrencyInput
                                            defaultSelected="NG"
                                            formName="formConvert"
                                            formControl={state.formConvert}
                                            inputName="receiveAmount"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div>
                                        <p className="small text-muted"> ⚡️ Delivery method</p>
                                    </div>
                                    <div className='ml-auto'>
                                        <Input
                                            type="select"
                                            className='small text-muted border-0'>
                                            <option>
                                                Choose delivery method
                                            </option>
                                        </Input>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CalculateComponent