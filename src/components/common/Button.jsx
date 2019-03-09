import React from 'react';

import * as S from './Button.styled';

function Button({ inverse, ...props}) {
    return <S.Button {...props} inverse={inverse} />;
}

export default Button;
