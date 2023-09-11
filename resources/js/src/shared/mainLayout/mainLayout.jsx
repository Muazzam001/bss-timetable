import React from 'react';
import Footer from '../footer/footer';
import Header2 from '../header2/header2';
import HeaderTop from '../headerTop/headerTop';

const MainLayout = ({ children, headerItem }) => {
    return (
        <>
            <HeaderTop/>
            <Header2 headerItem={headerItem}/>
            {children}
            <Footer />
        </>
    )
}

export default MainLayout