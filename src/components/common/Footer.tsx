import AppStoreComponent from 'Pages/Landing/Countries/Default/Components/AppStoreComponent'
import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import BlueLogo from './BlueLogo'

const Footer = () => {
    return (
        <div id="footer">
            <Container>
                <Row>
                    <Col className='px-5'>
                        <div className="get-started py-5 px-5">
                            <Row>
                                <Col md="6">
                                    <h3>Get started now</h3>
                                    <p>We get your money where you want it to go.
                                        Distance means nothing to us.</p>
                                    <AppStoreComponent />
                                </Col>
                                <Col md="6" className='d-md-block d-none'>
                                    <div className="img-div">
                                        <img src={require('assets/images/svg/Components/Footer/footer_phone.svg').default} className="img-fluid image mb-n5" alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='negative-margin bg-artboard'>
                <Container>
                    <Row>
                        <Col md="5">
                           <Link to="/"> <BlueLogo /></Link>
                            <p className='small text-muted mt-3'>Your online parallel market platform. Pesapeer Limited, Canada, is registered with the Financial Transactions and Report Analysis Centre of Canada (M20300281) as a Money Service Business.</p>
                            {["twitter", "instagram", "linkedin", "facebook"].map((icon) => (
                                <img src={require(`assets/images/svg/Components/Footer/ic_${icon}.svg`)} key={icon} className="mr-2" alt={icon} />
                            ))}
                        </Col>
                        {[
                            {
                                header: "Product",
                                links: [
                                    {
                                        title: 'FAQ',
                                        link: '/faq'
                                    }, {
                                        title: 'Features',
                                        link: '/features'
                                    }, {
                                        title: 'Business',
                                        link: '/business'
                                    }
                                ]
                            },
                            {
                                header: "About us",
                                links: [
                                    {
                                        title: 'Our Why',
                                        link: '/about'
                                    }, {
                                        title: 'Our Team',
                                        link: '/team'
                                    }, {
                                        title: 'Blog',
                                        link: '/blog'
                                    }
                                ]
                            }, {
                                header: "Legal",
                                links: [
                                    {
                                        title: 'Terms and Conditions',
                                        link: '/terms'
                                    }, {
                                        title: 'Privacy Policy',
                                        link: '/privacy'
                                    }
                                ]
                            }
                        ].map((item) => (
                            <Col key={item.header}>
                                <h5>{item.header}</h5>
                                <ul className='footer-links'>
                                    {item.links.map((link) => (
                                        <li key={link.link}>
                                            <Link className='text-muted small' to={link.link}>{link.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Footer