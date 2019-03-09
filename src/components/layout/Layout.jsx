import React from 'react';

import Footer from './Footer';
import Header from './Header';

import * as S from './Layout.styled'

function Layout({ children }) {
    return (
        <S.Layout>
            <Header />
            <S.Main>{children}</S.Main>
            <Footer />
        </S.Layout>
    );
}

export default Layout;
