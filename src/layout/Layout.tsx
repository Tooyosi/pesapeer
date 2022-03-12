import ScrollToTop from 'components/common/ScrollToTop';
import React from 'react';

export const Layout: React.FC<any> = ({ children }) => {
    return (
        <ScrollToTop>
            {children}
        </ScrollToTop>
    )
}
