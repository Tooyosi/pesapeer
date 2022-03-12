import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    Container,
    DropdownItem,
    Row,
    Col
} from 'reactstrap';
import Logo from './Logo';
import { Link } from "react-router-dom"

const Header = ({ toggler, logoType, ...props }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdown, setIsDropdown] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const toggleDropdown = (param?: any) => setIsDropdown(param || !isDropdown);

    const getActiveClassName = (url: string) => {
        if (`${window.location.pathname}${window.location.hash}` === url) {
            return "active"
        } else {
            return ''
        }
    }

    return (
        <Navbar id='header' color='transparent' expand="md" className='pt-3'>
            <Container>
                <Link className="nav-brand" to="/">
                    <Logo logoType={logoType} style={{ height: "50px", maxWidth: '180px' }} className="img-fluid" />
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto mt-md-0 mt-3" navbar>
                        <Dropdown
                            nav
                            inNavbar
                            isOpen={isDropdown}
                            // onMouseEnter={() => toggleDropdown(true)}
                            // onMouseLeave={() => toggleDropdown(false)}
                            toggle={() => toggleDropdown()}
                        >
                            <DropdownToggle nav caret className='p-0  mx-2 my-md-0 my-2'>
                                Countries <img src={require(`assets/images/svg/Components/Header/globe.svg`).default} className="mr-2 mx-1" width="15" alt={"World"} />
                            </DropdownToggle>
                            <DropdownMenu className='dropdown-menu-right mt-3'>
                                <Container>
                                    <div className='d-block d-md-flex my-3'>
                                        {[
                                            {
                                                name: 'Ghana',
                                                flag: '',
                                                code: 'gh'
                                            }, {
                                                name: 'Nigeria',
                                                flag: '',
                                                code: 'ng'
                                            },
                                            {
                                                name: 'Kenya',
                                                flag: '',
                                                code: 'ka'
                                            },
                                            {
                                                name: 'Uganda',
                                                flag: '',
                                                code: 'ug'
                                            },
                                            {
                                                name: 'India',
                                                flag: '',
                                                code: 'in'
                                            },
                                            {
                                                name: 'Philippines',
                                                flag: '',
                                                code: 'phil'
                                            },
                                            {
                                                name: 'Us',
                                                flag: '',
                                                code: 'us'
                                            }
                                        ].map((country) => (
                                            <div key={country.code}>
                                                <DropdownItem href={`/?country=${country.code}`} className={`${getActiveClassName('/#easybox')} d-flex align-items-center`}>
                                                    <img src={require(`assets/images/svg/Components/Header/${country.code}.svg`)} className="mr-2" width="20" alt={country.name} />  {country.name}
                                                </DropdownItem>
                                            </div>
                                        ))}

                                    </div>
                                    <div className="d-block d-md-flex mb-3">
                                        {[

                                            {
                                                name: 'Malaysia',
                                                flag: '',
                                                code: 'mal'
                                            }, {
                                                name: 'Mexico',
                                                flag: '',
                                                code: 'mex'
                                            }
                                        ].map((country) => (
                                            <div key={country.code}>
                                                <DropdownItem href={`/?country=${country.code}`} className={`${getActiveClassName('/#easybox')} d-flex align-items-center`}>
                                                    <img src={require(`assets/images/svg/Components/Header/${country.code}.svg`)} className="mr-2" width="20" alt={country.name} />  {country.name}
                                                </DropdownItem>
                                            </div>
                                        ))}
                                    </div>
                                </Container>
                            </DropdownMenu>
                        </Dropdown>
                        {[{
                            name: 'FAQs',
                            link: '/faq'
                        }, {
                            name: 'Contact',
                            link: '/contact'
                        }].map((route) => (
                            <NavItem>
                                <Link className={`${getActiveClassName(`${route.link}`)}  mx-2 my-md-0 my-2`} to={route.link}>{route.name}</Link>
                            </NavItem>
                        ))}
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;