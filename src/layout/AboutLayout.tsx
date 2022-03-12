import React from 'react';
import Footer from "components/common/Footer";
import ScrollToTop from 'components/common/ScrollToTop';
import AboutHeader from 'components/common/AboutHeader';

export const AboutLayout: React.FC<any> = ({ children, header }) => {
    return (
        <ScrollToTop>
            <AboutHeader />
            {children}
            <Footer />
        </ScrollToTop>
    )
}
