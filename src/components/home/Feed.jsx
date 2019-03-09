import React from 'react';

import Rec from './Rec';
import { AppContext } from '../../reducers/appReducer';

import * as S from './Feed.styled'

function Feed() {
    const {
        state: { recs }
    } = React.useContext(AppContext);
    return (
        <S.Container>
            {recs.map((rec) => (
                <Rec key={rec.id} {...rec} />
            ))}
        </S.Container>
    );
}

export default Feed;
