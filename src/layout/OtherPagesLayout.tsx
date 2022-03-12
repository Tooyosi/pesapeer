import React from 'react';
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import { Col, Container, Row } from 'reactstrap';
import ScrollToTop from 'components/common/ScrollToTop';

export const OtherPagesLayout: React.FC<any> = ({ children, header }) => {
    return (
        <ScrollToTop>
            <Header />
            <div className='bg-secondary py-4'>
                <Container>
                    <Row>
                        <Col>
                            <h4 className='text-white'>{header}</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
            {children}
            <Footer />
        </ScrollToTop>
    )
}
