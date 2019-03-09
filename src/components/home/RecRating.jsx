import React from 'react';

import * as S from './RecRating.styled';

const categoryEmojiMap = {
    like: '😄',
    thoughtful: '🤔',
    angry: '😠',
    sad: '😢'
};

function RecRating({ id, rating }) {
    const render = [];
    for (const category in rating) {
        render.push(
            <S.Rating key={`${id}-${category}`} type={category}>
                <S.Emoji>{categoryEmojiMap[category]}</S.Emoji>
                <S.Bubble>{rating[category].length}</S.Bubble>
            </S.Rating>
        );
    }
    return <S.Container>{render}</S.Container>;
}

export default RecRating;
