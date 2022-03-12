import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const GlobalOutlookComponent = () => {
    return (
        <div className='global bg-primary vh-70'>
            <Container>
                <Row>
                    <Col md="8" className='mx-auto'>
                        <div className="text-center">
                            <h1 className='text-white'>
                                We have a global outlook
                            </h1>
                            <p className='text-white'>
                                Our vision is to unlock payments across the world and we are moving towards this with agility and determination.

                                <br /><br /> This is not an easy task, but our ambition is to make borderless payments for all our customers a true reality. Our approach is to use insight led market penetration strategies and financial technology to achieve this.
                            </p>
                        </div>
                        <Container>
                            <Row className='pt-5 mt-5'>
                                {[{ header: "10+", text: "Countries" }, { header: "5", text: "Continents" }, { header: "23,000+", text: "Transactions completed" }].map((item) => (

                                    <Col md="4" key={item.header} className='text-white text-center'>
                                        <h1>{item.header}</h1>
                                        <p>{item.text}</p>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default GlobalOutlookComponent