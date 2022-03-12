import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Container
} from 'reactstrap';
import Logo from './Logo';
import { Link } from "react-router-dom"

const AboutHeader = ({ ...props }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const getActiveClassName = (url: string) => {
        if (`${window.location.pathname}${window.location.hash}` === url) {
            return "active"
        } else {
            return ''
        }
    }

    return (
        <Navbar id='header' color='primary' expand="md" className='pt-3'>
            <Container>
                <Link className="nav-brand" to="/">
                    <Logo style={{ height: "50px", maxWidth: '180px' }} className="img-fluid" />
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto mt-md-0 mt-3" navbar>
                        {[{
                            name: 'Our Why',
                            link: '/about'
                        },{
                            name: 'Our Team',
                            link: '/team'
                        },{
                            name: 'Blog',
                            link: '/blog'
                        }].map((route) => (
                            <NavItem>
                                <Link className={`${getActiveClassName(`${route.link}`)} text-white mx-2 my-md-0 my-2`} to={route.link}>{route.name}</Link>
                            </NavItem>
                        ))}
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default AboutHeader;