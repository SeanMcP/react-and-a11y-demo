import React from 'react';
import { navigate } from '@reach/router';

import * as S from './Header.styled';

function Header() {
    return (
        <S.Header>
            <S.Heading onClick={() => navigate('/')}>Hacker Recs</S.Heading>
            <S.Tagline>The best links in tech</S.Tagline>
            <S.Button onClick={() => navigate('/post')} inverse>
                Post
            </S.Button>
        </S.Header>
    );
}

export default Header;
