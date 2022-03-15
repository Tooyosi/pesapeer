import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const SafeComponent = () => {
    return (
        <div id="safe">
            <Container className='my-5'>
                <Row>
                    <Col md="6">
                        <img src={require('assets/images/Pages/Landing/safe-woman.jpg')} className="img-fluid rounded" alt="" />
                    </Col>
                    <Col md="6" className='align-self-center'>
                        <h2 className='text-secondary'>
                            Your money is <br /> safe with us.
                        </h2>
                        {["Your transactions are secure.", "We are registered with the Financial Transactions and Report Analysis Centre of Canada (M20300281) as a Money Service Business.", "Our facial verification and password encrypted platform, security and fraud monitoring tools keep your personal information safe."].map((text, i) => (
                            <div key={i} className='d-flex align-items-center my-3'>
                                <div className="icon-div mr-2">
                                    <img src={require(`assets/images/svg/icons/ic_green_check.svg`).default} alt='' />
                                </div>
                                <p className="text-muted mb-0 small">{text}</p>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SafeComponent